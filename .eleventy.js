// const { DateTime } = require("luxon");
const filters = require('./utils/filters.js');
const shortcodes = require('./utils/shortcodes.js');

module.exports = function (eleventyConfig){

  // Filters
  Object.keys(filters).forEach((filterName) => {
    eleventyConfig.addFilter(filterName, filters[filterName]);
  });

  // shortcodes
  Object.keys(shortcodes).forEach((shortcode) => {
    eleventyConfig.addShortcode(shortcode, shortcodes[shortcode]);
  });

  // Alias the base layout so it can be referred to as `layout: default`
  eleventyConfig.addLayoutAlias('default', 'layouts/base.njk');

  // Watch assets folder for changes
  eleventyConfig.addWatchTarget('./src/_assets');

  // Copy these assets straight across
  eleventyConfig.addPassthroughCopy({'./src/_assets/favicon': 'assets/favicon'});

  eleventyConfig.setDataDeepMerge(true);

  return {
    templateFormats: ["html", "njk", "md", "11ty.js"],
    pathPrefix: "/",
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    passthroughFileCopy: true,
    dir: {
      input: "src",
      output: "dist",
      data: "_data",
      includes: "_includes"
    },
  };
}
