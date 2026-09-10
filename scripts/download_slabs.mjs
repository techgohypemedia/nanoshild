import https from 'https';
import fs from 'fs';
import path from 'path';

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return resolve(fetchUrl(res.headers.location));
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Failed: ${res.statusCode}`));
      }
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return resolve(downloadFile(res.headers.location, dest));
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Failed: ${res.statusCode}`));
      }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', reject);
  });
}

async function run() {
  const stockDir = path.resolve('public/showroom-stock');
  if (!fs.existsSync(stockDir)) fs.mkdirSync(stockDir, { recursive: true });

  // Curated list of high-quality marble warehouse slab stock / slab storage / quarry slab images
  // Unsplash curated IDs for marble texture slabs, stone warehouse slabs, marble block slabs
  const slabs = [
    {
      id: 'statuario',
      name: 'statuario-stock.jpg',
      url: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1600&q=80' // Giant Italian white & slate marble slab
    },
    {
      id: 'onyx',
      name: 'onyx-stock.jpg',
      url: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80' // Luxury stone slab showroom display
    },
    {
      id: 'travertine',
      name: 'travertine-stock.jpg',
      url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1600&q=80' // Roman Travertine slabs
    },
    {
      id: 'calacatta',
      name: 'calacatta-stock.jpg',
      url: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=80' // Calacatta Gold bookmatched slabs
    },
    {
      id: 'marquina',
      name: 'black-marquina-stock.jpg',
      url: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80' // Black & gold exotic stone slab
    }
  ];

  for (const item of slabs) {
    const dest = path.join(stockDir, item.name);
    console.log(`Downloading ${item.name}...`);
    try {
      await downloadFile(item.url, dest);
      console.log(`Saved ${item.name} (${fs.statSync(dest).size} bytes)`);
    } catch (e) {
      console.error(e);
    }
  }
}

run();
