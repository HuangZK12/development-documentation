# 常用组件-vue <Badge type="tip" text="vue2.7+" vertical="middle" />

## 文件上传 ButtonUpload
> 二次封装el-upload组件

### 组件代码
```vue
<template>
	<div class="button-upload-container">
		<el-upload v-bind="$attrs" class="upload"
			:class="{ files_position_bottom: !!filesList.length && filesPosition == 'bottom' }"
			:style="{ 'align-items': filesList.length > 2 ? 'flex-start' : 'center' }" :action="action"
			:before-remove="beforeRemove" :multiple="limit > 1" :limit="limit" :on-exceed="handleExceed"
			:file-list="avatar ? [] : filesList" :before-upload="beforeUpload" :on-success="onSuccess" :on-error="onError"
			:http-request="requestApi" :on-remove="onRemove">
			<div class="upload_avatar" v-if="avatar">
				<ImagePreview v-if="fileName" v-model="fileName" width="100%" height="100%" @del="avatarRemove" />
				<template v-else>
					<img src="@img/avatar.png" alt="上传头像">
					<span class="avatar_tips">上传头像</span>
				</template>
			</div>
			<template v-else>
				<el-button :type="buttonType">{{ text }}</el-button>
				<div slot="tip" class="tip-container" v-if="filesList.length === 0">
					<div v-if="filesList.length == 0 && !hideTips">
						支持扩展名：
						<span class="type" v-for="item in fileTypeLower.slice(0, fileTypeLength)" :key="item">{{ item }}</span>
						<i v-if="fileTypeLower.length >= fileTypeLength">...</i>
					</div>
					<slot></slot>
				</div>
			</template>
		</el-upload>
	</div>
</template>

<script setup>
import { MessageBox } from 'element-ui';
import { Message } from 'element-ui'
import { uploadFIle } from '@/api/upload';
import ImagePreview from '../ImagePreview/ImagePreview.vue';
const { ref, computed } = require("vue")

const props = defineProps({
	avatar: {
		type: Boolean,
		default: false
	},
	api: {
		type: Function,
		default: null
	},
	// 上传文件的数量
	limit: {
		type: Number,
		default: 1
	},
	// 上传文件的地址
	action: {
		type: String,
		default: process.env.VUE_APP_BASE_API + '/file/uploads'
	},
	// 上传按钮的类型
	buttonType: {
		default: 'default',
		type: String
	},
	// 支持的文件格式（上传前文件校验）
	fileType: {
		default: () => [],
		type: [Array, String]
	},
	// 显示省略号的长度
	fileTypeLength: {
		default: 6,
		type: [Number, String]
	},
	// 上传单个文件限制的大小（单位 M）
	fileSize: {
		type: Number,
		default: 1024
	},
	// 是否隐藏提示框
	hideTips: {
		type: Boolean,
		default: false,
	},
	// 按钮文字 
	text: {
		type: String,
		default: '点击上传'
	},
	// v-model绑定回显，limit==1并且绑定fileId或者fileName时候可不填写
	value: {
		type: Array,
		default: () => [],
	},
	fileId: {
		// 双向绑定的文件id，:fileId.sync='formData.fileId' 仅限limit===1
		type: String
	},
	fileName: {
		// 双向绑定的文件名，:fileName.sync='formData.fileName' 仅限limit===1
		type: String
	},
	filesPosition: {
		// 文件列表显示位置
		default: 'right',
		type: String
	}
})

const emits = defineEmits([
	'success',	// 上传成功
	'error', // 上传失败
	'remove', // 删除后
	'input',
	'update:fileId',
	'update:fileName',
])
const requestApi = computed(() => props.api ? props.api : uploadFIle)
// 头像的话回显
const avatarUrl = ref(null)
// 是否显示提示
const showTip = ref(true);
// 文件类型
const fileTypes = {
	image: ['png', 'jpg', 'jpeg', 'svg', 'gif', 'bmp', 'ico'],
	video: ['swf', 'avi', 'flv', 'mpg', 'rm', 'mov', 'wav', 'asf', '3gp', 'mkv', 'rmvb', 'mp4'],
	office: ['doc', 'docx', 'docm', 'pdf','wps', 'dotx', 'dotm', 'xls', 'xlsx', 'xlsm', 'xltx', 'xltm', 'xlsb', 'xlam', 'PPT', 'PPTx', 'PPTm', 'pPSx', 'pPSm', 'potx', 'potm', 'ppam']
}

// 文件列表
const fileTypeLower = computed(() => {
	if (typeof props.fileType === 'string') {
		return fileTypes[props.fileType].map(t => t.toLowerCase())
	} else {
		return props.fileType.map(t => t.toLowerCase())
	}
})
const filesList = computed({
	get: () => {
		if ((props.limit == 1 && !props.value.length) && (props.fileName || props.fileId)) {
			return [{ url: props.fileId || props.fileName, name: props.fileName || props.fileId }]
		} else {
			return props.value
		}
	},
	set: (value) => {
		emits('input', value)
	}
})

// 删除前
const beforeRemove = (file, fileList) => {
	if (file.status === 'success') {
		// 不对没上传成功得文件进行提示
		return MessageBox.confirm(`是否删除${file.name}?`, '删除', {
			type: 'warning'
		}).then(() => {
			showTip.value = !fileList || fileList.length - 1 <= 0
		})
	} else {
		return true
	}
}
// 删除后
const onRemove = (file, fileList) => {
	emits('input', fileList)
	if (props.limit == 1) {
		emits('update:fileId', null)
		emits('update:fileName', null)
	}
	emits('remove', file)
}
// 删除头像
function avatarRemove() {
	filesList.value = []
	onRemove()
}
// 限制数量
const handleExceed = (files, fileList) => {
	Message.warning(`当前限制选择 ${props.limit} 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
}
// 限制格式大小
const beforeUpload = (file) => {
	// 选择文件的小写后缀
	const type = file.name.split('.').at(-1).toLowerCase()
	// 选择文件的大小 单位M
	const size = file.size / 1024 / 1024 < props.fileSize;

	if (!fileTypeLower.value.includes(type) && fileTypeLower.value.length) {
		Message.error(`上传文件类型不得为${type}格式,只支持${fileTypeLower.value}`);
		return false
	}
	if (!size) {
		Message.error(`上传文件大小不得超过${props.fileSize}M`);
		return false
	}
	return true;
}
// 上传成功
const onSuccess = (response, file, fileList) => {
	showTip.value = !fileList || fileList.length <= 0
	if (response.code == 200) {
		Message.success(`${file.name}上传成功！`)
	} else {
		Message.error(`${file.name}上传失败，${response.data.message}`)
	}
	emits('success', response, file, fileList)
	emits('input', mapFileList(fileList))
	if (props.limit == 1) {
		emits('update:fileId', response.data[0].id)
		emits('update:fileName', response.data[0].newFileName)
		if (props.avatar) {
			avatarUrl.value = response.data[0].newFileName
		}
	}
}
// 上传失败
const onError = (err, file, fileList) => {
	Message.error(`${file.name}上传失败，${err.data.message}`)
	emits('error', err, file, fileList)
}

