# compositions-api 方法


## useRequest

适用于表格渲染与操作

```js
import { fetchData } from '@/compositions/useRequest'
const { data,loading, total, page, search, reset, request } = useRequest(notice_list, {
  params
})

```

## 数据
- data 响应式数组，用于渲染表格
- loading
- total 总数
- page 对象，包含pageNo和pageSize
## 函数
- search 重置页码第一页，带params搜索，直接用于search-button组件search方法
- reset 清除所有的params进行搜索。如果有不需要清清除的不适用
- handleFetch 请求方法
## 参数
- fetch 请求方法
- params = {},  参数集合,不需要页码
- pageNo = 1,  参数:pageNo,默认1
- pageSize = 10,  参数:pageSize,默认10
- usePage = true,  参数:usePage,是否参数带页码
- header = {},  请求头额外参数,默认{}
- success = null,  请求成功的回调,回调参数:请求成功的数据
- error = null,  请求失败的回调,回调参数:请求失败的数据
- finish = null,  请求结束的回调,回调参数:请求结束的数据


## useTableSelect

适用于饿了么表格选择与操作

```js
import tableSelect from '@/compositions/table-select';
const { handleSelection, selectionCallback } = tableSelect()

<el-table @selection-change="handleSelection"></el-table>

<el-button @click="del">删除</el-button>

const del = () => {
	selectionCb(res => {
		console.log(del, '++ del ++');
	},{
		options
	})
}
```

## options
| 属性  | 默认值                       | 类型             | 备注               |
| ----- | ---------------------------- | ---------------- | ------------------ |
| msg   | "该操作不可逆，是否继续操作" | String           | 提示文字           |
| title | "提示"                       | String           | 提示头部文字       |
| type  | "warning"                    | String           | 饿了么提示类型     |
| tips  | true                         | Boolean          | 是否提示(确认提示) |
| min   | 1                            | Number \| String | 最少选择项目       |
| max   | null                         | Number \| String | 最多选择项目       |

## methods
| 属性            | 参数  | 备注                                        |
| --------------- | ----- | ------------------------------------------- |
| handleSelection | Array | 已选数组,用于饿了么表单选择函数             |
| handleCb        | Array | 已选数组,用于操作删除或者需要选择提示的操作 |


## useRequestLoading 

loading 辅助函数，Promise 适用于请求需要加载操作

```javascript
import { useRequestLoading } from '@/utils/request'

// 示例
const fetchData = (params) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ data: params })
    }, 1000)
  })
}

useRequestLoading(
  fetchData,
  { name: 'hzk' },
  {
    handle: '获取数据',
    success: (res) => {
      console.log(res)
    },
    error: (err) => {
      console.log(err)
    },
    finish: () => {
      console.log('finish')
    },
    tip: true
  }
)
```

## 参数说明

| 参数           | 说明             | 类型     | 默认值 |
| -------------- | ---------------- | -------- | ------ |
| api            | 请求方法         | Function | -      |
| params         | 请求参数         | Object   | -      |
| option         | 配置项           | Object   | -      |
| option.handle  | 操作名称         | String   | 操作   |
| option.success | 成功回调         | Function | null   |
| option.finish  | 完成回调         | Function | null   |
| option.error   | 失败回调         | Function | null   |
| option.tip     | 是否显示提示信息 | Boolean  | true   |
