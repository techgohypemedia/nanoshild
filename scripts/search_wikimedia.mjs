import https from 'https';
import fs from 'fs';
import path from 'path';

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'NanoShieldDev/1.0' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
}

async function searchWikimedia() {
  const queries = ['marble slabs', 'marble warehouse', 'marble quarry slabs', 'carrara marble warehouse', 'marble slab rack'];
  for (const q of queries) {
    const url = `https://commons.wikimedia.org/w/api.php?action=query&format=json&generator=search&gsrnamespace=6&gsrsearch=${encodeURIComponent(q)}&gsrlimit=10&prop=imageinfo&iiprop=url|size|mime`;
    try {
      const res = await fetchJson(url);
      console.log(`Results for "${q}":`);
      if (res.query && res.query.pages) {
        for (const pageId in res.query.pages) {
          const page = res.query.pages[pageId];
          if (page.imageinfo && page.imageinfo[0]) {
            console.log(`- ${page.title}: ${page.imageinfo[0].url}`);
          }
        }
      }
    } catch (e) {
      console.error(e);
    }
  }
}

searchWikimedia();
