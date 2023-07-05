# compositions-api 方法 v1.1.0

## useRequest
> 适用用于表格渲染与操作，返回参数为响应式对象

### 代码
```js
import { cloneDeep, isObject } from "lodash-es";
import { isProxy, isReactive, isRef, reactive, ref } from "vue";
/**
 * 封装请求参数
 */

export default (api, options = {}) => {
  if (typeof api !== "function")
    throw new Error("首个参数需要使用基于axios封装的请求函数");
  // options 参数
  const {
    params = {},
    pageNo = 1, // 参数:pageNo,默认1
    pageSize = 10, // 参数:pageSize,默认10
    usePage = true, // 参数:usePage,是否参数带页码
    header = {}, // 请求头额外参数,默认{}
    success = null, // 请求成功的回调,回调参数:请求成功的数据
    error = null, // 请求失败的回调,回调参数:请求失败的数据
    finish = null, // 请求结束的回调,回调参数:请求结束的数据
    implement = true, // 是否立即执行,默认true
    filter = true, // 是否过滤参数
  } = options;
  // 分页数据
  const page = reactive({
    pageNo: pageNo,
    pageSize: pageSize,
  });
  // total总数
  const total = ref(0);
  // 是否在加载
  const loading = ref(false);
  // 请求到的数据
  const data = ref([]);
  // 备份初始参数
  const _PARAMS_ = cloneDeep(params);
  // api请求处理
  const request = () => {
  console.log('--_PARAMS_>>',_PARAMS_);
    return new Promise((resolve, reject) => {
      // 使用分页时候的处理
      const apiParams = usePage ? { ...params, ...page } : params;
      loading.value = true;
      api(filterVal(apiParams,filter), header)
        .then((res) => {
          data.value = res.data;
          total.value = res.total;
          success && success(res);
          resolve(res);
        })
        .catch((err) => {
          error && error(err);
          reject(err);
        })
        .finally((f) => {
          finish && finish(f);
          loading.value = false;
        });
    });
  };
  if (implement) {
    request();
  }

  // 页码重置搜索
  const search = () => {
    page.pageNo = 1;
    request();
  };

  // 重置搜索
  const reset = () => {
    resetVal(params, _PARAMS_);
    search();
  };
  return {
    data,
    page,
    total,
    loading,
    request,
    search,
    reset,
  };
};


// 清除参数
const resetVal = (selfProps, backups) => {
  if (Object.prototype.toString.call(selfProps) === "[object Object]") {
    for (const key in selfProps) {
      if (Object.hasOwnProperty.call(selfProps, key)) {
        if (Object.prototype.toString.call(selfProps[key]) === "[object Object]") {
          resetVal(selfProps[key], backups[key]);
        } else {
          selfProps[key] = backups[key];
        }
      }
    }
  } else if (isRef(selfProps)) {
    selfProps.value = backups;
  } else {
    selfProps = backups;
  }
};

// 过滤参数
const filterVal = (value, filter = true) => {
  if (filter) {
    if (!isObject(value) || value === null) {
      if (value === '' || typeof value === 'undefined') {
        return null;
      }
      return value;
    }

    if (Array.isArray(value)) {
      return value.map(item => filterVal(item)).filter(item => !!item);
    }

    const result = {};
    for (let key in value) {
      const convertedValue = filterVal(value[key]);
      result[key] = convertedValue;
    }

    return result;
  } else {
    return value;
  }
}
```

### 使用
```vue
<template>
<zy-filter-box @onSearch="search" @onReset="reset">
  <el-input placeholder="请输入关键字" clearable v-model="params.keyword" @keyup.enter.native="search">
    <i slot="prefix" class="el-input__icon el-icon-search"></i>
  </el-input>
</zy-filter-box>
<!-- 表格 -->
<zy-Table :data="data" v-loading="loading" use-index>
  <zy-table-column prop="prop" label="label" width="100px" />
<zy-table>
<!-- 分页 -->
<zy-pagination :total="total" :page-no.sync="page.pageNo" :page-size.sync="page.pageSize" @pagination="handleFetch" />
</template>

<script setup>
import useRequest from '@/compositions/useRequest';
import { reactive } from 'vue';

const params = reactive({
  keyword: null,
})
const { data, loading, total, page, search, reset, request } = useRequest(account_list, {
  params
  // ...options
})
</script>
```

### options配置

| 参数      | 默认值 | 说明                                        |
| --------- | ------ | ------------------------------------------- |
| params    | {}     | 请求参数                                    |
| pageNo    | 1      | params.pageNo,默认1                         |
| pageSize  | 10     | params.pageSize,默认10                      |
| usePage   | true   | 参数是否带页码                              |
| header    | {}     | 请求头额外参数,默认{}                       |
| success   | null   | 请求成功的回调,回调参数:请求成功的数据      |
| error     | null   | 请求失败的回调,回调参数:请求失败的数据      |
| finish    | null   | 请求结束的回调,回调参数:请求结束的数据      |
| implement | true   | 是否立即执行,则调用useRequest则请求         |
| filter    | true   | 是否过滤参数,把所有为空字符串的参数变为null |

### 接收参数
| 参数    | 默认值               | 说明                     |
| ------- | -------------------- | ------------------------ |
| data    | []                   | 请求成功后返回的data数据 |
| page    | pageSize:10,pageNo:1 | 当前页码信息             |
| total   | 0                    | 数据总数                 |
| loading | true                 | 是否还在请求             |
| request | --                   | 保留当前参数刷新         |
| search  | --                   | 页码重置刷新             |
| reset   | --                   | 重置参数刷新             |



