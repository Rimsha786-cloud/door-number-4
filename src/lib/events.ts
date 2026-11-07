import type { PhotoKey } from "./photos";

export type EventItem = {
  id: string;
  title: string;
  when: string;
  summary: string;
  body: string[];
  photo?: PhotoKey;
  menuId?: string;
};

/** Weekly experiences, as published on doorno4.com/whatson */
export const WEEKLY: EventItem[] = [
  {
    id: "happy-hour",
    title: "Happy Hour",
    when: "Sunday – Thursday · 4pm – 6pm & 10pm – close",
    summary: "2-4-1 selected cocktails including Old Fashioneds, Tommy's Margaritas and Espresso Martinis.",
    body: ["2-4-1 selected cocktails including Old Fashioneds, Tommy's Margaritas and Espresso Martinis."],
    photo: "friends-cocktails",
    menuId: "happy-hour",
  },
  {
    id: "champagne-saturdays",
    title: "Champagne Saturdays",
    when: "Every Saturday · from 4pm",
    summary: "Who doesn't love champagne? Enjoy 25% off a selection of champagnes from our collection.",
    body: [
      "Who doesn't love champagne?",
      "Every Saturday from 4pm, enjoy 25% off a selection of champagnes from our collection.",
    ],
    photo: "server-champagne",
    menuId: "champagne-saturdays",
  },
  {
    id: "sunday-roast",
    title: "Sunday Roast",
    when: "Every Sunday · 11am – 3pm",
    summary: "One of the best Sunday Roasts on the island — two or three courses, with vegetarian options.",
    body: [
      "Join us every Sunday for one of the best Sunday Roasts on the island. Served from 11am to 3pm, enjoy your choice of two or three courses from our extensive menu, with vegetarian options also available.",
      "Perfect for anyone craving a little taste of Mum's home cooking.",
    ],
    photo: "short-rib",
    menuId: "sunday-roast",
  },
];

/** Annual & seasonal events */
export const SEASONAL: EventItem[] = [
  {
    id: "christmas-miracle",
    title: "Christmas Miracle Pop Up",
    when: "Every year from mid-November",
    summary:
      "Door No. 4 transforms into a festive Miracle pop-up — the ultimate destination for Christmas lovers.",
    body: [
      "Every year from mid-November, Door No. 4 transforms into a festive Miracle pop-up — the ultimate destination for Christmas lovers. Expect delicious holiday cocktails, iconic seasonal souvenirs, and over-the-top decorations guaranteed to get you into the festive spirit.",
      "Whether you're planning a work night out or a festive celebration with friends, Door No. 4 is the perfect place for your Christmas party.",
    ],
  },
  {
    id: "cayman-loves",
    title: "Cayman Loves…",
    when: "Every May",
    summary:
      "Each May we spotlight an iconic U.S. city, bringing in bartenders from its most celebrated bars for a week of events.",
    body: [
      "Each May, we spotlight a different iconic U.S. city, bringing in bartenders from some of its most celebrated bars for a week of unforgettable events and collaborations.",
      "In 2026, we're thrilled to welcome an incredible lineup of bartenders from California, representing renowned bars including 52 Remedies, Thunderbolt, and Tommy's Mexican Restaurant.",
    ],
    photo: "guest-bartenders",
  },
];
