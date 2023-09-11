import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default ({ command }) => {
  const isProduction = command === 'build'

  return defineConfig({
    plugins: [vue()],
    base: process.env.NODE_ENV === 'production' ? '/vue/vue-learn-first-project/' : '/',
  })
}