## useRequestLoading
> 适用于需要加载动画的请求（获取详情，新增/编辑），返回Promise

### 代码
```js
import { Loading, Message } from "element-ui";

/**
 * @description: 封装请求方法，添加loading效果
 * @param {Function} api 请求方法
 * @param {Object} option 配置项
 * @param {Object} option.params 请求参数
 * @param {String} option.handle 操作名称
 * @param {Function} option.success 成功回调
 * @param {Function} option.finish 完成回调
 * @param {Function} option.error 失败回调
 * @param {Boolean} option.tip 是否显示提示信息
 * @return {Promise} Promise对象
 */
export default (api, option = {}) => {
  return new Promise((resolve, reject) => {
    const loading = Loading.service();
    const {
      params = {},
      handle = "操作",
      success = null,
      finish = null,
      error = null,
      tip = true,
    } = option;
    api(params)
      .then((res) => {
        success && success(res);
        resolve(res);
        tip && Message.success(`${handle}成功！`);
      })
      .finally(() => {
        loading.close();
        finish && finish();
      })
      .catch((err) => {
        error && error(err);
        reject(err);
        tip && Message.error(`${handle}失败！`);
      });
  });
};

```

### 使用
```vue
<template>
  <el-button @click="handleSubmit">请求</el-button>
</template>

<script setup>
import useRequestLoading  from '@/compositions/useRequestLoading';
import { reactive } from 'vue';

const handleSubmit = async () => {
  await useRequest(/* api */,{
    params:{id:1},
    handle: '操作',
  })
  // 配合useRequest可在请求后刷新数据
  request()
}
</script>
```

### options配置

| 参数    | 默认值 | 说明                                   |
| ------- | ------ | -------------------------------------- |
| params  | {}     | 请求参数                               |
| handle  | 操作   | 操作名称                               |
| success | null   | 请求成功的回调,回调参数:请求成功的数据 |
| error   | null   | 请求失败的回调,回调参数:请求失败的数据 |
| finish  | null   | 请求结束的回调,回调参数:请求结束的数据 |
| tip     | true   | 是否显示提示信息                       |

## useTableSelect
> 适用于饿了么表格选择与操作，返回参数为响应式对象

### 代码
```js
import { Message, MessageBox } from 'element-ui'
import { ref } from 'vue'

/**
 * desc:饿了么表格选项mixin
 * @selection-change="handleSelection"
 */

export default () => {
  let tableSelectionData = ref([])

  const handleSelection = (col) => {
    tableSelectionData.value = col
  }

  const handleCb = (cb, msgOp = {}) => {
    const {
      min = 1,
      max = null,
      condition = [],
      conditionTips = [],
      fail = null
    } = msgOp
    if (tableSelectionData.value.length < +min)
      return Message.warning(`请至少选择${min}项！`)
    if (max && tableSelectionData.value.length > +max)
      return Message.warning(`最多只能选择${min}项！`)
    if (!!condition.length) {
      try {
        for (let c = 0; c < condition.length; c++) {
          const ev = '(item,index,arr)=>' + condition[c]
          const hasCondition = tableSelectionData.value.filter(
            (item, index, arr) => eval(`${ev}`)(item, index, arr)
          )
          if (!!hasCondition.length) {
            fail && fail(hasCondition)
            return Message.error(
              conditionTips[c] || '选择内容中有不符合条件的选项!'
            )
          }
        }
      } catch (err) {
        console.warn(err)
      }
    }
    const {
      title = '提示',
      msg = '该操作不可逆，是否继续操作',
      type = 'warning',
      tips = true
    } = msgOp
    if (tips) {
      MessageBox.confirm(msg, title, {
        type
      })
        .then(() => {
          const ids = tableSelectionData.value.map((item) => item.id).join(',')
          cb && cb(tableSelectionData, ids)
        })
        .catch(() => {
          Message.info('已取消操作!')
        })
    } else {
      const ids = tableSelectionData.value.map((item) => item.id).join(',')
      cb && cb(tableSelectionData, ids)
    }
  }

  return {
    tableSelectionData,
    handleSelection,
    handleCb
  }
}
```

### 使用
```vue
<template>
  <el-button @click="handleResets">重置密码</el-button>
  <zy-Table :data="data" v-loading="loading" use-index @select="handleSelection">
  </zy-Table>
</template>

<script setup>
import useTableSelect from '@/compositions/useTableSelect';

const { handleSelection, handleCb } = useTableSelect()

const handleResets = () => {
   handleCb((data, ids) => {
    // ...methods
  }, {
    // ...options
  })
}

</script>
```

### options配置

| 参数          | 默认值                       | 说明               |
| ------------- | ---------------------------- | ------------------ |
| msg           | "该操作不可逆，是否继续操作" | 提示文字           |
| title         | "提示"                       | 提示头部文字       |
| type          | "warning"                    | 饿了么提示类型     |
| tips          | true                         | 是否提示(确认提示) |
| min           | 1                            | 最少选择数量       |
| max           | null                         | 最多选择数量       |
| condition     | []                           | 条件函数数组       |
| conditionTips | []                           | 条件提示数组       |
| fail          | null                         | 条件失败回调       |

### 接收参数
| 参数               | 默认值 | 说明                                                           |
| ------------------ | ------ | -------------------------------------------------------------- |
| tableSelectionData | []     | 已选数组,用于饿了么表格选择函数,响应式数组                     |
| handleSelection    | Func   | 饿了么表格选择方法对应的函数                                   |
| handleCb           | Func   | 传入一个回调函数，验证通过后触发，参数为已选数据，和映射后的id |


