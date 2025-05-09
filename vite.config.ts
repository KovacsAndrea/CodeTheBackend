import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // allow external access
    allowedHosts: [
      'finer-smashing-hyena.ngrok-free.app', // your ngrok URL
    ]
  },
})
