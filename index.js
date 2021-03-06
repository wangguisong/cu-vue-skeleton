
/** vue-router 页面切换时注入骨架过渡 */
function skeletonRouter(router, mainId) {
  router.beforeEach(function (to, from, next) {
      var id = 'skeleton_' + to.path.replace(/\//g, '_')
      var mainEle = document.getElementById(mainId)
      if (mainEle) mainEle.style.display = 'none'
      var ldEle = document.getElementById(id)
      if (ldEle) ldEle.style.display = 'block'
      next()
  })
  router.afterEach(function (to, from) {
      var id = 'skeleton_' + to.path.replace(/\//g, '_')
      var mainEle = document.getElementById(mainId)
      if (mainEle) mainEle.style.display = 'block'
      var ldEle = document.getElementById(id)
      if (ldEle) ldEle.style.display = 'none'
  })
}

/** 注入骨架loading，可用于页面打开时候的数据加载loading */
var SkeletonPlugin = function () {}
SkeletonPlugin.install = function (Vue, options) {
  var mainId = 'app'
  if (options && options.mainId) {
      mainId = options.mainId
  }
  Vue.showSkeletonLoading = Vue.prototype.$showSkeletonLoading = function () {
      var path = window.location.hash.split('?')[0]
      if (path) {
          path = path.replace('#', '')
          var id = 'skeleton_' + path.replace(/\//g, '_')
          var mainEle = document.getElementById(mainId)
          if (mainEle) mainEle.style.display = 'none'
          var ldEle = document.getElementById(id)
          if (ldEle) ldEle.style.display = 'block'
      }
  }
  Vue.hideSkeletonLoading = Vue.prototype.$hideSkeletonLoading = function () {
      var path = window.location.hash.split('?')[0]
      if (path) {
          path = path.replace('#', '')
          var id = 'skeleton_' + path.replace(/\//g, '_')
          var mainEle = document.getElementById(mainId)
          if (mainEle) mainEle.style.display = 'block'
          var ldEle = document.getElementById(id)
          if (ldEle) ldEle.style.display = 'none'
      }
  }
}

module.exports = {
  skeletonRouter: skeletonRouter,
  SkeletonPlugin: SkeletonPlugin,
}
