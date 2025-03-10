const siteName = 'veterina-smichov.cz'

// Import configurations
import passthroughs from './config/passthroughs.js'
import collections from './config/collections.js'
import watchtargets from './config/watchtargets.js'
import plugins from './config/plugins.js'
import shortcodes from './config/shortcodes.js'
import templatelanguages from './config/templateLanguages.js'
import filters from './config/filters.js'
import build from './config/build.js'
import transforms from './config/transforms.js'

// Import logger
import { logBuildProcess } from './config/logger.js'

/* Eleventy configuration
 * https://www.11ty.dev/docs/config/
 */
export default config => {
    // Tasks to run, in order, with icon and name
    // Set echo to false if you don't want to log the task to the console
    const tasks = [
        { icon: '📚', name: 'Collections', config: collections, echo: true },
        { icon: '🔌', name: 'Plugins', config: plugins, echo: true },
        { icon: '⏩', name: 'Shortcodes', config: shortcodes, echo: true },
        { icon: '🎛️ ', name: 'Filters', config: filters, echo: true },
        { icon: '🚗', name: 'Transforms', config: transforms, echo: true },
        { icon: '📂', name: 'Passthroughs', config: passthroughs, echo: false },
        { icon: '📜', name: 'Template Languages', config: templatelanguages, echo: false },
        { icon: '👀', name: 'Watch Targets', config: watchtargets, echo: false },
    ]

    // Log the build process
    logBuildProcess({ siteName, tasks, config })

    // Add build configuration
    build(config)

    // Configure dev server
    // config.setServerOptions({
    //     showAllHosts: true,
    // })

    // config.addCollection("debugConfig", (collection) => {
    //     console.log("Directory data:", collection.getAll().map(item => ({
    //         path: item.inputPath,
    //         layout: item.data.layout,
    //         engines: item.data.templateEngineOverride
    //     })))
    //     return []
    // })

    // Enable quiet mode
    // config.setQuietMode(true)

    // Return the config
    return {
        templateFormats: ['njk', 'md', '11ty.js'],
        htmlTemplateEngine: 'njk',
        dir: {
            input: 'src',
            output: '_site',
            includes: 'includes',
            layouts: 'layouts',
            data: 'data',
        },
    }
}
