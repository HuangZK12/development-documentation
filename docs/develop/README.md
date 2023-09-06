# vue开发常见问题  <Badge type="tip" text="vue2.7+" vertical="middle" />

## 一些规范
### 命名 
文件 - 短横线命名法

组件 - 大驼峰命名法

变量 - 小驼峰命名法

hooks - use开头

> 页面文件结构
```
|-views
  |--components // 组件
  |--hooks // hooks
  |--other-view // 其他页面（表单、详情）
    |--components // 组件
    |--index.vue // 页面
  |--index.vue // 页面
```

### 接口api

> 文件结构
```
|-api
  |--modules // 模块
    |--modules_name // 模块名称
      |--view_name.js // 页面接口
  |--general.js // 公共方法
```

> 总部常见api写法及不可取原因
- 每个模块方法为一个对象全部导出 
  - 变量命存在重复可能，且不报错、不提示
  - 无法通过快捷链接定位到具体的接口
  - 体积大，不符合模块化思想
- 拦截函数通过new再继承且导出对象
  - 同上问题
  - 会创建多个实例，无法全局管理
  - 多次调用会重复创建实例，造成内存浪费
- 全部api挂载到一个对象上，挂载原型或注入
  - 同上且更离谱！！！

> 推荐写法
 - 每个模块一个文件，每个方法使用const定义且单独导出
 - 拦截函数、响应处理只创建一次
 - 顶部增加注释
> 示例
```js
/**
 * @description: api description
 * @author: hzk
 */
import { get, post } from '@/utils/request-method'

// 列表
export const api_list = (params) => post('api/list', params)

// 添加
export const api_add = (params) => post('api/add', params)

// 编辑
export const api_edit = (params) => post('api/edit', params)

// 详情
export const api_info = (officeId) => get(`api/info/${officeId}`)

// 删除
export const api_dels = (params) => post('api/dels', params)
```

## 表格
**如何快速生成一个请求列表的模板**
> **使用vscode代码片段**
> 包含删除、导出、搜索、分页、表格选择等功能，使用setup语法糖可以分块管理

- 好处：快速生成模板，减少重复代码，提高开发效率
- 使用：在.vue文件中输入`vt`，按下tab键即可生成模板
- 建议：弃用`setup()`函数写法，使用`setup`语法糖，分块管理代码，提高可读性
- 设置方式：左下角-设置-用户代码片段-vue.json-输入以下代码

