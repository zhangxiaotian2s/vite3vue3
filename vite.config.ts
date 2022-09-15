import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import autoprefixer from 'autoprefixer'
import viteEslint from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), viteEslint()],
  server: {
    host: '0.0.0.0'
  },
  css: {
    postcss: {
      plugins: [
        autoprefixer({
          // 指定目标浏览器
          overrideBrowserslist: ['Chrome > 40', 'ff > 31', 'ie 11']
        })
      ]
    }
  }
})
