# cu-vue-skeleton

cu骨架屏前端运行时插件

## 使用依赖
依赖cu-vue-skeleton-dev-plugin处理生成骨架屏后的项目

## 安装
`npm i cu-vue-skeleton -S`

## 使用
- 为vue-router添加特性，页面切换时显示骨架过渡
  ```js
  import { skeletonRouter } from 'cu-vue-skeleton'

  skeletonRouter(router, mainId)
  ```
  - router vue-router实例
  - mainId Vue实例挂载的页面元素id
  
- 注入loading方法
  ```js
  import { SkeletonPlugin } from 'cu-vue-skeleton'
  Vue.use(SkeletonPlugin, {
    mainId: 'app',
  })
  ```
  - mainId Vue实例挂载的页面元素id
  - 使用Vue全局方法
    ```js
    Vue.showSkeletonLoading()
    Vue.hideSkeletonLoading()
    ```
  - 使用Vue实例方法
    ```js
    this.$showSkeletonLoading()
    this.$hideSkeletonLoading()
    ```