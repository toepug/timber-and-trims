// One-time build helper: resizes/re-encodes the source product photos from
// the project root into public/images/** with descriptive filenames, and
// writes a manifest of output dimensions for use in product data.
import sharp from "sharp";
import { mkdir, writeFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));

// [sourceFilename, destRelativePath, maxWidth]
const MAP = [
  // Hero
  ["PXL_20260328_211711416.jpg", "hero/hero-maple-mahogany-medallion-duo.jpg", 2200],

  // Products: full wood sunglasses
  ["PXL_20250522_191313549.jpg", "products/walnut-sunglasses-green-gold-mirror.jpg", 1600],
  ["PXL_20250522_190738857.jpg", "products/golden-oak-aviator-rose-mirror.jpg", 1600],
  ["PXL_20250522_190600085.jpg", "products/walnut-sunglasses-silver-mirror-display.jpg", 1600],
  ["PXL_20250522_191457051.jpg", "products/two-tone-wood-aviator-blue-green-mirror.jpg", 1600],
  ["PXL_20250522_191746360.jpg", "products/walnut-sunglasses-pair-handheld.jpg", 1600],
  ["PXL_20250523_220557376~2.jpg", "products/walnut-beech-aviator-blue-mirror-table.jpg", 1600],
  ["PXL_20250523_220738271.jpg", "products/walnut-beech-aviator-blue-mirror-detail.jpg", 1600],

  // Products: wood temple + acetate frame combos
  ["PXL_20251016_193037659~2.jpg", "products/tortoise-acetate-maple-temple-front.jpg", 1600],
  ["PXL_20251016_193210491.MP~2.jpg", "products/tortoise-acetate-maple-temple-angle.jpg", 1600],
  ["PXL_20251016_180359777~2.jpg", "products/colorblock-acetate-mahogany-temple-detail.jpg", 1600],
  ["PXL_20251016_193714605~2.jpg", "products/colorblock-acetate-mahogany-temple-plant.jpg", 1600],
  ["PXL_20251016_193733547~2.jpg", "products/colorblock-acetate-mahogany-temple-crossed.jpg", 1600],
  ["PXL_20260130_225908802.jpg", "products/clear-acetate-striped-oak-temple-side.jpg", 1600],
  ["PXL_20260130_225934826.jpg", "products/clear-acetate-striped-oak-temple-crossed.jpg", 1600],
  ["PXL_20260130_230445151.jpg", "products/burgundy-acetate-rainbow-oak-temple.jpg", 1600],
  ["PXL_20260130_230700366.jpg", "products/burgundy-acetate-rainbow-oak-temple-detail.jpg", 1600],
  ["PXL_20260312_223031571.jpg", "products/sky-blue-acetate-beech-striped-temple.jpg", 1600],
  ["PXL_20260319_015801446.jpg", "products/forest-acetate-beech-brass-medallion-side.jpg", 1600],
  ["PXL_20260319_015959366.jpg", "products/forest-acetate-beech-brass-medallion-crossed.jpg", 1600],
  ["PXL_20260319_020143558.jpg", "products/black-acetate-walnut-skull-medallion-back.jpg", 1600],
  ["PXL_20260320_195112914.MP.jpg", "products/black-acetate-walnut-skull-medallion-closeup.jpg", 1600],
  ["PXL_20260320_195229198.jpg", "products/black-acetate-walnut-skull-medallion-front.jpg", 1600],
  ["PXL_20260409_190328933.jpg", "products/black-acetate-walnut-skull-medallion-shop.jpg", 1600],
  ["PXL_20260409_190249323.jpg", "products/black-acetate-walnut-skull-medallion-shop-2.jpg", 1600],
  ["PXL_20260320_195736756.jpg", "products/black-acetate-oak-star-stud-front.jpg", 1600],
  ["PXL_20260320_195803323.jpg", "products/black-acetate-oak-star-stud-angle.jpg", 1600],
  ["PXL_20260320_195908199.jpg", "products/black-acetate-oak-star-stud-detail.jpg", 1600],
  ["PXL_20260320_200804019.jpg", "products/black-acetate-walnut-mosaic-inlay-top.jpg", 1600],
  ["PXL_20260320_200857434.jpg", "products/black-acetate-walnut-mosaic-inlay-side.jpg", 1600],
  ["PXL_20260320_201617834.jpg", "products/black-acetate-walnut-mosaic-inlay-detail.jpg", 1600],
  ["PXL_20260320_201900072.jpg", "products/black-acetate-walnut-chevron-inlay-top.jpg", 1600],
  ["PXL_20260320_195319003.MP.jpg", "products/black-acetate-walnut-chevron-inlay-pair.jpg", 1600],
  ["PXL_20260320_202136404.jpg", "products/smoke-acetate-rosewood-medallion.jpg", 1600],
  ["PXL_20260328_211804015.jpg", "products/gray-acetate-mahogany-silver-medallion.jpg", 1600],
  ["PXL_20260328_211928164.MP.jpg", "products/gray-acetate-mahogany-temple-front.jpg", 1600],
  ["PXL_20260328_211904069.jpg", "products/teal-acetate-maple-temple-front.jpg", 1600],
  ["PXL_20260328_211607852.jpg", "products/teal-acetate-maple-brass-medallion-side.jpg", 1600],
  ["PXL_20260328_211852856.jpg", "products/teal-acetate-maple-brass-medallion-angle.jpg", 1600],

  // Process / How it's made
  ["PXL_20260124_023902066.jpg", "process/raw-inlay-blanks-rainbow.jpg", 1400],
  ["PXL_20260226_220413738.jpg", "process/temple-blanks-assorted-1.jpg", 1400],
  ["PXL_20260226_220436189.jpg", "process/temple-blanks-assorted-2.jpg", 1400],
  ["PXL_20260226_221104449.jpg", "process/chevron-inlay-tips-closeup.jpg", 1400],
  ["PXL_20260226_221315124.jpg", "process/mosaic-inlay-tip-handheld.jpg", 1400],
  ["PXL_20260312_222807436.jpg", "process/mosaic-inlay-workbench-closeup.jpg", 1400],
  ["PXL_20260312_222938915.jpg", "process/finished-mosaic-temple-frame.jpg", 1400],

  // About / story
  ["PXL_20250522_174329062.jpg", "about/wood-grain-macro-fitting.jpg", 1400],
  ["PXL_20250522_182434761.jpg", "about/maker-wearing-glasses.jpg", 1400],
  ["PXL_20251105_180546714.jpg", "about/handheld-raw-temple-blanks.jpg", 1400],
  ["PXL_20251105_180602670.jpg", "about/temple-hinge-nosepad-detail.jpg", 1400],
  ["PXL_20251105_180631891.jpg", "about/temple-bridge-nosepad-detail.jpg", 1400],
  ["PXL_20260328_211843135.jpg", "about/maple-medallion-kilim-detail.jpg", 1400],
];

const manifest = {};

for (const [src, dest, maxWidth] of MAP) {
  const srcPath = path.join(root, src);
  const destPath = path.join(root, "public", "images", dest);
  await mkdir(path.dirname(destPath), { recursive: true });

  const image = sharp(srcPath).rotate();
  const meta = await image.metadata();
  const width = Math.min(meta.width ?? maxWidth, maxWidth);

  const buffer = await image
    .resize({ width, withoutEnlargement: true })
    .jpeg({ quality: 82, mozjpeg: true })
    .toBuffer();

  await writeFile(destPath, buffer);
  const outMeta = await sharp(buffer).metadata();
  manifest["/images/" + dest.replace(/\\/g, "/")] = {
    width: outMeta.width,
    height: outMeta.height,
  };
  console.log(`${src} -> ${dest} (${outMeta.width}x${outMeta.height}, ${(buffer.length / 1024).toFixed(0)} KB)`);
}

await mkdir(path.join(root, "data"), { recursive: true });
await writeFile(
  path.join(root, "data", "image-manifest.json"),
  JSON.stringify(manifest, null, 2)
);
console.log("\nWrote data/image-manifest.json");
