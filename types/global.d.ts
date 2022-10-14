/// <reference types="vite/client" />

import type { VNodeChild, PropType as VuePropType } from 'vue'

declare global {
	interface Window {
		webkit: any
		android: any
	}
}

