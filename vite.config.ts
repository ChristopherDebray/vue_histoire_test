/// <reference types="histoire" />

import { defineConfig } from 'vite'
import { HstVue } from '@histoire/plugin-vue'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  histoire: {
    plugins: [
      HstVue(),
    ],
  },
})
