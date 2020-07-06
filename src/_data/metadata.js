const { meta, trelloLists } = require("../../config.js");

module.exports = () => {
  return {
    "title": meta.name,
    "url": "",
    "feed": {
      "url": ""
    },
    "author": {
      "name": "James Doc"
    },
    "metaImg": "",
    "description": meta.description,
    "lists": trelloLists,
    "env": process.env.ELEVENTY_ENV,
    "timestamp": new Date()
  };
}
