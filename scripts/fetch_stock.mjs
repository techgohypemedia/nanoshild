import fs from 'fs';
import path from 'path';
import https from 'https';

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, {
      headers: { 'User-Agent': 'Mozilla/5.0' }
    }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return resolve(downloadFile(res.headers.location, dest));
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Failed to download: ${res.statusCode}`));
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

async function searchAndDownload() {
  const stockDir = path.resolve('public/showroom-stock');
  if (!fs.existsSync(stockDir)) {
    fs.mkdirSync(stockDir, { recursive: true });
  }

  // Curated high-res Unsplash direct IDs of marble slabs in warehouse / stock / quarry slabs
  const targets = [
    {
      name: 'statuario-stock.jpg',
      url: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?q=80&w=1600&auto=format&fit=crop'
    },
    {
      name: 'onyx-stock.jpg',
      url: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1600&auto=format&fit=crop'
    },
    {
      name: 'travertine-stock.jpg',
      url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1600&auto=format&fit=crop'
    },
    {
      name: 'calacatta-stock.jpg',
      url: 'https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=1600&auto=format&fit=crop'
    },
    {
      name: 'black-marquina-stock.jpg',
      url: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?q=80&w=1600&auto=format&fit=crop'
    }
  ];

  for (const target of targets) {
    const dest = path.join(stockDir, target.name);
    console.log(`Downloading ${target.name}...`);
    try {
      await downloadFile(target.url, dest);
      const stats = fs.statSync(dest);
      console.log(`Downloaded ${target.name} (${stats.size} bytes)`);
    } catch (e) {
      console.error(`Error downloading ${target.name}:`, e.message);
    }
  }
}

searchAndDownload();