```json
"统战基础模板": {
    "prefix": "vt",
    "body": [
      "<!-- $1 -->",
      "<template>",
      "  <!-- 搜索 -->",
      "  <div class=\"container\">",
      "    <!-- 搜索 -->",
      "    <zy-filter-box @onSearch=\"search\" @onReset=\"reset\">",
      "      <el-input placeholder=\"请输入关键字\" clearable v-model=\"params.keyword\" @keyup.enter.native=\"search\">",
      "        <i slot=\"prefix\" class=\"el-input__icon el-icon-search\"></i>",
      "      </el-input>",
      "    </zy-filter-box>",
      "    <!-- 按钮 -->",
      "    <div class=\"zy-button-box\">",
      "      <el-button type=\"primary\" @click=\"\">新增</el-button>",
      "      <el-button @click=\"handleExport\">导出</el-button>",
      "      <el-button @click=\"handleDels\">删除</el-button>",
      "    </div>",
      "    <!-- 表格 -->",
      "    <zy-Table :data=\"data\" v-loading=\"loading\" use-index  @select=\"handleSelect\">",
      "      <zy-table-column prop=\"title\" label=\"标题\" width=\"\" />",
      "      <zy-table-column label=\"操作\" width=\"160\" fixed=\"right\">",
      "        <template v-slot=\"{ row }\">",
      "          <el-button type=\"primary\" size=\"small\" @click=\"\">编辑</el-button>",
      "          <el-button type=\"danger\" size=\"small\" @click=\"handleDel(row.id)\">删除</el-button>",
      "        </template>",
      "      </zy-table-column>",
      "    </zy-Table>",
      "    <!-- 分页 -->",
      "    <zy-pagination :total=\"total\" :page-no.sync=\"page.pageNo\" :page-size.sync=\"page.pageSize\" @pagination=\"handleFetch\" />",
      "  </div>",
      "</template>",
      "",
      "<script setup>",
      "import useRequest from '@/compositions/useRequest';",
      "import { useRequestLoading } from '@/compositions/useRequestLoading';",
      "import { useTableSelect } from '@/compositions/useTableSelect';",
      "import { exportExcel } from '@/utils/Excel';",
      "import { export_body, export_header } from '@/api/general';",
      "import confirm from '@/utils/message_confirm';",
      "import { reactive } from 'vue';",
      "import { mock_api } from '@/api/mock';",
      "",
      "const params = reactive({",
      "  keyword: ''",
      "})",
      "",
      "const { data, loading, total, page, search, reset, handleFetch } = useRequest(mock_api, {",
      "  params",
      "})",
      "",
      "// 表格选择",
      "const { handleSelect, selectCallback } = useTableSelect()",
      "",
      "// 删除",
      "const handleDel = async (id) => {",
      "  await confirm.warning('您确定要删除所选人员信息吗？')",
      "  await useRequestLoading(() => { }, {",
      "     params:{ids:id.split(',')},",
      "     handle: '删除'",
      "  })",
      "  reset()",
      "}",
      "// 批量删除",
      "const handleDels = () => {",
      " selectCallback(async ({ data, ids }) => {",
      "   handleDel(ids)",
      " }, { tips: false })",
      "}",
      "// 导出",
      "const handleExport = () => {",
      "  selectCallback(({data, ids}) => {",
      "    exportExcel({",
      "      headerApi: export_header(''),",
      "      bodyApi: export_body(''),",
      "      ids: ids.split(','),",
      "      fileName: ''",
      "    })",
      "  }, {",
      "    msg: '是否导出为excel文件'",
      "  })",
      "}",
      "</script>",
      "",
      "<style lang=\"scss\" scoped>",
      "  ",
      "</style>"
    ],
    "description": "统战、同心鹏程基础表格模板"
  }
```

## 表单


## 其他问题
### 组件通信
**子组件多,公用相同值,如id,如何传参**

> **使用`provide/inject`,在父组件中`provide`，在子组件中`inject`，即可实现子组件共享父组件的值**

- 好处: 父组件中的值发生变化时，子组件中的值也会发生变化,减少重复`props`传参,造成代码冗余
- 注意: 子组件最好**不要修改父组件**的值,不符合数据单向流动的原则

**编辑/新增弹窗导致`id`重复**
> 使用同一个方法,传入不同的`id`,即可实现编辑/新增,新增时`id`传空

- 好处: 避免新增时`id`重复,造成数据混乱
- 注意: 弹窗`visible`状态改变需要放在最后

### 变量
> 一些建议
- 不建议使用`reactive`定义`data`
  - 失去`composition`块结构的优势
  - 变量过多时，不利于管理
  - 无法使用`shallowRef`优化性能
  
> 定义响应式对象，如何替换对象中的值
- 使用`ref`定义对象
- 如果不需要属性是响应式（如获取详情）则使用`shallowRef`定义提高性能
- 使用`toRaw`获取原始对象，修改原始对象的值，即可实现响应式

> 浅拷贝造成的数据异常
> 
> 使用弹窗时,直接给对象复制,导致浅拷贝,修改弹窗中的值,会影响到原始对象
- 使用`Object.assign()`或者`...`解构赋值,即可解决大部分问题
- 遇到深层对象时,使用`lodash`的`cloneDeep()`方法,即可解决问题
  
> 多类型字段显示
- 使用`key-value`形式,通过`key`获取`value`,即可实现多类型字段显示
- 使用`computed`计算属性
- 减少过多的重复的判断

### css样式
> 一些建议
- 使`atomic.scss`，减少重复代码，快捷美观
- 使用`:deep`时，尽量使用`scoped`，避免样式污染
- 使用`scoped`，避免样式污染

### 优化
> 一些建议
- 导出建议使用具名导出，避免导出时重命名
- 使用按需导入，减少打包体积
- 使用`lodash-es`，按需导入
- 第三方组件使用`ComponentsPlugin`等按需引入