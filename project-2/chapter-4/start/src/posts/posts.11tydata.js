const { DateTime } = require("luxon")
module.exports = {
  layout: "layouts/post.liquid",
  tags: ["post"],
  author: "bakumeraman",
  eleventyComputed: {
    dateString: ({page}) => DateTime.fromJSDate(page.date, {zone: 'utc'}).toLocaleString(DateTime.DATE_FULL)
  }
}