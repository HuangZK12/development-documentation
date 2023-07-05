# JavaScript

## 饿了么表单验证

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

## 关闭tab，并且回退

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

# 更新tab
  
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

## 生成随机数

```js
/**
 * @param {length} id长度
 * @returns 随机id
 */

export const uuid = (length = 6) =>
  (Math.random() + Math.random()).toString(16).substring(2, length + 2);
```

## copy
  
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
