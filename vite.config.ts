import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './', // این خط را اضافه کنید
  plugins: [react()],
})