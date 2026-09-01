/**
 * Meta Pixel and GA4 ids.
 *
 * Both are public identifiers, readable in the page source of every site that
 * uses them, so they live in the repo rather than in build secrets. An empty
 * string disables that tag, so the site never ships a half-configured script.
 *
 * Meta Pixel: Events Manager > Datasets, a 15-16 digit number.
 * GA4: Admin > Data streams, looks like G-XXXXXXXXXX.
 */
export const META_PIXEL_ID = "2599212500548753";
export const GA4_ID = "";
