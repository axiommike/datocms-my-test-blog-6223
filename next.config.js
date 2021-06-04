require('dotenv').config()

module.exports = {
  future: {
    webpack5: true,
  },
  images: {
    domains: ['www.datocms-assets.com', 'mikecameron.ca'],
  },
  env: {
    NEXT_EXAMPLE_CMS_DATOCMS_API_TOKEN:
      process.env.NEXT_EXAMPLE_CMS_DATOCMS_API_TOKEN,
  },
}
