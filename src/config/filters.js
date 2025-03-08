/**
 * Add Eleventy filters here
 * https://www.11ty.dev/docs/filters/
 */

import markdownIt from 'markdown-it';
import { DateTime } from 'luxon'

export default {
    // Date filter
    dateToFormat: function(eleventyConfig) {
        eleventyConfig.addFilter('dateToFormat', function(date, format) {
            return DateTime.fromJSDate(date, { zone: 'utc' }).toFormat(String(format))
        })
    },
    // Markdown filter
    markdown: async function (eleventyConfig) {
        let options = {
            html: true, breaks: true, linkify: true
        };
        let markdownLib = markdownIt(options);
        eleventyConfig.addFilter('markdown', function (value) {
            return markdownLib.render(value);
        });
    }
}
