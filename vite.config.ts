/* eslint-disable quotes */

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import autoprefixer from 'autoprefixer'
import viteEslint from 'vite-plugin-eslint'
import svgLoader from 'vite-svg-loader'
import * as path from 'path'

import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

function pathResolve(dir) {
  return path.resolve(__dirname, dir)
}

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [
      vue(),
      viteEslint(),
      AutoImport({
        imports: ['vue', 'vue-router', 'vuex'],
        eslintrc: {
          enabled: true
        }
      }),
      svgLoader(),
      createSvgIconsPlugin({
        iconDirs: [path.join(__dirname, 'src/assets/icons')]
      })
    ],
    server: {
      host: '0.0.0.0'
    },
    resolve: {
      alias: {
        '@': pathResolve('src')
      }
    },
    base: env.VITE_CDN_URL || '/',
    css: {
      preprocessorOptions: {
        // 引入公用的样式
        scss: {
          charset: false,
          additionalData: `@import '@/assets/style/index.scss';`
        }
      },
      postcss: {
        plugins: [
          autoprefixer({
            // 指定目标浏览器
            overrideBrowserslist: ['Chrome > 40', 'ff > 31', 'ie 11']
          })
        ]
      }
    }
  }
})
