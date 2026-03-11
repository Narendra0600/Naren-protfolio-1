const fs = require('fs');
const https = require('https');
const path = require('path');

const publicDir = path.join(__dirname, 'public', 'images');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

function download(url, filename) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode !== 200) {
        reject(new Error(`Failed to get '${url}' (${res.statusCode})`));
        return;
      }
      const file = fs.createWriteStream(path.join(publicDir, filename));
      res.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', reject);
  });
}

const images = [
  { name: 'profile.webp', url: 'https://files.oaiusercontent.com/file-K1S2N3S9mXgVf6eFh8p2sD?se=2026-03-11T12%3A57%3A18Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Dbac5fdb2-4b2a-43d9-a72a-6d6f51cb3e43.webp&sig=G04rU2J52XQnCj/g7eJpKZ1Fq6A5/9fT2EoLzK0Hl4o%3D' },
  { name: 'thumb1.webp', url: 'https://files.oaiusercontent.com/file-N1Hw8S1tTq52Bv8K3D0b4e?se=2026-03-11T13%3A56%3A18Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D4588e360-153b-4ec6-8c50-25fcda09ed51.webp&sig=qWfG6r7sV7V6t4h9cO1lX9n7L2aR0O0Q/3H3S3s2y8k%3D' },
  { name: 'thumb2.webp', url: 'https://files.oaiusercontent.com/file-Mcd1W5JzG5A27A1sT5qYw6?se=2026-03-11T13%3A56%3A18Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3De88d8b4b-ffad-49c0-96f3-8cfb648bcbc4.webp&sig=C0wzS0EwKDE4RXZ8r3uB2d6gR9E2cQ9xLZX6R7a%2BUgE%3D' },
  { name: 'thumb3.webp', url: 'https://files.oaiusercontent.com/file-2uX6D7g1C1R8Q5x4S0B4aR?se=2026-03-11T13%3A56%3A18Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3De0e556aa-6745-42cf-9b93-b4cdcc510b10.webp&sig=W4c1n0y%2BAzQ5lE8d6eN5p9mW2bE7y6vD0xU3B9dI1s0%3D' },
  { name: 'thumb4.webp', url: 'https://files.oaiusercontent.com/file-H8B2aN6pT4L0S5b8Y2uR9M?se=2026-03-11T13%3A56%3A18Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Da0f135b6-75bb-4113-bfa4-399fa5efb313.webp&sig=L4z7u4hY9K1sC4n5V8iG0cR3wE5dF2mV9yE1C5tY4jA%3D' },
  { name: 'thumb5.webp', url: 'https://files.oaiusercontent.com/file-T3e4Y5E8J0oN1D6fB5tC2L?se=2026-03-11T13%3A56%3A18Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D453fcb74-32e6-4bf4-bd06-d5d1c5a9ab3a.webp&sig=xQeW6X1H0I7aP4cM2xO4bH2uA7rN8sZ0uR2cR9Bq5vY%3D' }
];

async function run() {
  for (const img of images) {
    try {
      console.log('Downloading', img.name);
      await download(img.url, img.name);
      console.log('Success:', img.name);
    } catch (e) {
      console.error('Failed:', img.name, e.message);
    }
  }
}

run();
