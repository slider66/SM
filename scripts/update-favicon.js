const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function generateFavicon() {
  const root = path.join(__dirname, '..');
  const svgPath = path.join(root, 'src', 'app', 'icon.svg');
  const svgSource = await fs.promises.readFile(svgPath);

  // Primary PNG for high resolution usage
  await sharp(svgSource)
    .resize(512, 512)
    .png({ compressionLevel: 9 })
    .toFile(path.join(root, 'public', 'merle-favicon.png'));

  // Icon PNG consumed by Next.js metadata helpers
  const iconPngBuffer = await sharp(svgSource)
    .resize(192, 192)
    .png({ compressionLevel: 9 })
    .toBuffer();

  await fs.promises.writeFile(
    path.join(root, 'src', 'app', 'icon.png'),
    iconPngBuffer
  );

  // ICO container embedding the 256px PNG representation
  const faviconPngBuffer = await sharp(svgSource)
    .resize(256, 256)
    .png({ compressionLevel: 9 })
    .toBuffer();

  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // Reserved
  header.writeUInt16LE(1, 2); // Icon type
  header.writeUInt16LE(1, 4); // Number of images

  const directoryEntry = Buffer.alloc(16);
  directoryEntry.writeUInt8(0, 0); // Width (0 => 256px)
  directoryEntry.writeUInt8(0, 1); // Height (0 => 256px)
  directoryEntry.writeUInt8(0, 2); // Color palette size
  directoryEntry.writeUInt8(0, 3); // Reserved
  directoryEntry.writeUInt16LE(1, 4); // Color planes
  directoryEntry.writeUInt16LE(32, 6); // Bits per pixel
  directoryEntry.writeUInt32LE(faviconPngBuffer.length, 8); // Image size
  directoryEntry.writeUInt32LE(header.length + directoryEntry.length, 12); // Offset

  const icoBuffer = Buffer.concat([header, directoryEntry, faviconPngBuffer]);
  await fs.promises.writeFile(
    path.join(root, 'src', 'app', 'favicon.ico'),
    icoBuffer
  );
}

generateFavicon().catch((error) => {
  console.error('Failed to generate favicon assets:', error);
  process.exitCode = 1;
});
