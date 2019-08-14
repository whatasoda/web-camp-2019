import { JSDOM } from 'jsdom';
import fs from 'fs';
import { promisify } from 'util';
import path from 'path';

const writeFile = promisify(fs.writeFile);

const ogp = async (data: [string, string, string]) => {
  const sourcePage = await JSDOM.fromURL(data[0]);
  const items = Array.from(sourcePage.window.document.querySelectorAll(data[1]));
  
  const promises = items.map(async (anchor) => {
    try {
      const jsdom = await JSDOM.fromURL((anchor as HTMLAnchorElement).href);
      const ogTags = jsdom.window.document.querySelectorAll('meta[property^="og:"]');
      const graph: Record<string, string> = {};
      ogTags.forEach((tag) => {
        const property = tag.getAttribute('property');
        const content = tag.getAttribute('content');
        if (!property || !content) return;
        const key = property.slice(3);
        if (!key) return;
        graph[key] = content;
      });
      return graph;
    } catch (e) {
      return null;
    }
  });
  
  const result = await Promise.all(promises);
  const outPath = path.resolve(__dirname, `../gulp-sample/data-${data[2]}.json`);
  writeFile(outPath, JSON.stringify(result.filter(Boolean), null, '  '));
};

ogp([
  'https://bang-dream.com/discographies',
  'ul.itemList>li>a',
  'page1'
]);

ogp([
  'https://bang-dream.com/discographies?page=2',
  'ul.itemList>li>a',
  'page2'
]);
