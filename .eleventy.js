// const { DateTime } = require("luxon");
const filters = require('./utils/filters.js');

module.exports = function (eleventyConfig){

  // Filters
  Object.keys(filters).forEach((filterName) => {
    eleventyConfig.addFilter(filterName, filters[filterName]);
  });

  eleventyConfig.addLayoutAlias('default', 'layouts/base.njk');

  // Watch assets folder for changes
  eleventyConfig.addWatchTarget('./src/_assets');

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
