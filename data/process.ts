import { img } from "@/lib/images";
import type { ProductImage } from "@/lib/types";

export interface ProcessStep {
  title: string;
  description: string;
  image: ProductImage;
}

export const processSteps: ProcessStep[] = [
  {
    title: "1. Choosing the wood",
    description:
      "Every piece starts with a stack of raw blanks -- golden oak, walnut, maple, beech, mahogany, rosewood -- each one picked for its grain, color, and how it will pair with a frame front. No two blanks are identical, so no two finished temples are either.",
    image: img(
      "/images/process/temple-blanks-assorted-1.jpg",
      "An assortment of unfinished wood temple blanks in various wood tones and inlay patterns"
    ),
  },
  {
    title: "2. Designing the inlay",
    description:
      "For pieces with a medallion, stripe, or mosaic accent, the inlay is laid out first. Thin strips of dyed wood and acrylic are arranged into chevrons, checkerboards, or rainbow bands before they're set permanently into the temple.",
    image: img(
      "/images/process/raw-inlay-blanks-rainbow.jpg",
      "Raw wood temple blanks with colorful rainbow-striped inlay patterns laid out on camouflage fabric"
    ),
  },
  {
    title: "3. Hand-setting the details",
    description:
      "Each inlay piece is cut, glued, and sanded flush by hand -- a slow process where a fraction of a millimeter makes the difference between a clean line and a smudged one. Medallions, studs, and carved accents are set the same way.",
    image: img(
      "/images/process/chevron-inlay-tips-closeup.jpg",
      "Close-up of two wood temple tips showing a detailed rainbow chevron inlay pattern"
    ),
  },
  {
    title: "4. Shaping & finishing",
    description:
      "Once the inlay is set, each temple is shaped to its final curve, sanded through progressively finer grits, and finished with oil to bring out the grain and protect the wood for everyday wear.",
    image: img(
      "/images/process/mosaic-inlay-workbench-closeup.jpg",
      "Close-up of a wood temple with checkerboard mosaic inlay resting on a metal workbench fixture"
    ),
  },
  {
    title: "5. Fitting to the frame",
    description:
      "The finished wood temples are hinged onto an acetate frame front and adjusted for fit -- balancing weight, flex, and how the wood grain lines up with the color of the front. The result: a frame that's part craft, part eyewear.",
    image: img(
      "/images/process/finished-mosaic-temple-frame.jpg",
      "Finished eyeglasses with walnut wood temples and checkerboard mosaic inlay, shown on a workbench"
    ),
  },
];
