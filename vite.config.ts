import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: '/prescri-med/',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: { enabled: false },
      includeAssets: ['favicon-32x32.png', 'favicon-16x16.png', 'apple-touch-icon.png'],
      workbox: {
        maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
        skipWaiting: true,
        clientsClaim: true,
        cleanupOutdatedCaches: true,
      },
      manifest: {
        name: 'PrescriMed — Dr. Wagner Novaes',
        short_name: 'PrescriMed',
        description: 'Sistema de Prescrição em Frascos — Dr. Wagner Novaes Jr.',
        theme_color: '#1a2332',
        background_color: '#1a2332',
        display: 'standalone',
        orientation: 'any',
        start_url: '/prescri-med/',
        scope: '/prescri-med/',
        lang: 'pt-BR',
        categories: ['medical', 'health', 'productivity'],
        icons: [
          { src: 'pwa-192x192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
          { src: 'pwa-192x192.png', sizes: '192x192', type: 'image/png', purpose: 'maskable' },
          { src: 'pwa-512x512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
          { src: 'pwa-512x512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
          { src: 'apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
        ],
        shortcuts: [
          { name: 'Nova Prescrição', short_name: 'Nova', url: '/prescri-med/?action=new', icons: [{ src: 'pwa-192x192.png', sizes: '192x192' }] },
          { name: 'Histórico', short_name: 'Histórico', url: '/prescri-med/?action=history', icons: [{ src: 'pwa-192x192.png', sizes: '192x192' }] },
          { name: 'Biblioteca', short_name: 'Frascos', url: '/prescri-med/?action=library', icons: [{ src: 'pwa-192x192.png', sizes: '192x192' }] },
        ],
      }
    })
  ],
})
