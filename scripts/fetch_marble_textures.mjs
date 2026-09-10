import https from 'https';
import fs from 'fs';
import path from 'path';

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
  // Pure seamless full-frame marble slab textures with rich golden and dramatic veins
  const targets = [
    {
      // Gold & Warm Calacatta luxury marble slab surface
      name: 'marble-gold-texture.jpg',
      url: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=2000&auto=format&fit=crop'
    },
    {
      // Smokey Italian Statuario dramatic vein slab surface
      name: 'marble-smokey-texture.jpg',
      url: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop'
    },
    {
      // Warm Earth Roman Travertine striated stone surface
      name: 'marble-travertine-texture.jpg',
      url: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2000&auto=format&fit=crop'
    },
    {
      // High-res luxury white Calacatta marble slab with gold-grey veins
      name: 'marble-calacatta-hd.jpg',
      url: 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?q=80&w=2000&auto=format&fit=crop'
    }
  ];

  for (const t of targets) {
    const dest = path.resolve('public', t.name);
    console.log(`Downloading ${t.name}...`);
    try {
      await downloadFile(t.url, dest);
      console.log(`Saved ${t.name} (${fs.statSync(dest).size} bytes)`);
    } catch (e) {
      console.error(`Error on ${t.name}:`, e.message);
    }
  }
}

run();
