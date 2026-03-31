import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico'],
      manifest: {
        name: 'PrescriMed',
        short_name: 'PrescriMed',
        description: 'Sistema de Prescrição em Frascos',
        theme_color: '#1e3a5f',
        background_color: '#ffffff',
        display: 'standalone',
        start_url: '/',
        icons: [
          {
            src: 'favicon.ico',
            sizes: '64x64',
            type: 'image/x-icon'
          }
        ]
      }
    })
  ],
})
