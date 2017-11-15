/**
 * Created by SHENJO on 11/15/2017.
 */
const fs = require('fs'),
  util = require('./utils'),
  _ = require('lodash'),
  markDownIt = require('markdown-it'),
  path = require('path');


const JSON_FILE_SUFFIX = '.json',
  MD_FILE_SUFFIX = '.md',
  DEST_ROOT = __dirname + '/../dist/Articles',
  ARTICLES_ROOT = __dirname + '/../src/Articles';


const md = markDownIt({
  html: true
});

if (!_.every([DEST_ROOT, ARTICLES_ROOT], util.exist)) {
  throw new Error(`${DEST_ROOT} or ${ARTICLES_ROOT} doesn't exist`);
}

const files = fs.readdirSync(ARTICLES_ROOT).filter((fileName) => {
  return _.endsWith(fileName, MD_FILE_SUFFIX);
});
_.each(files, (fileName) => {
  const filePath = ARTICLES_ROOT + '/' + fileName;
  const createTime = fs.statSync(filePath).ctime;
  const content = fs.readFileSync(filePath, { encoding: 'utf-8' });
  const html = md.render(content);
  fs.writeFileSync(DEST_ROOT + '/post' + JSON_FILE_SUFFIX, JSON.stringify({
    id: fileName.substr(0,fileName.length - MD_FILE_SUFFIX.length),
    createTime,
    html
  }));
});




