/**
 * Menu content transcribed from Door No. 4's current published menus.
 * Prices are in CI dollars, as printed.
 */
import { DOCS } from "./site";

export type MenuItem = { name: string; price?: string; desc?: string; tags?: string };
export type MenuSection = { title: string; note?: string; items: MenuItem[] };
export type Menu = {
  id: string;
  label: string;
  intro: string;
  sections: MenuSection[];
  footnote?: string;
  pdf: string;
};

const SERVICE_NOTE =
  "All prices in CI dollars. A 15% gratuity will be added to your bill. Please inform your server of any allergies or dietary restrictions.";

export const MENUS: Menu[] = [
  {
    id: "cocktails",
    label: "Cocktails",
    intro:
      "Cocktails inspired by Caribbean hospitality, showcasing quality Caymanian ingredients — approachable, flavourful and made to be enjoyed by everyone.",
    pdf: DOCS.cocktails,
    footnote: SERVICE_NOTE,
    sections: [
      {
        title: "Cocktails",
        items: [
          { name: "BBQ Peach Old Fashioned", price: "16", desc: "bulleit rye whiskey, charred peach, bitters" },
          { name: "Sea Breeze No.4", price: "15", desc: "ketel one vodka, cranberry cordial, aperol soda, grapefruit foam" },
          { name: "Bajan Treacle", price: "16", desc: "doorlys 12yr rum, calvados, cooked pineapple, apple cider vinegar" },
          { name: "Table Martini", price: "15", desc: "belvedere vodka, rice wine vinegar, blanc vermouth, orange bitters, red pickled onion" },
          { name: "No.75", price: "25", desc: "beefeater gin, house oleo, lemon, veuve clicquot champagne" },
          { name: "Strawberry Sbagliato", price: "15", desc: "beefeater gin, strawberry, campari, prosecco" },
          { name: "Rude Cosmo", price: "15", desc: "los vecinos mezcal, amaro nonino, lime, cranberry, raspberry" },
          { name: "Café Manhattan", price: "16", desc: "evan williams bourbon, rittenhouse rye, cynar, coffee" },
          { name: "B.L.T.", price: "16", desc: "g4 blanco tequila, lemongrass tea, clarified blackberry, soda" },
          { name: "Banoffee Coffee", price: "15", desc: "banana irish whiskey, coffee, brown sugar molasses, salted banana cream" },
          { name: "Mudslide Rocher", price: "15", desc: "werther's original infused vodka, rocher gelato, espresso" },
          { name: "Pornstar Sgroppino", price: "15", desc: "absolut vanilla vodka, chinola passion fruit liqueur, crémant sparkling" },
        ],
      },
      {
        title: "Door to the Disco",
        items: [
          { name: "Blue Raspberry Negroni", price: "14", desc: "tanqueray, raspberry eau de vie, blue curaçao, bitter vermouth" },
          { name: "Milano Grasshopper", price: "16", desc: "fernet branca, crème de cacao blanc, rémy martin vsop, mint gelato" },
          { name: "Lemon Drop Sour", price: "14", desc: "ketel one, lemon curd, triple sec" },
          { name: "Hard Appletini", price: "14", desc: "cocchi americano, calvados, ketel one, apple" },
        ],
      },
      {
        title: "Non-Alcoholic",
        items: [
          { name: "Earl's Peach Tea", price: "10", desc: "earl grey, marigold, burnt peach" },
          { name: "Cherry Coke Float", price: "12", desc: "cherry cordial, coca-cola, vanilla gelato" },
          { name: "Designated Driver", price: "14", desc: "mionetto aperitivo, grüvi dry secco, soda" },
          { name: "Super Citrus Lemonade", price: "9", desc: "house citrus oleo, lemon, still or sparkling" },
        ],
      },
    ],
  },
  {
    id: "kitchen",
    label: "From the Kitchen",
    intro:
      "Elevated bar favourites and shareable plates, made with the finest local ingredients — perfect for casual evenings, celebrations, or anything in between.",
    pdf: DOCS.dinner,
    footnote: `Allergens: g gluten · sf seafood · d dairy · n nuts · sy soy · * can be removed · v vegetarian · vg vegan. Kitchen closes at 11pm. ${SERVICE_NOTE}`,
    sections: [
      {
        title: "To Share",
        items: [
          { name: "Beef Arancini", price: "15", desc: "slow-braised brisket, mushroom pan jus emulsion, parmesan", tags: "g, d" },
          { name: "Tuna Tartare", price: "20", desc: "marinated tuna, fennel & poblano gazpacho, pickled shallots, fried capers", tags: "sf, sy" },
          { name: "Pulpo a la Plancha", price: "20", desc: "citrus braised octopus, mint-pea purée, burnt lemon aioli, guava gel, pickled enoki mushroom", tags: "sf" },
          { name: "Titoté Bisque Ravioli", price: "16", desc: "shrimp & toasted coconut ravioli, creamy tomato-basil sauce, herb oil, parmesan", tags: "g, sf" },
          { name: "Salmon Crudo", price: "18", desc: "cured salmon, pickled onion & cucumber, orange-lime-basil cure, beetroot dust", tags: "sf" },
          { name: "Quinoa Salad", price: "12", desc: "toasted pumpkin seeds, orange, basil balsamic vinaigrette, pickled radish & cucumber, grape infused tomatoes", tags: "vg" },
          { name: "Miso Pumpkin", price: "14", desc: "smoked miso glazed pumpkin, corn hummus, pumpkin seed dukkha, pickled starfruit", tags: "vg" },
          { name: "Cayman Beef Bao", price: "18", desc: "cayman style braised beef, pickled daikon, scotch bonnet aioli, scallion", tags: "g, sy" },
        ],
      },
      {
        title: "Something Bigger",
        items: [
          { name: "Chicken '69'", price: "18", desc: "chickpea flour fried chicken, butter chicken sauce, sautéed greens · side rice +5", tags: "d" },
          { name: "6oz Picanha", price: "24", desc: "chimichurri aioli, compound butter", tags: "d" },
          { name: "Creole Meatballs", price: "16", desc: "herb ground beef, caramelized onion, celeriac mash, cherry tomato relish", tags: "d" },
          { name: "Bourbon-Agave Salmon", price: "22", desc: "smoked cauliflower purée, preserved shallots, sautéed beans, toasted almond", tags: "sf" },
          { name: "Udon Bowl", price: "22", desc: "housemade udon, roasted pork belly, bone broth, nori, scallion, peanuts, fried egg", tags: "g*, sy, n" },
          { name: "Burmese Khao Suey", price: "16", desc: "rice noodles, curried coconut broth, spring & crispy onions, cherry tomatoes, pepper flakes, cilantro, lime", tags: "vg" },
        ],
      },
      {
        title: "On the Side",
        items: [
          { name: "Triple Cooked Chips", price: "8" },
          { name: "Garlic Parmesan Fries", price: "8", desc: "jerk aioli", tags: "d*, v" },
          { name: "Bean Almondine", price: "10", desc: "toasted almonds", tags: "n, v" },
          { name: "Sautéed Broccolini", price: "10", desc: "hot honey", tags: "v" },
          { name: "Roast Vegetables", price: "8", desc: "balsamic glaze", tags: "vg" },
          { name: "Caesar Salad", price: "10", desc: "romaine, croutons, parmesan, housemade caesar dressing", tags: "g*" },
          { name: "Mac & Cheese", price: "12", desc: "four cheese sauce, truffle oil, mushroom powder", tags: "g, d, v" },
        ],
      },
      {
        title: "Something Sweet",
        items: [
          { name: "Sticky Toffee Pudding", price: "12", desc: "date & rum pudding, salted caramel, vanilla gelato", tags: "d" },
          { name: "Cassava Cake", price: "12", desc: "cassava coconut sponge, coconut caramel, plantain crumble, vanilla gelato", tags: "d*" },
          { name: "Tres Leches", price: "12", desc: "rose vanilla sponge dunked in dulce de leche, whipped sorrel cream", tags: "g, d" },
        ],
      },
    ],
  },
  {
    id: "happy-hour",
    label: "Happy Hour",
    intro: "2-4-1 selected cocktails, Sunday to Thursday, 4pm – 6pm and 10pm – close.",
    pdf: DOCS.happyHour,
    footnote: SERVICE_NOTE,
    sections: [
      {
        title: "Happy Hour · 2-4-1",
        note: "4 – 6pm & 10pm – close",
        items: [
          { name: "Negroni", price: "16", desc: "gin or los vecinos mezcal, campari, sweet vermouth" },
          { name: "Tommy's Marg", price: "16", desc: "olmeca altos plata tequila, lime, agave" },
          { name: "Espresso Martini", price: "16", desc: "tito's vodka, kahlua, espresso" },
          { name: "Army & Navy", price: "16", desc: "bombay sapphire gin, lemon, orgeat" },
          { name: "Floradora", price: "16", desc: "bombay sapphire gin, ginger, raspberry, lime, soda" },
          { name: "Dry Daiquiri", price: "16", desc: "planteray 3 star rum, passion fruit, lime, bitter italian liqueur" },
          { name: "East 8 Hold Up", price: "16", desc: "tito's vodka, italian bitter, passion fruit liqueur, lime, pineapple" },
          { name: "Old Fashioned", price: "16", desc: "maker's mark bourbon, angostura bitters, demerara" },
          { name: "Peach Bellini", price: "16", desc: "peach liqueur, peach gelato, prosecco" },
          { name: "Moscow Mule", price: "16", desc: "tito's vodka, ginger, lime, bitters, soda" },
        ],
      },
    ],
  },
  {
    id: "sunday-roast",
    label: "Sunday Roast",
    intro:
      "Served every Sunday from 11am to 3pm. Choose two or three courses — vegetarian options available.",
    pdf: DOCS.sundayRoast,
    footnote: `3 courses 45 · 2 courses 35 · kids 20. ${SERVICE_NOTE}`,
    sections: [
      {
        title: "Appetizer",
        items: [
          { name: "Roasted Pumpkin Soup", desc: "coconut milk, warm spices, toasted baguette" },
          { name: "Chicken Liver Pâté", desc: "garlic butter, toasted baguette" },
          { name: "Pork Croquetas", desc: "achiote braised pork, mornay, cheese blend, amarillo crema" },
        ],
      },
      {
        title: "Entrées",
        note: "served with fat roast potatoes, cheesy cauliflower & roasted vegetables",
        items: [
          { name: "Roast Beef", desc: "yorkshire pudding, horseradish cream, gravy" },
          { name: "Crackling Pork", desc: "yorkshire pudding, apple sauce, gravy" },
          { name: "Pan Roasted Chicken", desc: "yorkshire pudding, chimichurri, gravy" },
          { name: "Vegetarian Nut Roast", desc: "lentils, almonds, mirepoix, roasted tomato pepper sauce" },
        ],
      },
      {
        title: "Dessert",
        items: [{ name: "Sticky Toffee", desc: "banana bread, caramel, vanilla gelato" }],
      },
      {
        title: "Sunday Drinks",
        items: [
          { name: "Modelo, Caybrew", price: "5" },
          { name: "Forever Summer Rosé · Crémant Sparkling · Crémant Rosé Sparkling", price: "7" },
          { name: "Tito's Bloody Mary · Bloody Caesar", price: "9" },
          { name: "Mimosa & Bellini", price: "9" },
        ],
      },
    ],
  },
  {
    id: "champagne-saturdays",
    label: "Champagne Saturdays",
    intro: "Every Saturday from 4pm, enjoy 25% off a selection of champagnes from our collection.",
    pdf: DOCS.champagne,
    footnote: "See the full Champagne Saturdays menu for current glass and bottle prices.",
    sections: [
      {
        title: "Champagnes",
        note: "25% off all night",
        items: [
          { name: "Veuve Clicquot Brut", desc: "by the glass or bottle" },
          { name: "Veuve Clicquot Rosé Brut", desc: "by the glass or bottle" },
          { name: "Ruinart Blanc de Blancs", desc: "by the glass or bottle" },
          { name: "Ruinart Rosé", desc: "by the glass or bottle" },
          { name: "Dom Pérignon 2013", desc: "by the bottle" },
        ],
      },
    ],
  },
  {
    id: "kids",
    label: "Kids",
    intro: "Little guests are always welcome.",
    pdf: DOCS.kids,
    footnote: `Kitchen closes at 11pm. ${SERVICE_NOTE}`,
    sections: [
      {
        title: "Kid's Menu",
        items: [
          { name: "Grilled Cheese", price: "6 / 12", desc: "small or large · fontina, provolone, asiago · with or without bacon jam" },
          { name: "Mac & Cheese", price: "10", desc: "four cheese sauce · add truffle 2" },
          { name: "Cassava Fries", price: "7", desc: "mint chutney", tags: "gf" },
          { name: "Chicken Bites", price: "10", desc: "chickpea flour fried chicken", tags: "gf" },
          { name: "Fries", price: "8", desc: "togarashi spice upon request", tags: "gf" },
          { name: "Cheeseburger Sliders", price: "14", desc: "two beef sliders, swiss cheese" },
          { name: "Roast Vegetables", price: "8", desc: "charred broccolini, zucchini, carrots", tags: "vegan" },
          { name: "Tagliatelle", price: "12", desc: "homemade pasta, tomato sauce or butter sauce" },
          { name: "Selection of Gelato", price: "5", desc: "per scoop" },
        ],
      },
    ],
  },
];

export const EXTRA_DOWNLOADS = [
  { label: "Wine, Spirits & Full Drinks List", href: DOCS.drinks },
  { label: "Restaurant Month Menu (seasonal)", href: DOCS.restaurantMonth },
] as const;

/** Signature highlights drawn from the current cocktail list */
export const SIGNATURES = ["BBQ Peach Old Fashioned", "Sea Breeze No.4", "Bajan Treacle", "Table Martini", "No.75", "Rude Cosmo"]
  .map((name) => MENUS[0]?.sections[0]?.items.find((i) => i.name === name))
  .filter((i): i is MenuItem => Boolean(i));
