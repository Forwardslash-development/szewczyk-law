import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

const isProd = process.env.NODE_ENV === 'production'
const base = isProd ? '/szewczyk-law/' : '/'

export default defineConfig({
  base,
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'icons/*.png'],
      manifest: {
        name: 'Conrad Szewczyk & Associates',
        short_name: 'Szewczyk Law',
        description: 'Personal injury law for the people of Illinois. No fee unless we win.',
        theme_color: '#1B2E4B',
        background_color: '#F8F5F0',
        display: 'standalone',
        orientation: 'portrait',
        scope: isProd ? '/szewczyk-law/' : '/',
        start_url: isProd ? '/szewczyk-law/' : '/',
        categories: ['legal', 'business'],
        icons: [
          {
            src: isProd ? '/szewczyk-law/icons/icon-192.png' : '/icons/icon-192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: isProd ? '/szewczyk-law/icons/icon-512.png' : '/icons/icon-512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: isProd ? '/szewczyk-law/icons/icon-512-maskable.png' : '/icons/icon-512-maskable.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
        shortcuts: [
          {
            name: 'Free Consultation',
            short_name: 'Consultation',
            url: isProd ? '/szewczyk-law/consultation' : '/consultation',
            description: 'Schedule a free consultation',
          },
          {
            name: 'Start Your Case',
            short_name: 'Intake',
            url: isProd ? '/szewczyk-law/intake' : '/intake',
            description: 'Begin your case intake form',
          },
          {
            name: 'Contact Us',
            short_name: 'Contact',
            url: isProd ? '/szewczyk-law/contact' : '/contact',
            description: 'Get in touch with our office',
          },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2}'],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-cache',
              expiration: { maxEntries: 10, maxAgeSeconds: 60 * 60 * 24 * 365 },
              cacheableResponse: { statuses: [0, 200] },
            },
          },
          {
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'gstatic-fonts-cache',
              expiration: { maxEntries: 10, maxAgeSeconds: 60 * 60 * 24 * 365 },
              cacheableResponse: { statuses: [0, 200] },
            },
          },
          {
            urlPattern: /\/locales\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'i18n-cache',
              expiration: { maxEntries: 20, maxAgeSeconds: 60 * 60 * 24 * 7 },
            },
          },
        ],
      },
      devOptions: { enabled: true },
    }),
  ],
})