const mapFileList = (list) => list.map(file => {
	if (file?.name && file?.status && file?.url && file?.uid) {
		return file
	} else if (file.response?.data) {
		const [__file] = file.response.data
		return {
			newFileName: __file.newFileName,
			name: __file.originalFileName,
			url: __file.id,
			id: __file.id,
			status: file.status,
			uid: file.uid
		}
	}
	else {
		return file
	}
})
</script>

<style lang="scss" scoped>
.upload_avatar {
	height: 100%;
	border: 1px solid #e5e5e5;
	position: relative;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.avatar_tips {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		color: #979797
	}
}

.upload {
	display: flex;

	&.files_position_bottom {
		display: block;
	}

	.tip-container {
		color: #ccc;
		margin-left: 10px;
		font-size: 12px;
		line-height: 20px;
		width: fit-content;
		white-space: nowrap;
		max-width: 400px;
		overflow: hidden;
		text-overflow: ellipsis;
		.type:not(:last-of-type)::after {
			content: '、'
		}
	}

	// ::v-deep(.el-upload-list	) {
	// 	position: absolute;
	// 	top: 0;
	// 	left: 100px;
	// }
}
</style>
```
### Props

| 参数           | 说明                             | 类型          | 可选值     | 默认值        |
| :------------- | :------------------------------- | :------------ | :--------- | :------------ |
| avatar         | 是否作为头像上传                 | Boolean       | -          | false         |
| api            | 自定义上传接口方法               | Function      | -          | -             |
| limit          | 上传文件的数量限制               | Number        | -          | 1             |
| action         | 上传文件的接口地址               | String        | -          | /file/uploads |
| buttonType     | 上传按钮的类型                   | String        | -          | default       |
| fileType       | 支持的文件类型                   | Array/String  | -          | []            |
| fileTypeLength | 显示文件类型省略号的长度         | Number/String | -          | 6             |
| fileSize       | 单文件大小限制,单位M             | Number        | -          | 1024          |
| hideTips       | 是否隐藏提示信息                 | Boolean       | -          | false         |
| text           | 按钮文字                         | String        | -          | '点击上传'    |
| value          | 已上传的文件列表,用于回显        | Array         | -          | []            |
| fileId         | 上传的文件id,用于v-model双向绑定 | String        | -          | -             |
| fileName       | 上传的文件名,用于v-model双向绑定 | String        | -          | -             |
| filesPosition  | 文件列表显示位置                 | String        | top/bottom | right         |

### Events  

| 事件名          | 说明                       | 回调参数                 |
| :-------------- | :------------------------- | :----------------------- |
| success         | 上传成功时触发             | response, file, fileList |
| error           | 上传失败时触发             | error, file, fileList    |
| remove          | 文件删除时触发             | file                     |
| input           | 上传文件列表发生变化时触发 | value                    |
| update:fileId   | 上传的文件id发生变化时触发 | value                    |
| update:fileName | 上传的文件名发生变化时触发 | value                    |


## Teleport
> 该组件是一个手动封装的Teleport组件，用于将组件挂载到任何指定的元素上。

### 组件代码
```vue
<template>
  <div ref="el">
    <slot></slot>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const el = ref(null);
const props = defineProps({
  to: {
    type: String,
    default: 'body'
  }
});
onMounted(() => {
  teleport();
});
onBeforeUnmount(() => {
  unTeleport();
});
const teleport = () => {
  const target = document.querySelector(props.to) || document[props.to];
  if (target && el.value) {
    target.appendChild(el.value);
  }
}
const unTeleport = () => {
  if (el.value && el.value.parentNode) {
    el.value.parentNode.appendChild(el.value);
  }
}
</script>
```

### 使用方法

在需要使用该组件的页面中，引入组件并传入相应的参数即可。

### 参数说明

| 属性 | 默认值 | 类型   | 备注               |
| ---- | ------ | ------ | ------------------ |
| to   | body   | String | 插入的元素的选择器 |
