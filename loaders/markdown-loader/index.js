// @flow
/* eslint no-console: [0] */
var frontMatter = require('front-matter');
var markdownIt = require('markdown-it');
var hljs = require('highlight.js');
var objectAssign = require('object-assign');

var highlight = function(str: string, lang: string): string {
  if (lang !== null && hljs.getLanguage(lang)) {
    try {
      return hljs.highlight(lang, str).value;
    } catch (err) {
      console.error(err);
    }
  }
  try {
    return hljs.highlightAuto(str).value;
  } catch (err) {
    console.error(err);
  }
  return '';
};

var md = markdownIt({
  html: true,
  linkify: true,
  typographer: true,
  highlight
})
  .use(require('markdown-it-sub'))
  .use(require('markdown-it-footnote'))
  .use(require('markdown-it-deflist'))
  .use(require('markdown-it-abbr'))
  .use(require('markdown-it-attrs'));

module.exports = function(content: string): string {
  this.cacheable();
  const meta = frontMatter(content);
  const body = md.render(meta.body);
  const result = objectAssign({}, meta.attributes, {
    body
  });
  this.value = result;
  return `module.exports = ${JSON.stringify(result)}`;
};
