import { HoverEffect } from "../ui/card-hover-effect";

export function Card() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Real-Time leftover redistribution",
    description:
      "A platform that notifies residents and local charitties of availabale leftovers, promoting redistribution instead of waste.",
    link: "https://stripe.com",
  },
  {
    title: "Customised portion choices",
    description:
      "A Hostel will take the information regarding the choices of the menu so that they can get the information in prior and waste is reduced",
    link: "https://netflix.com",
  },
  {
    title: "Threshold Limit set",
    description:
      "The threshold limit in a food wastage reduction system refers to the maximum allowable amount of food waste or inefficiency before corrective actions are required.",
    link: "https://google.com",
  },
  {
    title: "Daily leftovere menu",
    description:
      "Highlight a daily leftovers special section on the menu, where repurposed food itmes from recent meals ae offered at discounted rates.",
    link: "https://meta.com",
  },
  {
    title: "Recipe Suggestion with the leftover food",
    description:
      "Some new recipes can be prepared with the help of the leftover food and can be presented in different style for being creative and trying out smething new.",
    link: "https://amazon.com",
  },
  {
    title: "Real time reports or summary",
    description:
      "Hostel or hotel owners can check there records or summary throught the platform and get the real time update.",
    link: "https://amazon.com",
  },
  // {
  //   title: "Inventory Management",
  //   description:
  //     "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
  //   link: "https://microsoft.com",
  // },
];
