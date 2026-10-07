export const sitePages = {
  "about-us": {
    label: "About Us", title: "The team who\nknows natural stone.",
    description: "For 10 years, our Melbourne team has cleaned, honed, polished and sealed marble and other natural stone. That experience led us to develop NanoShield HD.",
    image: "/marble-lifestyle-island.jpg", imageAlt: "Family gathered around a natural marble kitchen island",
    eyebrow: "About NanoShield HD", heading: "Protection developed from stone care experience.",
    intro: "We understand the care these surfaces need. We have also seen how frustrating it can be for homeowners to restore a beautiful benchtop, then worry about the next spill. NanoShield HD gives you greater confidence to cook, entertain and enjoy the surfaces you have invested in.",
    details: [
      ["Your stone comes first", "We look at its condition, finish and any existing marks before recommending the work."],
      ["One team, start to finish", "If your stone needs cleaning, polishing or restoration first, you can discuss that with the same team."],
      ["Developed for stone", "An adhesive system designed for secure protection and professional removal when replacement is needed."],
    ],
    cta: "Request a Consultation", next: "our-showroom",
  },
  "our-showroom": {
    label: "Our Showroom", title: "See the stone.\nFeel the difference.",
    description: "Get a closer look at NanoShield HD and explore how protected marble fits into your home.",
    image: "/contact-room.jpg", imageAlt: "Refined interior with natural stone finishes",
    eyebrow: "Experience NanoShield HD", heading: "Some things are better seen in person.",
    intro: "Explore the finish, ask questions about your own stone and see surface protection in action. Arrange a consultation with the team to discuss a demonstration and the available visit options.",
    details: [
      ["Look closely", "Explore how a clear protective surface preserves the colour and character of natural marble."],
      ["See a demonstration", "Discover how the barrier separates your stone from everyday spills and acidic ingredients."],
      ["Bring your project", "Share photos, approximate measurements and your stone type so the team can advise on the next steps."],
    ],
    cta: "Arrange a consultation & demo", next: "pricing",
  },
  pricing: {
    label: "Pricing", title: "Exceptional stone.\nConsidered protection.",
    description: "Professional surface protection, fully installed from $300 per square metre. Get a quote tailored to your stone and your space.",
    image: "/marble-living.png", imageAlt: "Living space with luxurious natural stone",
    eyebrow: "A quote for your project", heading: "From $300 / m². Fully installed.",
    intro: "Every surface is different. Share a few details about your project so the team can confirm suitability, installation requirements and the final price before you book.",
    details: [
      ["Surface area", "Send approximate dimensions and the number of surfaces you would like to protect."],
      ["Stone and condition", "Tell us your stone type and share photos of its current finish, including any existing damage."],
      ["Details and location", "Include edges, joins, sinks and cut-outs, along with your project location, for a more informed quote."],
    ],
    cta: "Request a custom quote", next: "about-us",
  },
} as const;

export type SitePageSlug = keyof typeof sitePages;
