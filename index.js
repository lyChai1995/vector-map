// 导入组件，组件必须声明 name
import vectorMap from './src/components/VectorMap'

// 为组件提供 install 安装方法，供按需引入
vectorMap.install = function (Vue) {
    Vue.component(vectorMap.name, vectorMap)

}

// 默认导出组件
export default vectorMap