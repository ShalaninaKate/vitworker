import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import path from 'node:path'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';


const svgIconsPath = path.resolve(process.cwd(), 'src/shared/assets/img/svg'); 


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
     ViteImageOptimizer(),
    
    createSvgIconsPlugin({
      // Указываем папку, где лежат ваши исходные SVG-файлы
      iconDirs: [svgIconsPath],
      
      // Имя спрайта (по умолчанию symbol/svg/index.html)
      symbolId: 'icon-[dir]-[name]',
      
      // Позволяет генерировать index.html для предпросмотра спрайтов (только в dev)
      inject: 'body-last', 
      
      // Настройка для режима production:
      customDomId: '__svg__icons__dom__',
    }),

    
  ],
   base: '/vitworker/',
      resolve: {
       alias: {
      '@': path.resolve(__dirname, './src'),
      '@app': path.resolve(__dirname, './src/app'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@shared': path.resolve(__dirname, './src/shared'),
      '@widgets': path.resolve(__dirname, './src/widgets'),
    },
  },
})
