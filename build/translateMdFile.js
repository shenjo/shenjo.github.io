/**
 * Created by SHENJO on 11/15/2017.
 */
const fs = require('fs'),
  util = require('./utils'),
  _ = require('lodash'),
  markDownIt = require('markdown-it'),
  hljs = require('highlight.js'),
  path = require('path');


const JSON_FILE_SUFFIX = '.json',
  MD_FILE_SUFFIX = '.md',
  DEST_ROOT = __dirname + '/../dist/Articles',
  ARTICLES_ROOT = __dirname + '/../src/Articles';

let allArticles = [];
const md = markDownIt({
  html: true,
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value;
      } catch (__) {}
    }

    return ''; // use external default escaping
  }
});

if (!_.every([DEST_ROOT, ARTICLES_ROOT], util.exist)) {
  throw new Error(`${DEST_ROOT} or ${ARTICLES_ROOT} doesn't exist`);
}

const files = fs.readdirSync(ARTICLES_ROOT).filter((fileName) => {
    return _.endsWith(fileName, MD_FILE_SUFFIX);
});
_.each(files, (fileName) => {
    const filePath = ARTICLES_ROOT + '/' + fileName;
    const content = fs.readFileSync(filePath, {encoding: 'utf-8'});
    const createTime = new Date(eval(content.substring(content.indexOf('(') + 1, content.indexOf(')'))));
    const html = md.render(content);
    const id = fileName.substr(0, fileName.length - MD_FILE_SUFFIX.length)
    fs.writeFileSync(DEST_ROOT + '/' + id + JSON_FILE_SUFFIX, JSON.stringify({id, createTime, html}));
    allArticles.push({id, createTime});
});

allArticles.sort((art1, art2) => {
    return art1.createTime.getTime() > art2.createTime.getTime();
});

fs.writeFileSync(DEST_ROOT + '/allPost' + JSON_FILE_SUFFIX, JSON.stringify(allArticles));



