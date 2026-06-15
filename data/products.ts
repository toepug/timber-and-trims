import { img } from "@/lib/images";
import type { Product } from "@/lib/types";

/**
 * Product catalog. Each entry represents a real piece (or small run) of
 * handmade wood eyewear. `price` and `available` are intentionally left
 * undefined for most pieces -- this site is a portfolio/showcase today, but
 * the shape is ready for an e-commerce pass: add `price`, flip `available`,
 * and these objects can drive cart/checkout without restructuring.
 */
export const products: Product[] = [
  {
    slug: "memento-walnut-skull",
    name: "Memento Walnut",
    tagline: "Dark walnut temples with carved skull medallions",
    description:
      "Hand-shaped temples in rich, dark walnut, each inlaid with a carved bone-colored skull medallion. Paired with a matte black upcycled material front for a piece that's equal parts refined and a little rebellious.",
    category: "eyeglasses",
    wood: "Walnut",
    frameColor: "Matte black",
    accents: ["Carved skull medallion"],
    tags: ["walnut", "black", "medallion", "skull", "eyeglasses"],
    featured: true,
    images: [
      img(
        "/images/products/black-acetate-walnut-skull-medallion-front.jpg",
        "Front view of black upcycled material eyeglasses with walnut wood temples and carved skull medallions"
      ),
      img(
        "/images/products/black-acetate-walnut-skull-medallion-back.jpg",
        "Black upcycled material eyeglass frames with dark walnut wood temples, each inlaid with a carved ivory-colored skull medallion, viewed from behind"
      ),
      img(
        "/images/products/black-acetate-walnut-skull-medallion-closeup.jpg",
        "Close-up of a dark walnut wood temple with a carved skull medallion inlay on black upcycled material frames"
      ),
      img(
        "/images/products/black-acetate-walnut-skull-medallion-shop.jpg",
        "Walnut wood temples with carved skull medallions on black upcycled material frames, displayed in an optical shop"
      ),
      img(
        "/images/products/black-acetate-walnut-skull-medallion-shop-2.jpg",
        "Side view of walnut wood temples with a small carved skull medallion on black upcycled material frames"
      ),
    ],
  },
  {
    slug: "lagoon-maple-brass",
    name: "Lagoon Maple",
    tagline: "Light maple temples with brass medallions on teal upcycled material",
    description:
      "Pale, fine-grained maple temples set against a teal upcycled material front, each finished with a hand-set brass medallion. A warm-and-cool pairing that feels equally at home in the studio or on the trail.",
    category: "eyeglasses",
    wood: "Maple",
    frameColor: "Teal",
    accents: ["Brass medallion"],
    tags: ["maple", "teal", "medallion", "eyeglasses"],
    featured: true,
    images: [
      img(
        "/images/products/teal-acetate-maple-temple-front.jpg",
        "Front view of teal upcycled material eyeglasses with light maple wood temples"
      ),
      img(
        "/images/products/teal-acetate-maple-brass-medallion-side.jpg",
        "Teal upcycled material eyeglass frames with light maple wood temples, each set with a round brass medallion"
      ),
      img(
        "/images/products/teal-acetate-maple-brass-medallion-angle.jpg",
        "Angled view of teal upcycled material frames with maple wood temples and brass medallions"
      ),
    ],
  },
  {
    slug: "carnival-burgundy-rainbow",
    name: "Carnival Burgundy",
    tagline: "Burgundy upcycled material with rainbow inlay and oak temples",
    description:
      "A deep burgundy front gets a playful edge from a hand-laid rainbow stripe inlay, balanced by a clean golden oak temple. Bold enough for a statement, classic enough for every day.",
    category: "eyeglasses",
    wood: "Golden Oak",
    frameColor: "Burgundy",
    accents: ["Rainbow stripe inlay"],
    tags: ["oak", "burgundy", "rainbow", "inlay", "eyeglasses"],
    featured: true,
    images: [
      img(
        "/images/products/burgundy-acetate-rainbow-oak-temple.jpg",
        "Burgundy upcycled material eyeglass frames with a rainbow-striped edge, paired with a light oak wood temple"
      ),
      img(
        "/images/products/burgundy-acetate-rainbow-oak-temple-detail.jpg",
        "Close-up of burgundy upcycled material frames with rainbow stripe detailing and an oak wood temple"
      ),
    ],
  },
  {
    slug: "carnival-colorblock-mahogany",
    name: "Carnival Colorblock",
    tagline: "Blue, yellow & green colorblock front with mahogany temples",
    description:
      "A cheerful colorblock upcycled material front in blue, yellow, and green is grounded by warm mahogany temples. One of my most-loved combinations -- proof that wood and color can play well together.",
    category: "eyeglasses",
    wood: "Mahogany",
    frameColor: "Blue / Yellow / Green colorblock",
    accents: [],
    tags: ["mahogany", "colorblock", "eyeglasses"],
    images: [
      img(
        "/images/products/colorblock-acetate-mahogany-temple-plant.jpg",
        "Color-block upcycled material eyeglasses with mahogany wood temples resting on a wood table in front of a houseplant"
      ),
      img(
        "/images/products/colorblock-acetate-mahogany-temple-detail.jpg",
        "Detail of color-block upcycled material frames in blue, yellow, and green paired with reddish mahogany wood temples"
      ),
      img(
        "/images/products/colorblock-acetate-mahogany-temple-crossed.jpg",
        "Color-block upcycled material frames with mahogany wood temples, folded with the temples crossed"
      ),
    ],
  },
  {
    slug: "heritage-tortoise-maple",
    name: "Heritage Tortoise",
    tagline: "Tortoiseshell upcycled material with maple temples and maker's mark",
    description:
      "A timeless tortoiseshell upcycled material front paired with a smooth maple temple, hand-engraved with my maker's mark. Understated and built to be a daily-wear staple.",
    category: "eyeglasses",
    wood: "Maple",
    frameColor: "Tortoiseshell",
    accents: ["Engraved maker's mark"],
    tags: ["maple", "tortoise", "eyeglasses"],
    images: [
      img(
        "/images/products/tortoise-acetate-maple-temple-front.jpg",
        "Tortoiseshell-pattern upcycled material eyeglass frames paired with light maple wood temples, engraved with a small logo"
      ),
      img(
        "/images/products/tortoise-acetate-maple-temple-angle.jpg",
        "Angled view of tortoiseshell upcycled material frames with maple wood temples and an engraved maker's mark"
      ),
    ],
  },
  {
    slug: "frost-clear-striped-oak",
    name: "Frost Clear",
    tagline: "Clear upcycled material with striped oak & beech temples",
    description:
      "A frosted, translucent upcycled material front lets the temples take center stage: golden oak and pale beech, each banded with a dark contrast stripe inlay near the hinge.",
    category: "eyeglasses",
    wood: "Oak & Beech",
    frameColor: "Frosted clear",
    accents: ["Dark stripe inlay"],
    tags: ["oak", "beech", "clear", "inlay", "eyeglasses"],
    images: [
      img(
        "/images/products/clear-acetate-striped-oak-temple-side.jpg",
        "Clear upcycled material eyeglass frames with light oak wood temples featuring a dark striped inlay"
      ),
      img(
        "/images/products/clear-acetate-striped-oak-temple-crossed.jpg",
        "Clear upcycled material frames with striped oak and beech wood temples, folded with temples crossed"
      ),
    ],
  },
  {
    slug: "coastal-blue-beech",
    name: "Coastal Blue",
    tagline: "Sky blue upcycled material with striped beech temples",
    description:
      "A bright sky-blue upcycled material front paired with a beech temple finished in fine contrast striping -- a fresh, breezy combination for everyday wear.",
    category: "eyeglasses",
    wood: "Beech",
    frameColor: "Sky blue",
    accents: ["Stripe inlay"],
    tags: ["beech", "blue", "inlay", "eyeglasses"],
    images: [
      img(
        "/images/products/sky-blue-acetate-beech-striped-temple.jpg",
        "Sky blue upcycled material eyeglass frames with beech wood temples featuring a subtle striped inlay"
      ),
    ],
  },
  {
    slug: "forest-crest-beech-brass",
    name: "Forest Crest",
    tagline: "Forest green upcycled material with beech temples and brass medallions",
    description:
      "Deep forest green upcycled material meets pale, fine-grained beech, finished with a hand-set brass medallion on each temple. Grounded, woodsy, and quietly refined.",
    category: "eyeglasses",
    wood: "Beech",
    frameColor: "Forest green",
    accents: ["Brass medallion"],
    tags: ["beech", "green", "medallion", "eyeglasses"],
    images: [
      img(
        "/images/products/forest-acetate-beech-brass-medallion-side.jpg",
        "Forest green upcycled material eyeglass frames with beech wood temples, each set with a round brass medallion"
      ),
      img(
        "/images/products/forest-acetate-beech-brass-medallion-crossed.jpg",
        "Forest green upcycled material frames with beech wood temples and brass medallions, folded with temples crossed"
      ),
    ],
  },
  {
    slug: "wanderer-oak-star",
    name: "Wanderer Oak",
    tagline: "Golden oak temples with star studs on black upcycled material",
    description:
      "Golden oak temples with a warm, straight grain, each set with a small metal star stud near the hinge. Paired with a classic black upcycled material front for an everyday frame with a little extra shine.",
    category: "eyeglasses",
    wood: "Golden Oak",
    frameColor: "Black",
    accents: ["Star stud"],
    tags: ["oak", "black", "star", "eyeglasses"],
    images: [
      img(
        "/images/products/black-acetate-oak-star-stud-front.jpg",
        "Black upcycled material eyeglass frames with golden oak wood temples, each set with a metal star stud"
      ),
      img(
        "/images/products/black-acetate-oak-star-stud-angle.jpg",
        "Angled view of golden oak wood temples with star stud details on black upcycled material frames"
      ),
      img(
        "/images/products/black-acetate-oak-star-stud-detail.jpg",
        "Close-up of a golden oak wood temple with a metal star stud on black upcycled material frames"
      ),
    ],
  },
  {
    slug: "mosaic-walnut-checkerboard",
    name: "Mosaic Walnut",
    tagline: "Walnut temples with a hand-laid checkerboard inlay",
    description:
      "Dark walnut temples featuring a vibrant checkerboard mosaic inlay -- dozens of tiny pieces of wood and color hand-set in a tight grid. Paired with a black upcycled material front to let the inlay shine.",
    category: "eyeglasses",
    wood: "Walnut",
    frameColor: "Black",
    accents: ["Checkerboard mosaic inlay"],
    tags: ["walnut", "black", "mosaic", "inlay", "eyeglasses"],
    images: [
      img(
        "/images/products/black-acetate-walnut-mosaic-inlay-top.jpg",
        "Top view of black upcycled material eyeglasses with walnut wood temples featuring a colorful checkerboard mosaic inlay"
      ),
      img(
        "/images/products/black-acetate-walnut-mosaic-inlay-side.jpg",
        "Side view of walnut wood temples with a colorful checkerboard mosaic inlay on black upcycled material frames"
      ),
      img(
        "/images/products/black-acetate-walnut-mosaic-inlay-detail.jpg",
        "Close-up of a walnut wood temple showing a colorful checkerboard mosaic wood inlay"
      ),
    ],
  },
  {
    slug: "spectrum-walnut-chevron",
    name: "Spectrum Walnut",
    tagline: "Walnut temples with a rainbow chevron inlay",
    description:
      "Dark walnut temples banded with a hand-cut chevron inlay running through every color of the rainbow. A black upcycled material front keeps the focus on the woodwork.",
    category: "eyeglasses",
    wood: "Walnut",
    frameColor: "Black",
    accents: ["Rainbow chevron inlay"],
    tags: ["walnut", "black", "chevron", "rainbow", "inlay", "eyeglasses"],
    images: [
      img(
        "/images/products/black-acetate-walnut-chevron-inlay-top.jpg",
        "Black upcycled material eyeglasses with walnut wood temples featuring a rainbow chevron-striped inlay"
      ),
      img(
        "/images/products/black-acetate-walnut-chevron-inlay-pair.jpg",
        "A pair of walnut wood temples showing rainbow chevron inlay patterns next to finished eyeglasses"
      ),
    ],
  },
  {
    slug: "smoke-rosewood-medallion",
    name: "Smoke & Rosewood",
    tagline: "Smoke upcycled material with deep rosewood and an engraved medallion",
    description:
      "A smoke-tinted upcycled material front pairs with a deep, reddish-brown rosewood temple, finished with a small engraved geometric medallion. Moody and refined.",
    category: "eyeglasses",
    wood: "Rosewood",
    frameColor: "Smoke",
    accents: ["Engraved medallion"],
    tags: ["rosewood", "smoke", "medallion", "eyeglasses"],
    images: [
      img(
        "/images/products/smoke-acetate-rosewood-medallion.jpg",
        "Smoke-tinted upcycled material eyeglass frames with deep reddish rosewood temples and a small engraved geometric medallion"
      ),
    ],
  },
  {
    slug: "slate-mahogany-silver",
    name: "Slate & Mahogany",
    tagline: "Gray upcycled material with mahogany temples and an ornate silver medallion",
    description:
      "A soft gray upcycled material front sets off a warm mahogany temple, capped with an ornate silver medallion. A refined pairing of cool and warm tones.",
    category: "eyeglasses",
    wood: "Mahogany",
    frameColor: "Gray",
    accents: ["Ornate silver medallion"],
    tags: ["mahogany", "gray", "medallion", "eyeglasses"],
    images: [
      img(
        "/images/products/gray-acetate-mahogany-temple-front.jpg",
        "Front view of gray upcycled material eyeglasses with reddish mahogany wood temples"
      ),
      img(
        "/images/products/gray-acetate-mahogany-silver-medallion.jpg",
        "Gray upcycled material eyeglass frames with reddish mahogany wood temples, each set with an ornate silver medallion"
      ),
    ],
  },
  {
    slug: "reef-walnut-beech-aviator",
    name: "Reef Aviator",
    tagline: "Wood aviator sunglasses with blue mirrored lenses",
    description:
      "A full wood aviator frame with blue mirrored lenses, grain running clean across the brow and into beech temples. A statement piece for sunny days.",
    category: "sunglasses",
    wood: "Walnut & Beech",
    frameColor: "Natural wood",
    accents: ["Blue mirrored lenses"],
    tags: ["walnut", "beech", "sunglasses", "mirror"],
    images: [
      img(
        "/images/products/walnut-beech-aviator-blue-mirror-table.jpg",
        "Wood-framed aviator sunglasses with blue mirrored lenses and beech temples resting on a wooden table"
      ),
      img(
        "/images/products/walnut-beech-aviator-blue-mirror-detail.jpg",
        "Close-up of wood-framed aviator sunglasses with blue mirrored lenses, showing the wood grain detail"
      ),
    ],
  },
  {
    slug: "stonewood-walnut-jade-mirror",
    name: "Stonewood Square",
    tagline: "Walnut sunglasses with green-gold mirrored lenses",
    description:
      "A bold square silhouette carved from a single block of walnut, paired with green-gold mirrored lenses. Heavyweight, hand-finished, and entirely wood.",
    category: "sunglasses",
    wood: "Walnut",
    frameColor: "Natural wood",
    accents: ["Green-gold mirrored lenses"],
    tags: ["walnut", "sunglasses", "mirror"],
    images: [
      img(
        "/images/products/walnut-sunglasses-green-gold-mirror.jpg",
        "Walnut wood sunglasses with square frames and green-gold mirrored lenses, shown on a dark display surface"
      ),
      img(
        "/images/products/walnut-sunglasses-pair-handheld.jpg",
        "A hand holding two pairs of walnut wood sunglasses, one with green lenses and one with silver mirrored lenses"
      ),
    ],
  },
  {
    slug: "sundown-oak-rose-mirror",
    name: "Sundown Aviator",
    tagline: "Golden oak aviators with rose mirrored lenses",
    description:
      "A classic aviator silhouette in golden oak with a warm, straight grain, finished with rose-mirrored lenses for golden-hour wear.",
    category: "sunglasses",
    wood: "Golden Oak",
    frameColor: "Natural wood",
    accents: ["Rose mirrored lenses"],
    tags: ["oak", "sunglasses", "mirror"],
    images: [
      img(
        "/images/products/golden-oak-aviator-rose-mirror.jpg",
        "Golden oak wood aviator sunglasses with rose-pink mirrored lenses on a display stand"
      ),
    ],
  },
  {
    slug: "trail-walnut-silver-mirror",
    name: "Trail Square",
    tagline: "Walnut sunglasses with silver mirrored lenses",
    description:
      "A versatile square wood frame in walnut with a tight, even grain, finished with cool silver mirrored lenses. Equally at home on a hike or around town.",
    category: "sunglasses",
    wood: "Walnut",
    frameColor: "Natural wood",
    accents: ["Silver mirrored lenses"],
    tags: ["walnut", "sunglasses", "mirror"],
    images: [
      img(
        "/images/products/walnut-sunglasses-silver-mirror-display.jpg",
        "Walnut wood sunglasses with silver mirrored lenses displayed on a glass shelf"
      ),
    ],
  },
  {
    slug: "two-tone-arctic-aviator",
    name: "Two-Tone Arctic Aviator",
    tagline: "Oak & walnut aviator with arctic mirrored lenses",
    description:
      "Two woods, one frame: a golden oak brow flows into dark walnut temples, finished with cool blue-green mirrored lenses for a frame that's never just one thing.",
    category: "sunglasses",
    wood: "Oak & Walnut",
    frameColor: "Natural wood",
    accents: ["Blue-green mirrored lenses"],
    tags: ["oak", "walnut", "sunglasses", "mirror"],
    images: [
      img(
        "/images/products/two-tone-wood-aviator-blue-green-mirror.jpg",
        "Two-tone wood aviator sunglasses combining light oak and dark walnut, with blue-green mirrored lenses"
      ),
    ],
  },
];

export const featuredProducts = products.filter((p) => p.featured);

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
