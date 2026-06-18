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
    category: "signature-series",
    tone: "dark",
    frameColor: "Matte black",
    accents: ["Carved skull medallion"],
    tags: ["walnut", "black", "medallion", "skull"],
    featured: true,
    images: [
      img(
        "/images/products/black-acetate-walnut-skull-medallion-front.jpg",
        "Front view of black upcycled material eyeglasses with walnut wood temples and carved skull medallions"
      ),
      img(
        "/images/products/black-acetate-walnut-skull-medallion-closeup.jpg",
        "Close-up of a dark walnut wood temple with a carved skull medallion inlay on black upcycled material frames"
      ),
      img(
        "/images/products/black-acetate-walnut-chevron-inlay-pair.jpg",
        "A pair of walnut wood temples showing rainbow chevron inlay patterns next to finished eyeglasses"
      ),
    ],
  },
  {
    slug: "lagoon-maple-brass",
    name: "Lagoon Maple",
    tagline: "Light maple temples with brass medallions on teal upcycled material",
    description:
      "Pale, fine-grained maple temples set against a teal upcycled material front, each finished with a hand-set brass medallion. A warm-and-cool pairing that feels equally at home in the studio or on the trail.",
    category: "signature-series",
    tone: "light",
    frameColor: "Teal",
    accents: ["Brass medallion"],
    tags: ["maple", "teal", "medallion"],
    featured: true,
    images: [
      img(
        "/images/products/forest-acetate-beech-brass-medallion-crossed.jpg",
        "Forest green upcycled material frames with beech wood temples and brass medallions, folded with temples crossed"
      ),
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
      img(
        "/images/products/forest-acetate-beech-brass-medallion-side.jpg",
        "Forest green upcycled material eyeglass frames with beech wood temples, each set with a round brass medallion"
      ),
    ],
  },
  {
    slug: "carnival-burgundy-rainbow",
    name: "Carnival Burgundy",
    tagline: "Burgundy upcycled material with rainbow inlay and oak temples",
    description:
      "A deep burgundy front gets a playful edge from a hand-laid rainbow stripe inlay, balanced by a clean golden oak temple. Bold enough for a statement, classic enough for every day.",
    category: "signature-series",
    tone: "medium",
    frameColor: "Burgundy",
    accents: ["Rainbow stripe inlay"],
    tags: ["oak", "burgundy", "rainbow", "inlay"],
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
    category: "wood-temples",
    tone: "medium",
    frameColor: "Blue / Yellow / Green colorblock",
    accents: [],
    tags: ["mahogany", "colorblock"],
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
    category: "signature-series",
    tone: "light",
    frameColor: "Tortoiseshell",
    accents: ["Engraved maker's mark"],
    tags: ["maple", "tortoise"],
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
    category: "signature-series",
    tone: "light",
    frameColor: "Frosted clear",
    accents: ["Dark stripe inlay"],
    tags: ["oak", "beech", "clear", "inlay"],
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
    category: "signature-series",
    tone: "light",
    frameColor: "Sky blue",
    accents: ["Stripe inlay"],
    tags: ["beech", "blue", "inlay"],
    images: [
      img(
        "/images/products/sky-blue-acetate-beech-striped-temple.jpg",
        "Sky blue upcycled material eyeglass frames with beech wood temples featuring a subtle striped inlay"
      ),
    ],
  },
  {
    slug: "wanderer-oak-star",
    name: "Wanderer Oak",
    tagline: "Golden oak temples with star studs on black upcycled material",
    description:
      "Golden oak temples with a warm, straight grain, each set with a small metal star stud near the hinge. Paired with a classic black upcycled material front for an everyday frame with a little extra shine.",
    category: "signature-series",
    tone: "medium",
    frameColor: "Black",
    accents: ["Star stud"],
    tags: ["oak", "black", "star"],
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
    category: "signature-series",
    tone: "dark",
    frameColor: "Black",
    accents: ["Checkerboard mosaic inlay"],
    tags: ["walnut", "black", "mosaic", "inlay"],
    images: [
      img(
        "/images/products/black-acetate-walnut-mosaic-inlay-top.jpg",
        "Top view of black upcycled material eyeglasses with walnut wood temples featuring a colorful checkerboard mosaic inlay"
      ),
      img(
        "/images/products/black-acetate-walnut-mosaic-inlay-side.jpg",
        "Side view of walnut wood temples with a colorful checkerboard mosaic inlay on black upcycled material frames"
      ),
    ],
  },
  {
    slug: "mosaic-walnut-checkerboard-detail",
    name: "Mosaic Walnut Detail",
    tagline: "Close-up of the hand-laid checkerboard inlay on walnut temples",
    description:
      "A close look at the checkerboard mosaic inlay — dozens of tiny pieces of wood and color hand-set into dark walnut, sanded flush, and finished. Each square is placed individually.",
    category: "signature-series",
    tone: "dark",
    frameColor: "Black",
    accents: ["Checkerboard mosaic inlay"],
    tags: ["walnut", "black", "mosaic", "inlay"],
    images: [
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
    category: "signature-series",
    tone: "dark",
    frameColor: "Black",
    accents: ["Rainbow chevron inlay"],
    tags: ["walnut", "black", "chevron", "rainbow", "inlay"],
    images: [
      img(
        "/images/products/black-acetate-walnut-chevron-inlay-top.jpg",
        "Black upcycled material eyeglasses with walnut wood temples featuring a rainbow chevron-striped inlay"
      ),
    ],
  },
  {
    slug: "smoke-rosewood-medallion",
    name: "Smoke & Rosewood",
    tagline: "Smoke upcycled material with deep rosewood and an engraved medallion",
    description:
      "A smoke-tinted upcycled material front pairs with a deep, reddish-brown rosewood temple, finished with a small engraved geometric medallion. Moody and refined.",
    category: "signature-series",
    tone: "dark",
    frameColor: "Smoke",
    accents: ["Engraved medallion"],
    tags: ["rosewood", "smoke", "medallion"],
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
    category: "signature-series",
    tone: "medium",
    frameColor: "Gray",
    accents: ["Ornate silver medallion"],
    tags: ["mahogany", "gray", "medallion"],
    images: [
      img(
        "/images/products/gray-acetate-mahogany-silver-medallion.jpg",
        "Gray upcycled material eyeglass frames with reddish mahogany wood temples, each set with an ornate silver medallion"
      ),
      img(
        "/images/products/gray-acetate-mahogany-temple-front.jpg",
        "Front view of gray upcycled material eyeglasses with reddish mahogany wood temples"
      ),
    ],
  },
  {
    slug: "reef-walnut-beech-aviator",
    name: "Reef Aviator",
    tagline: "Wood aviator sunglasses with blue mirrored lenses",
    description:
      "A full wood aviator frame with blue mirrored lenses, grain running clean across the brow and into beech temples. A statement piece for sunny days.",
    category: "full-wood-frame",
    tone: "medium",
    frameColor: "Natural wood",
    accents: ["Blue mirrored lenses"],
    tags: ["walnut", "beech", "mirror"],
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
    category: "full-wood-frame",
    tone: "dark",
    frameColor: "Natural wood",
    accents: ["Green-gold mirrored lenses"],
    tags: ["walnut", "mirror"],
    images: [
      img(
        "/images/products/walnut-sunglasses-green-gold-mirror.jpg",
        "Walnut wood sunglasses with square frames and green-gold mirrored lenses, shown on a dark display surface"
      ),
      img(
        "/images/products/walnut-sunglasses-pair-handheld.jpg",
        "A hand holding two pairs of walnut wood sunglasses, one with green lenses and one with silver mirrored lenses"
      ),
      img(
        "/images/products/walnut-sunglasses-silver-mirror-display.jpg",
        "Walnut wood sunglasses with silver mirrored lenses displayed on a glass shelf"
      ),
    ],
  },
  {
    slug: "sundown-oak-rose-mirror",
    name: "Sundown Aviator",
    tagline: "Golden oak aviators with rose mirrored lenses",
    description:
      "A classic aviator silhouette in golden oak with a warm, straight grain, finished with rose-mirrored lenses for golden-hour wear.",
    category: "full-wood-frame",
    tone: "medium",
    frameColor: "Natural wood",
    accents: ["Rose mirrored lenses"],
    tags: ["oak", "mirror"],
    images: [
      img(
        "/images/products/golden-oak-aviator-rose-mirror.jpg",
        "Golden oak wood aviator sunglasses with rose-pink mirrored lenses on a display stand"
      ),
    ],
  },
  {
    slug: "two-tone-arctic-aviator",
    name: "Two-Tone Arctic Aviator",
    tagline: "Oak & walnut aviator with arctic mirrored lenses",
    description:
      "Two woods, one frame: a golden oak brow flows into dark walnut temples, finished with cool blue-green mirrored lenses for a frame that's never just one thing.",
    category: "full-wood-frame",
    tone: "medium",
    frameColor: "Natural wood",
    accents: ["Blue-green mirrored lenses"],
    tags: ["oak", "walnut", "mirror"],
    images: [
      img(
        "/images/products/two-tone-wood-aviator-blue-green-mirror.jpg",
        "Two-tone wood aviator sunglasses combining light oak and dark walnut, with blue-green mirrored lenses"
      ),
    ],
  },

  // ── New products from IMG_ photos ─────────────────────────────────────────

  {
    slug: "red-olive-wood",
    name: "Red & Olive Wood",
    tagline: "Bright red frame with naturally striped olive wood temples",
    description:
      "A vivid red frame front paired with temples in a warm, naturally banded wood. The stripe in the grain isn't carved — it's just how the wood grew. Simple, bold, and entirely handmade.",
    category: "wood-temples",
    tone: "medium",
    frameColor: "Bright red",
    accents: [],
    tags: ["red", "striped", "olive"],
    images: [
      img(
        "/images/products/IMG_20220903_184445.jpg",
        "Top view of red eyeglass frames with naturally striped olive wood temples"
      ),
      img(
        "/images/products/IMG_20220903_184506.jpg",
        "Side view of red frames showing the striped wood grain on the temples"
      ),
      img(
        "/images/products/IMG_20220903_184605.jpg",
        "Portrait view of red eyeglasses with olive wood temples resting on a surface"
      ),
    ],
  },
  {
    slug: "black-light-wood-green-hinge",
    name: "Black & Light Wood",
    tagline: "Matte black frame with pale wood temples and a green resin hinge accent",
    description:
      "A matte black frame front fitted with light, fine-grained wood temples. A small green resin accent at the hinge adds a quiet pop of color — easy to miss until someone asks about it.",
    category: "wood-temples",
    tone: "light",
    frameColor: "Matte black",
    accents: ["Green resin hinge accent"],
    tags: ["black", "light wood", "green"],
    images: [
      img(
        "/images/products/IMG_20220903_184958.jpg",
        "Portrait view of matte black eyeglasses with pale wood temples and a green resin hinge detail"
      ),
    ],
  },
  {
    slug: "black-carved-cross-temple",
    name: "Black & Carved Cross",
    tagline: "Black frame with hand-carved geometric cross pattern on medium wood",
    description:
      "Medium-toned wood temples carved with a repeating geometric cross motif across the full length of each arm. The pattern is cut by hand, so no two temples are identical. Fitted to a matte black frame front.",
    category: "signature-series",
    tone: "medium",
    frameColor: "Matte black",
    accents: ["Hand-carved cross pattern"],
    tags: ["black", "carved", "geometric"],
    images: [
      img(
        "/images/products/IMG_20220903_185304_BURST001_COVER.jpg",
        "Front view of black eyeglasses with medium wood temples carved in a repeating geometric cross pattern"
      ),
      img(
        "/images/products/IMG_20220903_185339.jpg",
        "Angled view showing the carved cross pattern running along both temples"
      ),
      img(
        "/images/products/IMG_20220903_185158.jpg",
        "Side view of a single temple with hand-carved geometric cross detailing"
      ),
      img(
        "/images/products/IMG_20220903_185216.jpg",
        "Close view of the carved cross pattern on the wood temple"
      ),
      img(
        "/images/products/IMG_20220903_185228.jpg",
        "Top view of black frames with medium wood carved cross temples"
      ),
    ],
  },
  {
    slug: "black-rosewood-green-lens",
    name: "Black Rosewood Sunglasses",
    tagline: "Black sunglass frames with rich rosewood temples and green lenses",
    description:
      "A bold sunglass frame in matte black paired with deep, reddish-brown rosewood temples — the kind of grain that shifts from amber to mahogany depending on the light. Fitted with green-tinted lenses.",
    category: "wood-temples",
    tone: "dark",
    frameColor: "Matte black",
    accents: ["Green-tinted lenses"],
    tags: ["black", "rosewood", "sunglasses", "green"],
    images: [
      img(
        "/images/products/IMG_20220927_095414.jpg",
        "Black sunglass frames with deep rosewood temples and green lenses resting against a tree outdoors"
      ),
      img(
        "/images/products/IMG_20220927_094509.jpg",
        "Side view of black sunglasses with rosewood wood temples"
      ),
      img(
        "/images/products/IMG_20220927_094559.jpg",
        "Black sunglass frames with rosewood temples hanging on a tree branch"
      ),
      img(
        "/images/products/IMG_20220927_094754.jpg",
        "Angled view of black sunglasses with rich rosewood temples and green lenses"
      ),
      img(
        "/images/products/IMG_20220927_102731.jpg",
        "Top view of black frames with rosewood temples laid flat"
      ),
    ],
  },
  {
    slug: "black-driftwood-temple",
    name: "Black & Driftwood",
    tagline: "Matte black frame with pale, weathered driftwood-toned temples",
    description:
      "Light, pale-toned wood temples with a bleached, almost driftwood quality set against a matte black frame. An understated pair that wears quietly and pairs with almost anything.",
    category: "wood-temples",
    tone: "light",
    frameColor: "Matte black",
    accents: [],
    tags: ["black", "light wood", "driftwood"],
    images: [
      img(
        "/images/products/IMG_20221020_181130.jpg",
        "Black eyeglasses with pale driftwood-toned wood temples resting on fabric"
      ),
      img(
        "/images/products/IMG_20221020_181143.jpg",
        "Side view of matte black frames with light, bleached-looking wood temples"
      ),
    ],
  },
  {
    slug: "black-carved-wave-purple",
    name: "Black Carved Wave",
    tagline: "Black sunglasses with sculptural carved walnut temples and purple resin",
    description:
      "Walnut temples carved into a flowing wave profile, finished with a strip of purple resin running through the carved channel. Fitted to matte black sunglass frames. The sculpture takes longer than the entire rest of the build.",
    category: "signature-series",
    tone: "dark",
    frameColor: "Matte black",
    accents: ["Carved wave profile", "Purple resin inlay"],
    tags: ["black", "walnut", "carved", "purple", "sunglasses"],
    featured: true,
    images: [
      img(
        "/images/products/IMG_20221126_124356.jpg",
        "Side profile of black sunglass frames with walnut temples carved into a wave shape with purple resin detail"
      ),
      img(
        "/images/products/IMG_20221126_124347.jpg",
        "Front view of black sunglasses with sculptural carved walnut temples"
      ),
      img(
        "/images/products/IMG_20221126_124410.jpg",
        "Close-up showing the carved wave profile and purple resin channel in the walnut temple"
      ),
      img(
        "/images/products/IMG_20221126_124426.jpg",
        "Angled overhead view of black sunglasses with carved wave walnut temples"
      ),
      img(
        "/images/products/IMG_20221126_124538.jpg",
        "Portrait close-up of the carved walnut temple showing the wave detail and purple resin inlay"
      ),
    ],
  },
  {
    slug: "royal-blue-multi-wood-stripe",
    name: "Royal Blue & Wood Stripe",
    tagline: "Royal blue frame with maple temples and a decorative multi-wood stripe",
    description:
      "Pale maple temples banded with a hand-inlaid strip of contrasting woods — several tones set side by side to form a decorative accent near the hinge. Paired with a royal blue frame front.",
    category: "signature-series",
    tone: "light",
    frameColor: "Royal blue",
    accents: ["Multi-wood stripe inlay"],
    tags: ["blue", "maple", "stripe", "inlay"],
    images: [
      img(
        "/images/products/IMG_20221210_135555.jpg",
        "Royal blue eyeglasses with pale maple temples and a decorative multi-wood stripe inlay, resting on a reflective surface"
      ),
      img(
        "/images/products/IMG_20221210_135609.jpg",
        "Front view of royal blue frames with maple wood temples"
      ),
      img(
        "/images/products/IMG_20221210_135613.jpg",
        "Angled view of the maple temple showing the multi-wood stripe inlay detail"
      ),
      img(
        "/images/products/IMG_20221210_135724.jpg",
        "Side view of royal blue eyeglasses with light maple temples"
      ),
    ],
  },
  {
    slug: "midnight-blue-spalted-maple",
    name: "Midnight Blue & Spalted Maple",
    tagline: "Midnight blue frame with spalted maple temples",
    description:
      "Spalted maple is one of the few woods where imperfection is the whole point: the dark streaks and figuring are caused by fungal growth that stopped when the wood dried, leaving behind a map of something that once moved through it. Fitted to a midnight blue frame front.",
    category: "signature-series",
    tone: "light",
    frameColor: "Midnight blue",
    accents: [],
    tags: ["blue", "spalted maple", "maple"],
    featured: true,
    images: [
      img(
        "/images/products/IMG_20230103_175143.jpg",
        "Midnight blue eyeglasses with spalted maple temples showing dramatic dark streaks in the wood grain"
      ),
      img(
        "/images/products/IMG_20230103_175113.jpg",
        "Front view of midnight blue frames with spalted maple temples"
      ),
      img(
        "/images/products/IMG_20230103_175125.jpg",
        "Angled view showing the figuring and black streaks in the spalted maple temple"
      ),
    ],
  },
  {
    slug: "olive-walnut-purple-diamonds",
    name: "Olive & Walnut Purple Diamonds",
    tagline: "Olive frame with walnut temples and purple diamond resin accents",
    description:
      "Walnut temples set with a row of diamond-shaped purple resin accents running along the outer edge. The diamonds are cut and set individually, so no two are perfectly uniform. Paired with an olive green frame front.",
    category: "signature-series",
    tone: "dark",
    frameColor: "Olive green",
    accents: ["Purple diamond resin accents"],
    tags: ["olive", "green", "walnut", "purple", "diamonds"],
    images: [
      img(
        "/images/products/IMG_20230103_175221.jpg",
        "Olive green eyeglasses with walnut temples inset with purple diamond-shaped resin accents"
      ),
      img(
        "/images/products/IMG_20230103_175223.jpg",
        "Close-up front view of olive frames with the walnut and purple diamond temple detail"
      ),
      img(
        "/images/products/IMG_20230103_175300.jpg",
        "Angled view showing the row of purple diamonds set into the walnut temple"
      ),
      img(
        "/images/products/IMG_20230103_175311.jpg",
        "Side view of olive eyeglasses with walnut temples and purple diamond accents"
      ),
      img(
        "/images/products/IMG_20230103_175338.jpg",
        "Portrait close-up of the purple diamond resin inlay in the walnut temple"
      ),
    ],
  },
  {
    slug: "green-olive-wood-plain",
    name: "Green & Olive Wood",
    tagline: "Forest green frame with plain olive wood temples",
    description:
      "An unpretentious pairing: a forest green frame front with olive wood temples left mostly as they came from the plank. The grain does the work.",
    category: "wood-temples",
    tone: "medium",
    frameColor: "Forest green",
    accents: [],
    tags: ["green", "olive", "plain"],
    images: [
      img(
        "/images/products/IMG_20230103_175548.jpg",
        "Forest green eyeglasses with plain olive wood temples displayed in an optical setting"
      ),
      img(
        "/images/products/IMG_20230103_175418.jpg",
        "Portrait view of green frames with olive wood temples held up against a light background"
      ),
      img(
        "/images/products/IMG_20230103_175453.jpg",
        "Close portrait view showing the olive wood grain on green-framed eyeglasses"
      ),
    ],
  },
  {
    slug: "clear-beech-walnut-two-tone",
    name: "Clear & Two-Tone Wood",
    tagline: "Clear frame with two-tone beech and walnut temples",
    description:
      "Each temple is built from two pieces of wood joined at the middle — pale beech on one end, dark walnut on the other. The join is clean, the contrast is high, and the clear frame front lets the temple do all the talking.",
    category: "signature-series",
    tone: "light",
    frameColor: "Clear",
    accents: ["Two-tone wood joint"],
    tags: ["clear", "beech", "walnut", "two-tone"],
    images: [
      img(
        "/images/products/IMG_20230103_175626.jpg",
        "Clear eyeglass frames with two-tone beech and walnut wood temples showing the pale-to-dark contrast join"
      ),
      img(
        "/images/products/IMG_20230103_175642.jpg",
        "Side view of clear frames with two-tone beech and walnut temples"
      ),
      img(
        "/images/products/IMG_20230103_175733.jpg",
        "Portrait close-up of the two-tone wood temple showing the beech-to-walnut transition"
      ),
    ],
  },
  {
    slug: "sage-maple-stripe-inlay",
    name: "Sage & Maple Stripe",
    tagline: "Sage green frame with maple temples and a decorative stripe inlay",
    description:
      "Clean maple temples with a thin decorative stripe inlay set near the hinge, mounted on a soft sage green frame front. The inlay is subtle enough that you notice it up close rather than across the room — which is exactly the point.",
    category: "signature-series",
    tone: "light",
    frameColor: "Sage green",
    accents: ["Stripe inlay"],
    tags: ["sage", "green", "maple", "stripe", "inlay"],
    images: [
      img(
        "/images/products/IMG_20230214_143034.jpg",
        "Sage green eyeglasses with maple wood temples and a decorative stripe inlay, photographed on a fence"
      ),
      img(
        "/images/products/IMG_20230214_143010.jpg",
        "Portrait view of sage green frames with maple stripe-inlay temples"
      ),
    ],
  },
  {
    slug: "dark-teal-zebrawood",
    name: "Dark Teal & Zebrawood",
    tagline: "Dark teal frame with zebrawood temples",
    description:
      "Zebrawood is named for a reason: alternating light and dark grain runs straight down each temple in bold, graphic stripes. No inlay needed. Fitted to a dark teal frame front.",
    category: "wood-temples",
    tone: "medium",
    frameColor: "Dark teal",
    accents: [],
    tags: ["teal", "zebrawood", "striped"],
    images: [
      img(
        "/images/products/IMG_20230214_160712.jpg",
        "Dark teal eyeglasses with zebrawood temples showing bold alternating light and dark grain stripes"
      ),
      img(
        "/images/products/IMG_20230214_160640.jpg",
        "Front view of dark teal frames with zebrawood temples"
      ),
      img(
        "/images/products/IMG_20230214_160758.jpg",
        "Angled view of dark teal eyeglasses with zebrawood temples"
      ),
    ],
  },
  {
    slug: "clear-maple-laser-map",
    name: "Clear Maple Laser Map",
    tagline: "Clear frame with maple temples laser-engraved with a topographic map",
    description:
      "The temple surface is laser-engraved with a topographic map pattern — contour lines, elevation markings, grid coordinates. The maple grain reads through the engraving, which shifts from light to dark depending on the angle. Fitted to a clear frame front.",
    category: "signature-series",
    tone: "light",
    frameColor: "Clear",
    accents: ["Laser-engraved topographic map"],
    tags: ["clear", "maple", "laser", "map", "engraved"],
    images: [
      img(
        "/images/products/IMG_20230801_162307.jpg",
        "Clear eyeglasses with maple temples laser-engraved with a detailed topographic map pattern"
      ),
      img(
        "/images/products/IMG_20230801_162335.jpg",
        "Close portrait view of the laser-engraved topographic map detail on the maple temple"
      ),
      img(
        "/images/products/IMG_20230801_162353.jpg",
        "Portrait view of clear frames with laser map engraved maple temples"
      ),
      img(
        "/images/products/IMG_20230801_162353_1.jpg",
        "Alternate portrait view of the topographic map engraving on the maple wood temple"
      ),
    ],
  },
  {
    slug: "gray-striped-rosewood",
    name: "Gray & Striped Rosewood",
    tagline: "Gray frame with naturally striped rosewood temples",
    description:
      "Deep reddish-brown rosewood with a natural stripe running through each temple, mounted on a gray frame front. Rosewood is one of the more dramatic woods to work with — the grain does things you can't plan for.",
    category: "wood-temples",
    tone: "dark",
    frameColor: "Gray",
    accents: [],
    tags: ["gray", "rosewood", "striped"],
    images: [
      img(
        "/images/products/IMG_20230801_162455.jpg",
        "Portrait view of gray eyeglasses with naturally striped rosewood temples"
      ),
      img(
        "/images/products/IMG_20230801_162445.jpg",
        "Close portrait view of the rosewood grain and stripe detail on a gray frame"
      ),
      img(
        "/images/products/IMG_20230801_162545.jpg",
        "Front portrait view of gray frames with deep reddish-brown rosewood temples"
      ),
    ],
  },
  {
    slug: "red-maple-makers-mark",
    name: "Red Maple Maker's Mark",
    tagline: "Red frame with maple temples and hand-engraved maker's mark",
    description:
      "Clean maple temples with a small maker's mark engraved into the outer face, fitted to a red frame front. The engraving is intentionally understated — a quiet signature rather than a logo.",
    category: "signature-series",
    tone: "light",
    frameColor: "Red",
    accents: ["Engraved maker's mark"],
    tags: ["red", "maple", "maker's mark", "engraved"],
    images: [
      img(
        "/images/products/IMG_20231013_125653.jpg",
        "Red eyeglasses with pale maple temples engraved with a small maker's mark, photographed outdoors"
      ),
      img(
        "/images/products/IMG_20231013_125438.jpg",
        "Close portrait view of the maker's mark engraving on the maple temple"
      ),
      img(
        "/images/products/IMG_20231013_125821.jpg",
        "Side view of red frames with engraved maple temples laid on a wood surface"
      ),
      img(
        "/images/products/IMG_20231013_125840.jpg",
        "Angled view of red eyeglasses with maple maker's mark temples"
      ),
      img(
        "/images/products/IMG_20231013_125849.jpg",
        "Top view of red frames with pale maple temples"
      ),
    ],
  },
  {
    slug: "dark-teal-maple-makers-mark",
    name: "Dark Teal Maker's Mark",
    tagline: "Dark teal frame with maple temples and engraved maker's mark",
    description:
      "The same maple maker's mark temple on a dark teal frame front. Clean and simple — the kind of pair that disappears into everyday life.",
    category: "signature-series",
    tone: "light",
    frameColor: "Dark teal",
    accents: ["Engraved maker's mark"],
    tags: ["teal", "maple", "maker's mark", "engraved"],
    images: [
      img(
        "/images/products/IMG_20231013_125734.jpg",
        "Dark teal eyeglasses with maple temples engraved with a maker's mark, photographed outdoors"
      ),
      img(
        "/images/products/IMG_20231013_125755.jpg",
        "Side view of dark teal frames with engraved maple temples"
      ),
    ],
  },
  {
    slug: "charcoal-maple-makers-mark",
    name: "Charcoal Maker's Mark",
    tagline: "Charcoal frame with maple temples and engraved maker's mark",
    description:
      "Dark charcoal frame front with pale maple temples, each engraved with a maker's mark. The light wood against the dark frame makes a clean, graphic contrast.",
    category: "signature-series",
    tone: "light",
    frameColor: "Charcoal",
    accents: ["Engraved maker's mark"],
    tags: ["charcoal", "black", "maple", "maker's mark"],
    images: [
      img(
        "/images/products/IMG_20231013_125918.jpg",
        "Charcoal eyeglasses with pale maple temples engraved with a maker's mark, photographed on a wood surface"
      ),
      img(
        "/images/products/IMG_20231013_125935.jpg",
        "Side view of charcoal frames with engraved maple maker's mark temples"
      ),
      img(
        "/images/products/IMG_20231013_125958.jpg",
        "Portrait close-up of the charcoal frames with maple temples"
      ),
    ],
  },
  {
    slug: "black-patchwork-temple",
    name: "Black Patchwork Temple",
    tagline: "Black frame with temples made from alternating blocks of light and dark wood",
    description:
      "The temples on this pair are built from short blocks of alternating light and dark wood joined end-to-end — a patchwork effect that turns the length of each arm into a rhythm of contrast. No two blocks are the same species, and the sequence is never repeated.",
    category: "signature-series",
    tone: "medium",
    frameColor: "Black",
    accents: ["Alternating patchwork wood blocks"],
    tags: ["black", "patchwork", "contrast", "multi-wood"],
    featured: true,
    images: [
      img(
        "/images/products/IMG_20231115_210008.jpg",
        "Black eyeglasses with patchwork temples made from alternating blocks of light and dark wood"
      ),
      img(
        "/images/products/IMG_20231115_205915.jpg",
        "Front view of black frames with alternating light and dark wood patchwork temples"
      ),
      img(
        "/images/products/IMG_20231115_205952.jpg",
        "Side view showing the patchwork wood block pattern running along the temple"
      ),
      img(
        "/images/products/IMG_20231115_210016.jpg",
        "Angled view of black eyeglasses with patchwork wood temples"
      ),
      img(
        "/images/products/IMG_20231115_210032.jpg",
        "Top view of black frames with alternating-block wood temples"
      ),
      img(
        "/images/products/IMG_20231115_210048.jpg",
        "Close-up of the patchwork joint between light and dark wood blocks on the temple"
      ),
      img(
        "/images/products/IMG_20231115_210119.jpg",
        "Overhead view of black patchwork temple eyeglasses on a wood surface"
      ),
      img(
        "/images/products/IMG_20231115_210147.jpg",
        "Side profile of black eyeglasses with alternating light and dark patchwork temples"
      ),
      img(
        "/images/products/IMG_20231115_210232.jpg",
        "Another view of the black patchwork temple frames"
      ),
      img(
        "/images/products/IMG_20231116_204842.jpg",
        "Portrait close-up of the patchwork temple showing the alternating wood block contrast"
      ),
    ],
  },
];

export const featuredProducts = products.filter((p) => p.featured);

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
