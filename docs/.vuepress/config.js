import { defineUserConfig } from 'vuepress'
import { defaultTheme } from 'vuepress'
import { shikiPlugin } from '@vuepress/plugin-shiki'

export default defineUserConfig({
  lang: 'zh-CN',
  title: '前端开发文档',
  description: '日常工作写的组件与方法说明文档',
  base: '/development-documentation/',
  theme: defaultTheme({
    navbar: [
      {
        text: 'Home',
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
      {
        text: '项目相关',
        link: '/product/'
      },
      {
        text: '开发相关',
        link: '/develop/'
      },
      {
        text: '个人简历',
        link: '/resume/'
      }
    ]
  }),
  plugins: [
    shikiPlugin({
      theme: "one-dark-pro",
    }),
  ],
})