import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts({
    rollupTypes : true,
  })],
  resolve: {
    alias: {
      '@' : path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@ui': path.resolve(__dirname, './src/components/ui'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@assets': path.resolve(__dirname, './src/assets'),
    },
  },
  build : {
    lib : {
      entry : path.resolve(__dirname, './src/components/index.ts'),
      name : 'RaelUI',
      fileName : 'rael-ui',
    },
    rollupOptions : {
      external : ['react', 'react-dom'],
      output : {
        globals : {
          'react': 'React',
          'react-dom': 'ReactDOM',
        }
      }
    }
  }
})
