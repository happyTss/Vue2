import Vue from 'vue'
import { upperFirst, camelCase } from 'lodash'
const requireComponent = require.context(
  './',
  false,
  /Base[A-Z]\w+\.(vue|js)$/
)
requireComponent.keys().forEach(fileName => {
  console.log('requireComponent', requireComponent.keys())
  console.log('requireComponent', fileName.split('/').pop())
  const componentConfig = requireComponent(fileName)
  const componentName =  upperFirst(
    camelCase(
      // 获取和目录深度无关的文件名
      fileName
        .split('/')
        .pop()
        .replace(/\.\w+$/, '')
    )
  )
   // 全局注册组件
  Vue.component(
    componentName,
    // 如果这个组件选项是通过 `export default` 导出的，
    // 那么就会优先使用 `.default`，
    // 否则回退到使用模块的根。
    componentConfig.default || componentConfig
  )
});