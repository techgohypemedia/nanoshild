import type { SitePageSlug } from "./site-pages";

type PageDetails = {
  feature: { eyebrow: string; title: string; text: string; image: string; alt: string; points: string[] };
  processTitle: string;
  steps: [string, string][];
  faqs: [string, string][];
};

export const pageDetails: Record<SitePageSlug, PageDetails> = {
  "about-us": {
    feature: {
      eyebrow: "Protect the natural stone you use most", title: "Made for the surfaces that bring your home together.",
      text: "NanoShield HD is a clear marble protection film that helps protect natural stone from stains, acid etching and everyday surface scratches. Your stone's natural detail remains visible beneath the clear film.",
      image: "/marble-kitchen-island.jpg", alt: "Natural marble kitchen island",
      points: ["Kitchen benchtops and islands", "Home bars and bathroom vanity tops", "Dining tables and other natural stone furniture"],
    },
    processTitle: "How we look after your stone.",
    steps: [
      ["Assess the stone", "We look at its condition, finish and any existing marks before recommending the work."],
      ["Prepare the surface", "If your stone needs cleaning, polishing or restoration first, we will complete this for you prior to installation."],
      ["Install the film", "Our team installs NanoShield HD in a honed or polished finish to suit the look of your surface."],
      ["Enjoy and care", "Every installation includes our Crystal Clear Film Cleaner and an approved soft microfibre cloth, along with aftercare instructions."],
    ],
    faqs: [
      ["Where do you install NanoShield HD?", "We install NanoShield HD in Melbourne, Sydney and Brisbane. Contact the team to discuss your project and location."],
      ["Which types of stone can be protected?", "NanoShield HD is suitable for marble, travertine, quartzite, granite and other suitable natural stone."],
      ["Is NanoShield HD the same as a car protection film?", "No. Car films use adhesives developed for vehicle paintwork. NanoShield HD is developed specifically for stone, with an adhesive system designed for secure protection and professional removal when replacement is needed."],
      ["Can you restore my stone before installing the film?", "Yes. We assess existing damage first. If cleaning, polishing or restoration is needed, you can discuss that with the same team before installation."],
    ],
  },
  "our-showroom": {
    feature: {
      eyebrow: "Make your visit useful", title: "Bring your ideas. Leave with a clearer plan.",
      text: "Whether you are choosing marble for a new kitchen or protecting a surface you already own, a consultation lets you connect what you see in a demonstration to the details of your own project.",
      image: "/marble-living.png", alt: "Interior inspiration with natural stone finishes",
      points: ["Photos or drawings of your space", "Approximate dimensions and stone details", "Questions about finish, daily use and care"],
    },
    processTitle: "Your consultation, step by step.",
    steps: [
      ["Tell us about your project", "Share whether your stone is already installed or part of a planned renovation, along with your location and preferred timing."],
      ["Arrange the details", "Contact the team to confirm available demonstration options, the location and appointment time before travelling."],
      ["Explore the finish", "Look at the surface from different angles and discuss appearance, feel and how the protective system works."],
      ["Discuss your next step", "Review the surfaces you want to protect and the information needed for a tailored assessment or quote."],
    ],
    faqs: [
      ["How do I arrange a demonstration?", "Use the consultation button to share your details and ask about a demonstration. Confirm appointment availability and the visit location with the team before making travel plans."],
      ["Should I bring a stone sample?", "If you have a sample or specification, mention it when arranging your consultation. Photos of the installed surface and its edges are also useful."],
      ["Can my designer or architect join the discussion?", "Include them in your appointment request so the conversation can cover design intent, stone specifications and the installation details of your project."],
      ["Can I enquire before my kitchen is installed?", "Yes. Share your plans, proposed stone and approximate dimensions to start a discussion. The team can explain which details will need to be confirmed closer to installation."],
    ],
  },
  pricing: {
    feature: {
      eyebrow: "Understand your quote", title: "The details make the difference.",
      text: "The starting rate is a useful planning reference. Your final quote needs to reflect the actual surfaces, their condition and the installation scope, so a few clear photos and measurements are a helpful place to start.",
      image: "/contact-room.jpg", alt: "Interior with carefully detailed natural stone surfaces",
      points: ["Dimensions and number of separate surfaces", "Edge profiles, joins and sink or hob cut-outs", "Existing condition, project location and access"],
    },
    processTitle: "From first enquiry to a clear price.",
    steps: [
      ["Measure each surface", "Measure the length and width of each rectangular section in metres. Note islands, benchtops and separate tables individually."],
      ["Share the details", "Send photos, your stone type if known and the project location. Include any damage or unusual edge details."],
      ["Review your quote", "Confirm the surfaces included, any preparation, installation scope and the final total with the team."],
      ["Agree the timing", "Once you are comfortable with the scope and price, discuss installation availability and how to prepare your space."],
    ],
    faqs: [
      ["Is $300 per square metre a fixed price?", "It is the advertised starting rate for fully installed protection. Your final price is confirmed through a quote tailored to your surfaces and installation requirements."],
      ["How do I calculate my approximate surface area?", "For a rectangular surface, multiply length by width in metres. A 2 m by 1 m surface is 2 m². Add separate sections together and let the team confirm the final measurements."],
      ["What if I don’t know which stone I have?", "Send photographs and any information from your builder, supplier or designer. Tell the team that the stone type is unconfirmed so they can advise on assessment."],
      ["Should I deduct sinks and cooktop openings?", "Send the overall dimensions and clearly identify the cut-outs. Let the team confirm how the finished layout is measured and priced."],
      ["Do you offer a discount for larger installations?", "Yes. We offer lower rates for larger installations. Include all the surfaces you would like protected so we can confirm the rate for your project."],
    ],
  },
};
