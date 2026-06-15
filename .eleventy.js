module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "public": "." });
  eleventyConfig.addPassthroughCopy({ "src/css": "css" });

  eleventyConfig.addFilter("keys", obj => Object.keys(obj));

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    markdownTemplateEngine: "njk",
  };
};
