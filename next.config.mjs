import fs from 'fs';
import path from 'path';

try {
  const src = path.join(process.cwd(), 'assets', 'public', 'JavaFullstackDeveloper.pdf');
  const dest = path.join(process.cwd(), 'public', 'JavaFullstackDeveloper.pdf');

  // Ensure public folder exists
  const publicDir = path.join(process.cwd(), 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log('Successfully copied resume PDF to public directory!');
  } else {
    console.warn('Source resume PDF not found at:', src);
  }
} catch (err) {
  console.error('Error copying resume PDF:', err);
}

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;
