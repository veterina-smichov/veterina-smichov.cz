/**
 * Add Eleventy passthrough file copies here
 * https://www.11ty.dev/docs/copy/
 */

export default {
  /**
   * Copy images to the `_site` directory
   */
  images: eleventyConfig => {
    const config = { 'src/assets/images': 'assets/images' }
    eleventyConfig.addPassthroughCopy(config)
  },

  /**
   * Copy fonts to the `_site` directory
   */
  fonts: eleventyConfig => {
    const config = { 'src/assets/fonts': 'assets/fonts' }
    eleventyConfig.addPassthroughCopy(config)
  }
}
