import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      'process.env.VITE_OMISE_PUBLIC_KEY': JSON.stringify(env.VITE_OMISE_PUBLIC_KEY)
    },
    plugins: [react()],
  }
})