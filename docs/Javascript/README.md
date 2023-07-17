# JavaScript

## 饿了么表单验证
> 饿了么表单验证rules方法

### 代码
```js
/**
 *
 * @param {String} tip 提示项
 * @param {Object} options 提示配置
 * @returns element 表单规则
 * desc el-form-item 增加prop属性，rulers执行改函数
 */

let validatePhone = (rule, value, callback) => {
  if (!value) {
    callback(new Error("手机号不能为空！"));
  } else if (!/^1[3456789]\d{9}$/.test(value)) {
    //使用正则表达式进行验证手机号码
    callback(new Error("手机格式号不正确！"));
  } else {
    callback();
  }
};

export function elRule(tip = "请输入该项", options = {}) {
  const { type = null, tips = null, max, min, trigger = "blur" } = options;
  const rules = [
    {
      required: true,
      message: tip,
      trigger,
    },
  ];
  if (min && type !== "phone") {
    rules.push({
      trigger: "blur",
      min,
      message: `最少输入${min}个字符`,
    });
  }
  if (max && type !== "phone") {
    rules.push({
      trigger: "blur",
      max,
      message: `最多输入${max}个字符`,
    });
  }

  const whiteType = ["date", "array"];
  if (whiteType.includes(type) && type) {
    rules[0].type = type;
  } else if (type == "phone") {
    rules.push({
      validator: validatePhone,
      trigger: "blur",
    });
  } else if (type == "array") {
    rules.push({
      type: "array",
      required: true,
      message: "请至少选择一个",
      trigger: "change",
    });
  }
  return rules;
}

```

### 使用
```vue
<template>
  <el-form-item label="手机号" prop="phone" :rules="elRule('请输入手机号', { type: 'phone' })">
  </el-form-item>
</template>

<script setup>
import { elRule } from '@/utils/validate'
</script>
```

## 关闭tab，并且回退
> 关闭小tab，并且回退页面，使用于新增/编辑后返回页面，参数为返回的页面数

### 代码

```js
/**
 * 关闭tab并且会退页面
 * @param {Number} page
 */
export async function closeBack(page = 1) {
  function close() {
    const route = useRoute();
    return new Promise(async (resolve) => {
      await store.dispatch("tagsView/delView", route);
      history.back();
      setTimeout(() => {
        resolve();
      }, 50);
    });
  }
  const loading = Loading.service();
  for (let i = 0; i < page; i++) {
    await close();
  }
  loading.close();
}
```

### 使用

```vue
<template>
  <el-button @click="handleClose">关闭</el-button>
</template>

<script setup>
import { closeBack } from '@/utils/closeBack'

const handleClose = () => {
  closeBack(2)
}
</script>
```

## 更新tab
> 跟新小tab的文字，默认把原来的新增关键字替换成编辑，适用于我把新增和编辑放在一个页面的情况
  
### 代码
```js
export function updateTagTitle(newTitle) {
const route = useRoute()
if (!newTitle?.trim() && route?.meta?.title) {
  newTitle = route.meta.title.replace(/新增|添加|增加/g, '编辑')
}
store.dispatch('tagsView/updateVisitedViewTitle', {
  route,
  newTitle
})
}
```
### 使用
```js
import { updateTagTitle } from '@/utils/updateTagTitle'

if(/* isEdit */) {
  updateTagTitle()
}
```

## 生成随机数
> 适用于需要唯一值的情况，默认生成6位id

### 代码
```js
/**
 * @param {length} id长度
 * @returns 随机id
 */

export const randomNum = (length = 6) =>
  (Math.random() + Math.random()).toString(16).substring(2, length + 2);
```

### 使用
```js
import { randomNum } from '@/utils/randomNum'

const id = randomNum(18)
```

## copy
> 适用于复制文本

### 代码
  
```js
import useClipboard from "vue-clipboard3";
import { Message } from "element-ui";
/**
 * @param {length} id长度
 * @returns 随机id
 */

export const uuid = (length = 6) =>
  (Math.random() + Math.random()).toString(16).substring(2, length + 2);

export function useCopyText() {
  const { toClipboard } = useClipboard();

  const copyText = async (text) => {
    try {
      await toClipboard(text);
      Message.success("复制成功！");
    } catch (e) {
      Message.error("复制失败！");
    }
  };
  return {
    copyText,
  };
}
```

### 使用
```js
import { useCopyText } from "@/utils/copy";

const { copyText } = useCopyText();
copyText(/* text */);
```
## 导出Excel
> 配合useTableSelect使用，适用于导出表格数据

