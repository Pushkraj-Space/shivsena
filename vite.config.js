import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        port: 3000,
        open: true,
        allowedHosts: [
            '83616c340222.ngrok-free.app',
            '.ngrok-free.app',
            '.ngrok.io'
        ]
    }
}) 
