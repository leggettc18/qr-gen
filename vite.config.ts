import { ConfigEnv, defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig(({ command }: ConfigEnv) => {
    return {
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'resources/js/')
            }
        },
        base: command === 'build' ? '/dist/' : '',
        publicDir: false,
        build: {
            manifest: true,
            outDir: "public/dist",
            rollupOptions: {
                input: {
                    app: "resources/js/app.ts"
                },
            },
        },
        server: {
            strictPort: true,
            port: 3030,
            // https: true,
            hmr: {
                host: "localhost",
            },
        },
        plugins: [
            vue()
        ],
        optimizeDeps: {
            include: [
                "@inertiajs/inertia",
                "@inertiajs/inertia-vue3",
                "axios",
                "vue"
            ],
        },
    }
})