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
    title: "Daily food comsumption",
    description:
      "Daily food consumption focuses on minimizing waste by planning meals carefully, using resources efficiently, and consuming leftovers or near-expiry foods.",
    link: "https://stripe.com",
  },
  {
    title: "Summary Report",
    description:
      "A summary report based on a food wastage reduction system provides an overview of efforts and outcomes related to reducing food waste within a given timeframe",
    link: "https://netflix.com",
  },
  {
    title: "Threshold Limit set",
    description:
      "The threshold limit in a food wastage reduction system refers to the maximum allowable amount of food waste or inefficiency before corrective actions are required.",
    link: "https://google.com",
  },
  {
    title: "Partner with local NGOs/Charities.",
    description:
      "By collaborating with these organizations, food that would otherwise go to waste can be redirected to individuals and communities in need. This partnership serves as a dual solution—reducing food waste while addressing hunger and food insecurity.",
    link: "https://meta.com",
  },
  {
    title: "Expiry Tracking and Recipe Suggestions",
    description:
      "Expiry Tracking and Recipe Suggestions for food wastage reduction can play a crucial role in ensuring that food doesn't go to waste. Implementing a tracking system alongside providing recipe suggestions helps consumers, businesses, and organizations optimize food usage before it expires, reducing waste and maximizing the value of their ingredients.",
    link: "https://amazon.com",
  },
//   {
//     title: "Microsoft",
//     description:
//       "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
//     link: "https://microsoft.com",
//   },
];
