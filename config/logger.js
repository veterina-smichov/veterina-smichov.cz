import chalk from 'chalk'

/**
 * Logger for Eleventy build process
 * @param {string} siteName - The site name to display in the header
 * @param {Array} tasks - Array of task objects to process and log
 * @param {Object} config - Eleventy config object
 */
export const logBuildProcess = ({ siteName, tasks, config }) => {
    // Start console output
    console.group('\n', '   🪐', chalk.magenta(siteName))
    console.log(chalk.white('  │'))

    // Process each task
    tasks.forEach((task, index) => {
        const isLastTask = index === tasks.length - 1
        const nextTaskHidden = tasks[index + 1]?.echo === false
        const tree = isLastTask || nextTaskHidden

        if (task.echo) {
            console.group(
                chalk.white(tree ? '  └── ' : '  ├── ') +
                chalk.yellow(task.icon) +
                chalk.yellow(` ${task.name}`) +
                chalk.gray(` (/src/config/${task.name.toLowerCase().replace(/\s/g, '')}.js)`),
            )
        }

        // Execute each config function in the task
        Object.entries(task.config).forEach(([taskName, taskFn], taskIndex, taskEntries) => {
            const isLastSubtask = taskIndex === taskEntries.length - 1
            const branch = isLastTask || nextTaskHidden

            if (task.echo) {
                console.log(
                    chalk.white(branch ? '       ' : '│      ') +
                    (isLastSubtask ? '└── ' : '├── ') +
                    chalk.green(taskName),
                )
            }

            // Run the task
            taskFn(config)
        })

        if (task.echo && !tree) {
            console.log(chalk.white('│'))
        }

        if (task.echo) {
            console.groupEnd()
        }
    })

    console.log('\n')
    console.groupEnd()
}
