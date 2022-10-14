/* eslint-disable */


declare module '*.vue' {
	import { DefineComponent } from 'vue'
  import  '../types/global'
	const component: DefineComponent<{}, {}, any>
	export default component
}
