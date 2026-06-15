module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "public": "." });
  eleventyConfig.addPassthroughCopy({ "src/css": "css" });

  eleventyConfig.addFilter("keys", obj => Object.keys(obj));

  eleventyConfig.addCollection("gallery", (api) =>
    api.getFilteredByGlob("src/gallery/*.md")
      .sort((a, b) => (a.data.order || 99) - (b.data.order || 99))
  );

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
