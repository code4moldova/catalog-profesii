require('dotenv').config();

/** @type {any} */
const contentfulExport = require('contentful-export');

/** @type {any} */
const contentfulImport = require('contentful-import');

/** @type {'push' | 'pull'} */
const command = process.argv[2];

const options = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  managementToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN,
  contentFile: 'contentful-data.json',
};

if (command === 'pull') contentfulExport(options);
if (command === 'push') contentfulImport(options);
