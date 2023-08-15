import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/', // Cambia '/my-react-project/' a tu ruta base deseada
  plugins: [
    react({
      jsx: 'react-jsx',
    }),
  ],
})
