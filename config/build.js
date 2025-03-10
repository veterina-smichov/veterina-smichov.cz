import EleventyVitePlugin from '@11ty/eleventy-plugin-vite'

export default function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy({ 'src/assets-static': 'assets' })

    eleventyConfig.addPlugin(EleventyVitePlugin, {
        tempFolderName: '.11ty-vite',
        viteOptions: {
            publicDir: false,
            clearScreen: false,
            server: {
                mode: 'development',
                middlewareMode: true,
            },
            appType: 'custom',
            assetsInclude: ['**/*.xml', '**/*.txt'],
            build: {
                outDir: '_site',
                mode: 'production',
                sourcemap: process.env.ELEVENTY_ENV !== 'production',
                minify: process.env.ELEVENTY_ENV === 'production',
                manifest: true,
                rollupOptions: {
                    input: {
                        styles: 'src/assets/styles/styles.scss',
                        main: 'src/assets/scripts/main.js',
                    },
                    output: {
                        dir: '_site/assets',
                        assetFileNames: 'css/[name].[hash][extname]',
                        chunkFileNames: 'js/[name].[hash].js',
                        entryFileNames: 'js/[name].[hash].js',
                    },
                },
            },
        },
    })
}
