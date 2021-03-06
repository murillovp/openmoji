const fs   = require('fs');
const path   = require('path');
const _   = require('lodash');
const JSDOM = require('jsdom').JSDOM;


function createDoc(emoji) {
  const svgFile = path.join('./src', emoji.group, emoji.subgroups, emoji.hexcode + '.svg');
  const dom = new JSDOM(fs.readFileSync(svgFile), 'utf8');
  return dom.window.document;
}

function getSrcFilepath(emoji) {
  return path.join('./src', emoji.group, emoji.subgroups, emoji.hexcode + '.svg');
}

module.exports.getSrcFilepath = getSrcFilepath;
module.exports.createDoc = createDoc;
