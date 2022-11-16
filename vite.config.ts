import { fileURLToPath, URL } from 'url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: { transformAssetUrls },
    }),
    quasar({
      autoImportComponentCase: 'pascal',
    }),
  ],
  /**
   * @see
   * This lets you use the import shorthand (@*)
   */
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  /**
   * @see
   * This should be your GitHub repo name. You can find it on the GitHub URL.
   * @example
   * https://github.com/my-username/my-app-repo
   * /my-app-repo/
   */
  base: '/fitness-tracker-v16/',
})
