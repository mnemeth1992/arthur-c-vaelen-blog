import fs from 'node:fs';
import zlib from 'node:zlib';

function createPng(width, height) {
  function crc32(buf) {
    let table = new Uint32Array(256);
    for (let i = 0; i < 256; i++) {
      let c = i;
      for (let k = 0; k < 8; k++) c = ((c & 1) ? (0xedb88320 ^ (c >>> 1)) : (c >>> 1));
      table[i] = c;
    }
    let crc = 0 ^ (-1);
    for (let i = 0; i < buf.length; i++) crc = (crc >>> 8) ^ table[(crc ^ buf[i]) & 0xff];
    return (crc ^ (-1)) >>> 0;
  }

  function chunk(type, data) {
    const len = Buffer.alloc(4);
    len.writeUInt32BE(data.length, 0);
    const typeBuf = Buffer.from(type, 'ascii');
    const crc = Buffer.alloc(4);
    crc.writeUInt32BE(crc32(Buffer.concat([typeBuf, data])), 0);
    return Buffer.concat([len, typeBuf, data, crc]);
  }

  const sig = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);

  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8;
  ihdr[9] = 2; // RGB
  ihdr[10] = 0;
  ihdr[11] = 0;
  ihdr[12] = 0;

  const rowSize = 1 + width * 3;
  const rawData = Buffer.alloc(rowSize * height);

  for (let y = 0; y < height; y++) {
    const rowOffset = y * rowSize;
    rawData[rowOffset] = 0;
    const ny = y / height;
    for (let x = 0; x < width; x++) {
      const nx = x / width;
      // Elegant deep forest green and charcoal gradient with subtle wave
      const wave = Math.sin(nx * Math.PI * 2) * 0.15;
      const r = Math.floor(22 + 10 * nx + 8 * (ny + wave));
      const g = Math.floor(48 + 25 * Math.sin(nx * Math.PI) + 15 * (1 - ny));
      const b = Math.floor(38 + 18 * ny);
      const pxOffset = rowOffset + 1 + x * 3;
      rawData[pxOffset] = Math.min(255, Math.max(0, r));
      rawData[pxOffset + 1] = Math.min(255, Math.max(0, g));
      rawData[pxOffset + 2] = Math.min(255, Math.max(0, b));
    }
  }

  const idat = chunk('IDAT', zlib.deflateSync(rawData));
  const iend = chunk('IEND', Buffer.alloc(0));

  return Buffer.concat([sig, chunk('IHDR', ihdr), idat, iend]);
}

if (!fs.existsSync('public/images')) {
  fs.mkdirSync('public/images', { recursive: true });
}

fs.writeFileSync('public/images/sample-cover.png', createPng(1200, 630));
console.log('Sample cover PNG generated successfully.');