### 代码
```js
import { Loading, Message } from 'element-ui'
import { GlobalExportExcel } from './GlobalExportExcel'

const { exportExcelTree } = GlobalExportExcel()

export const exportExcel = async (options = {}) => {
  const {
    headerApi = null,
    bodyApi = null,
    ids = null,
    fileName = 'excel文件',
    title = 'chinaName',
    id = 'javaName',
    query = {},
    sort = false
  } = options
  if (!ids || !headerApi || !bodyApi) {
    throw Error('看好参数啊小伙子')
  }
  const loading = Loading.service()
  try {
    try {
      const [h, b] = await Promise.all([
        headerApi(),
        bodyApi({ query: { ids, ...query } })
      ])
      const header = h.data.map((item) => ({
        id: item[id],
        label: item[title],
        children: []
      }))
      let body = b.data
      if (sort) {
        // 前端对序号做处理
        body = b.data.map((item, index) => ({ ...item, sort: ++index }))
      }
      exportExcelTree(header, body, fileName)
      Message.success('导出成功,下载中')
      return { header: h, body: b }
    } catch (err) {
      console.log('--err>>', err)
      Message.error('导出失败，请稍后重试')
      return { err }
    }
  } finally {
    loading.close()
  }
}
```

### 使用
```vue
<template>
  <el-button @click="handleExport">导出</el-button>
</template>

<script setup>
import tableSelect from '@/compositions/table-select';
import { exportExcel } from '@/utils/Excel';
import { export_header,export_body } from '@/api/general';

// 导出
const { handleSelection, handleCb } = tableSelect()
const handleExport = () => {
	handleCb(async (res, ids) => {
		exportExcel({
			headerApi: export_header(/* api */),
			bodyApi: export_body(/* api */),
      ids: ids.split(','),
      fileName:/* fileName */
		})
	}, {
		msg: '是否确定导出数据为excel文件'
	})
}
</script>
```
### GlobalExportExcel

