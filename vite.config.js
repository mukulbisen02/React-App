import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
//import { RiFacebookFill } from 'react-icons/ri'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  }
})
