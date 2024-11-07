import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), dts({
        tsconfigPath: './tsconfig.app.json',
        rollupTypes: true,
    })],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/index.ts'),
            name: 'RaelUI',
            // formats: ['es', 'umd'],
            fileName: `rael-ui.js`
            // fileName: (format) => `rael-ui.${format}.js`
        },
        rollupOptions: {
            external: ['react', 'react-dom'],
            output: {
                globals: {
                    'react': 'React',
                    'react-dom': 'ReactDOM',
                }
            }
        }
    }
})
