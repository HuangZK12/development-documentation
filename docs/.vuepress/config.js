import { defineUserConfig } from 'vuepress'
import { defaultTheme } from 'vuepress'

export default defineUserConfig({
  lang: 'zh-CN',
  title: '乱七八糟的说明文档',
  description: '日常工作写的组件与方法说明文档',
  theme: defaultTheme({
    navbar: [
      {
        text: 'Hmoe',
        link: '/'
      },
      {
        text: 'vue组件',
        link: '/vueComponents/'
      },
      {
        text: 'compositions方法',
        link: '/compositions/'
      },
      {
        text: 'JavaScript',
        link: '/JavaScript/'
      },
      {
        text: 'CSS',
        link: '/css/'
      },
      {
        text: 'Git常见问题',
        link: '/git/'
      },
    ]
  })

})