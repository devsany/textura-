import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
 
  plugins: [react()],
  // Ensure that base is set to the right path if you're using subfolders
  base: "/",
})
