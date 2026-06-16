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
      "Every piece starts with a select piece of timber, hand picked for its grain, color, and how it will pair with a frame front. No two blanks are identical, so no two finished temples are either.",
    image: img(
      "/images/process/timber.jpg",
      "Raw pieces of wood lumber ready to be cut into eyeglass temple blanks"
    ),
  },
  {
    title: "2. Designing the inlay",
    description:
      "For pieces with a stripe, or mosaic accent, the inlay is laid out first. Thin strips of leftover wood and plastic frame parts are arranged into chevrons, checkerboards, or rainbow bands before they're set permanently into the temple.",
    image: img(
      "/images/process/various-inlays.jpg",
      "An assortment of inlay material in various colors and patterns, laid out before being set into wood temples"
    ),
  },
  {
    title: "3. Hand-setting the details",
    description:
      "Each inlay is cut, glued, and sanded flush by hand—a slow process where a fraction of a millimeter can mean the difference between a seamless finish and one that feels just slightly off.",
    image: img(
      "/images/process/inlay-rough.jpg",
      "A wood temple with rough inlay pieces set in place before sanding and finishing"
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
      "The finished wood temples are hinged onto an upcycled material frame front and adjusted for fit -- balancing weight, flex, and how the wood grain lines up with the color of the front. The result: a frame that's part craft, part eyewear.",
    image: img(
      "/images/process/finished-mosaic-temple-frame.jpg",
      "Finished eyeglasses with walnut wood temples and checkerboard mosaic inlay, shown on a workbench"
    ),
  },
];
