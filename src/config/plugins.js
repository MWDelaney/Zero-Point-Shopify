/**
 * Add Eleventy plugins here
 * https://www.11ty.dev/docs/plugins/
*/

module.exports = {
  /**
   * https://github.com/tannerdolby/eleventy-plugin-metagen
   */
  metagen: function (eleventyConfig) {
    let plugin = require('eleventy-plugin-metagen');
    eleventyConfig.addPlugin(plugin);
  },

  /**
   * https://github.com/dleatherman/eleventy-plugin-shopify
   * Create a .env file in the root with the following credentials:
   *    SHOPIFY_STORE_URL=*.myshopify.com
   *    SHOPIFY_ACCESS_TOKEN=
   *    SHOPIFY_API_VERSION=2022-01
   */
  shopify: function (eleventyConfig) {
    require("dotenv").config();
    let plugin = require('eleventy-plugin-shopify');
    let { SHOPIFY_STORE_URL, SHOPIFY_ACCESS_TOKEN, SHOPIFY_API_VERSION } = process.env;

    eleventyConfig.addPlugin(plugin, {
      url: SHOPIFY_STORE_URL,
      key: SHOPIFY_ACCESS_TOKEN,
      version: SHOPIFY_API_VERSION,
      // optional: shopQuery, productsQuery, collectionsQuery, pagesQuery, articlesQuery
    });
  }
}
