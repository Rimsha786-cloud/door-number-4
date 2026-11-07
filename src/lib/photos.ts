import manifest from "@/assets/photos.json";

export type Photo = { sm: string; lg: string; w: number; h: number };
export type PhotoKey = keyof typeof manifest;

/** Descriptive alt text for every Door No. 4 photograph. */
export const ALT: Record<PhotoKey, string> = {
  "terrace-evening": "A server taking orders from guests on the lit evening terrace at The Grove",
  "grove-night": "The Grove at dusk, with palms and garden lighting",
  "pink-fizz": "A pale pink frothy cocktail topped with a bougainvillea flower on a marble table",
  "dinner-table": "Braised beef with roasted carrots on a set table with emerald napkins",
  "bar-interior": "A bartender mixing drinks at the long bar beneath the brick back bar",
  "red-cocktail": "A ruby-red cocktail over a large ice cube on a printed menu card",
  "golden-cocktail": "A golden cocktail with a leaf garnish on a marble table",
  "bartender-mixing": "A smiling bartender in front of the brick back bar",
  "table-cocktails": "Tiki-style cocktails with orchid garnish and a small plate on a wooden bar",
  "bartender-pour": "A smiling bartender pouring gin into a jigger at the bar",
  "velvet-stools": "Emerald velvet bar stools in a row beside candlelight",
  "guests-at-bar": "Two men smiling for a photo in front of the lit back bar",
  "punch-bowl": "A ladle lifting punch from a bowl garnished with orchids and citrus",
  "green-highball": "A green-leaf highball with ice on a stone table",
  "bar-lights": "Globe pendant lights above a smiling guest at the bar",
  "team-toast": "Five bar team members raising small cocktails behind the bar",
  "dining-room": "The emerald dining room with banquette seating, marble tables and brass globe lights",
  "bartender-garnish": "A bartender in a daisy-print shirt setting down glasses at the bar",
  "tropical-cocktail": "A tiki-glass cocktail with an orchid garnish on a green menu card",
  "team-smiles": "Two bar team members smiling at the bar",
  "guests-stools": "A couple seated on green velvet stools at the bar",
  "tiki-row": "A row of tiki-glass cocktails topped with crushed ice",
  "bartenders-guests": "Two bartenders in conversation at the bar",
  "back-bar": "A bartender speaking into a microphone in front of the lit back bar",
  "server-tray": "A server carrying glasses of whisky on a tray through the dining room",
  "plated-dish": "Braised beef with roasted carrots in a rich sauce on a white plate",
  "cocktail-trio": "Three cocktails on a polished wooden bar",
  "terrace-busy": "Guests dining at tables on the busy evening terrace",
  "terrace-dining": "A couple with a baby in a pram at a terrace table",
  "friends-cocktails": "Two friends smiling with cocktails in hand",
  "server-champagne": "A smiling server holding a tray with a stemmed glass",
  "short-rib": "Braised short rib topped with crispy fried shreds over creamy pur\u00e9e",
  "red-cocktails-raised": "Guests holding red cocktails with spiced rims",
  "live-music": "A musician performing live, in black and white",
  "guest-bartenders": "Three bartenders shaking cocktails behind the bar",
  "bartender-shake": "A bartender in a bow tie stirring a drink behind the bar",
  "rose-glasses": "Rows of small glass carafes filled with ros\u00e9 and amber drinks",
  "outdoor-event": "Guests gathered at an evening event beside the wooden cocktail cart",
  "cocktail-cart": "Two bartenders serving from a mobile cocktail cart at a private party",
  "bottled-cocktails": "A mobile cocktail cart stocked with bottles on a sunny terrace",
};

export function getPhoto(key: PhotoKey): Photo {
  return (manifest as Record<PhotoKey, Photo>)[key];
}