#### exportExcel.js
```js
import { saveAs } from 'file-saver'
import * as ExcelJs from 'exceljs'

/**
 * 支持多sheet 导出Excel
 * @param name Excel名称
 * @param data Excel数据集合
 * @param data.name sheet名称
 * @param data.tableHead 多行表头
 * @param data.tableData 数据，一个数组表示一个行的数据
 * @param data.merges 合并单元格
 */
export const export_json_to_excel_sheet = (data,fileName='测试文件') => {
  // 创建一个工作簿
  const workbook = new ExcelJs.Workbook()
  const worksheet = []
  data.forEach(item => {
    const sheet = workbook.addWorksheet(item.name)
    const tableList = [...item.tableHead, ...item.tableData]
    sheet.addRows(tableList)
    const result = columnWidth(tableList)
    for (const i in tableList) {
      sheet.getRow(parseInt(i) + 1).height = 36
      sheet.findRow(parseInt(i) + 1).alignment = { vertical: 'middle', horizontal: 'center' }
      if (i < item.tableHead.length) {
        sheet.findRow(parseInt(i) + 1).font = { size: 12, color: { rgb: '000000' }, bold: true }
      } else {
        sheet.findRow(parseInt(i) + 1).font = { size: 12, color: { rgb: '000000' } }
      }
    }
    for (const i in result) {
      sheet.getColumn(parseInt(i) + 1).width = result[i].width
    }
    for (const i in item.merge) {
      sheet.mergeCells(item.merge[i])
    }
    worksheet.push(sheet)
  })
  // 保存设置
  workbook.xlsx.writeBuffer().then(buffer => {
    saveAs(new Blob([buffer], { type: 'application/octet-stream' }), `${fileName}.xlsx`)
  })
}

const columnWidth = (tableData) => {
  const width = tableData.map(row => row.map(val => {
    if (val == null) { /* 先判断是否为null/undefined*/
      return { 'width': 10 }
    } else if (val.toString().charCodeAt(0) > 255) { /* 再判断是否为中文*/
      return { 'width': val.toString().length * 2 > 52 ? 52 : (val.toString().length * 2 < 16 ? 16 : val.toString().length * 2) }
    } else {
      return { 'width': val.toString().length > 28 ? 28 : (val.toString().length < 16 ? 16 : val.toString().length) }
    }
  }))
  const result = width[0]
  for (let i = 1; i < width.length; i++) {
    for (let j = 0; j < width[i].length; j++) {
      if (result[j]['width'] < width[i][j]['width']) {
        result[j]['width'] = width[i][j]['width']
      }
    }
  }
  return result
}
```
#### GlobalExportExcel.js
```js
import { ref } from 'vue'
export const GlobalExportExcel = () => {

  const isIndex = ref(0)
  const hierarchy = ref(0)
  const tableHeadKey = ref([])
  const tableHeadList = ref([])
  const tableHeadMerge = ref([])
  /**
   * @description: 一级表头Excel导出
   * @param {Array} 表头数据数组对象格式，例如：[{key: 'name', value: '姓名'}]
   * @param {Array} 表格数据数组对象格式，例如：[{name: '姓名'}]
   * @return void
   */
  const exportExcel = (tableHead, tableData = []) => {
    import('./exportExcel').then(excel => {
      excel.export_json_to_excel_sheet([
        {
          name: 'sheet1',
          tableHead: [tableHead.map(v => v.value)],
          tableData: tableData.length ? tableDataMethods(tableHead.map(v => v.key), tableData) : []
        }
      ])
    })
  }
  /**
   * @description: 多级表头Excel导出
   * @param {Array} 树形结果层级表头数据，id唯一值也作为tableData的对象key，label为显示名称，children为子级
   * @param {Array} 表格数据数组对象格式，例如：[{name: '姓名'}] 对象key对应tableHead的id字段
   * @return void
   */
  const exportExcelTree = (tableHead, tableData = [],fileName=null) => {
    isIndex.value = 0
    hierarchy.value = 0
    tableHeadKey.value = []
    tableHeadList.value = []
    tableHeadMerge.value = []
    isHierarchy(tableHead)
    tableHeadMethods(tableHead)
    import('./exportExcel').then(excel => {
      excel.export_json_to_excel_sheet([
        {
          name: 'sheet1',
          merge: [...new Set(tableHeadMerge.value)],
          tableHead: tableHeadList.value,
          tableData: tableData.length ? tableDataMethods(tableHeadKey.value, tableData) : []
        },
      ],fileName)
    })
  }
  const isHierarchy = (data, index = 1) => {
    hierarchy.value = hierarchy.value >= index ? hierarchy.value : index
    data.forEach(item => { if (item.children.length) { isHierarchy(item.children, index + 1) } })
  }

  const tableHeadMethods = (data, index = 1) => {
    var _index = index + 1
    var isNum = 0
    var headArr = []
    data.forEach(item => {
      headArr.push(item.label)
      if (item.children.length) {
        const isLength = tableHeadMethods(item.children, _index)
        isNum += isLength
        tableHeadMerge.value.push(`${mergeNum(isIndex.value - isLength)}${index}:${mergeNum(isIndex.value - 1)}${index}`)
        for (let i = 0; i < isLength - 1; i++) {
          headArr.push('')
        }
      } else {
        tableHeadKey.value.push(item.id)
        isIndex.value += 1
        isNum += 1
        if (hierarchy.value > index) {
          for (let i = _index; i <= hierarchy.value; i++) {
            tableHeadList.value[i - 1] = [...tableHeadList.value[i - 1] || [], '']
          }
        }
        const isLength = tableHeadList.value[index - 1]?.length || 0 > isNum ? tableHeadList.value[index - 1]?.length + isNum || 0 : isNum
        if (`${mergeNum(isLength - 1)}${index}` !== `${mergeNum(isLength - 1)}${hierarchy.value}`) {
          tableHeadMerge.value.push(`${mergeNum(isLength - 1)}${index}:${mergeNum(isLength - 1)}${hierarchy.value}`)
        }
      }
    })
    tableHeadList.value[index - 1] = [...tableHeadList.value[index - 1] || [], ...headArr]
    return isNum
  }
  const mergeNum = (num) => {
    const MergeArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    var number = ''
    if (num / 26 < 1) {
      number = MergeArr[num]
    } else {
      number = MergeArr[Math.floor(num / 26) - 1] + MergeArr[num - ((Math.floor(num / 26)) * 26)]
    }
    return number
  }
  const tableDataMethods = (key, data) => data.map(v => key.map(j => v[j]))

  return { exportExcel, exportExcelTree }
}
```

#### index.js
```js
import { Loading, Message } from 'element-ui'
import { GlobalExportExcel } from './GlobalExportExcel'

const { exportExcelTree } = GlobalExportExcel()

export const exportExcel = async (options = {}) => {
  const {
    headerApi = null,
    bodyApi = null,
    ids = null,
    fileName = 'excel文件',
    title = 'chinaName',
    id = 'javaName',
    query = {},
    sort = false
  } = options
  if (!ids || !headerApi || !bodyApi) {
    throw Error('看好参数啊小伙子')
  }
  const loading = Loading.service()
  try {
    try {
      const [h, b] = await Promise.all([
        headerApi(),
        bodyApi({ query: { ids, ...query } })
      ])
      const header = h.data.map((item) => ({
        id: item[id],
        label: item[title],
        children: []
      }))
      let body = b.data
      if (sort) {
        // 前端对序号做处理
        body = b.data.map((item, index) => ({ ...item, sort: ++index }))
      }
      exportExcelTree(header, body, fileName)
      Message.success('导出成功,下载中')
      return { header: h, body: b }
    } catch (err) {
      console.log('--err>>', err)
      Message.error('导出失败，请稍后重试')
      return { err }
    }
  } finally {
    loading.close()
  }
}
```
#### api
```js
// 导出-表头
export const export_header = (url) => () => _post(
  url, { query: {} }
)
// 导出-表体
export const export_body = (url) => (params) => _post(url, params)
```