export default function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/img");
    eleventyConfig.addPassthroughCopy("**/*.md");
    eleventyConfig.addPassthroughCopy("**/*.js");
    eleventyConfig.addPassthroughCopy("**/*.css");
    eleventyConfig.addPassthroughCopy("favicon.ico");

    return {
        //markdownTemplateEngine: 'njk',
        //dataTemplateEngine: 'njk',
        //htmlTemplateEngine: 'njk',
        dir: {
            input: "src",
            output: "dist"
        }
    }
};