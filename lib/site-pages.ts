export const sitePages = {
  technology: {
    label: "Technology", title: "Invisible protection.\nA visible difference.",
    description: "Discover the physical barrier that keeps everyday spills, acids and wear away from your natural stone.",
    image: "/marble-kitchen-island.jpg", imageAlt: "Natural marble kitchen island",
    eyebrow: "The science of surface protection", heading: "Protection that sits above the stone.",
    intro: "Unlike a penetrating sealer, NanoShield HD creates a clear separation between your marble and everyday life. The character of your stone stays in view, while the protective film takes the wear.",
    details: [
      ["Optically clear", "An extremely thin, transparent film lets the natural colour and veining of your stone remain the focus."],
      ["A physical barrier", "Spilt food, drinks and acidic ingredients meet the protective surface before they reach your marble."],
      ["Made to be replaced", "A specialised primer supports adhesion during use and clean removal when the film needs replacing."],
    ],
    cta: "See the technology in action", next: "protective-film",
  },
  "protective-film": {
    label: "Protective Film", title: "Your marble.\nReady for real life.",
    description: "A clear protective film for the surfaces you use every day. Enjoy the stone you love with less worry about what lands on it.",
    image: "/marble-family-freedom.jpg", imageAlt: "Marble surfaces in a welcoming home",
    eyebrow: "Made for everyday living", heading: "Keep the beauty. Enjoy the surface.",
    intro: "From a morning coffee to a shared family meal, natural stone should be part of your home. NanoShield HD protects against staining, acid etching and everyday wear without hiding the marble beneath.",
    details: [
      ["Kitchen benchtops", "Protect the busiest surface in your home from everyday food and drink spills."],
      ["Tables and vanities", "Bring the same considered protection to the stone surfaces throughout your space. Ask our team about suitability."],
      ["Professionally installed", "Our team assesses your stone and its edges, seams and cut-outs to plan the installation around your surface."],
    ],
    cta: "Discuss your surfaces", next: "our-showroom",
  },
  "protective-wrap": {
    label: "Protective Film", title: "Your marble.\nReady for real life.",
    description: "A clear protective film for the surfaces you use every day. Enjoy the stone you love with less worry about what lands on it.",
    image: "/marble-family-freedom.jpg", imageAlt: "Marble surfaces in a welcoming home",
    eyebrow: "Made for everyday living", heading: "Keep the beauty. Enjoy the surface.",
    intro: "From a morning coffee to a shared family meal, natural stone should be part of your home. NanoShield HD protects against staining, acid etching and everyday wear without hiding the marble beneath.",
    details: [
      ["Kitchen benchtops", "Protect the busiest surface in your home from everyday food and drink spills."],
      ["Tables and vanities", "Bring the same considered protection to the stone surfaces throughout your space. Ask our team about suitability."],
      ["Professionally installed", "Our team assesses your stone and its edges, seams and cut-outs to plan the installation around your surface."],
    ],
    cta: "Discuss your surfaces", next: "our-showroom",
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
    cta: "Arrange a consultation & demo", next: "guarantee",
  },
  guarantee: {
    label: "10-Year Guarantee", title: "Beautiful today.\nProtected for years.",
    description: "Long-term confidence for the stone you have invested in, with protection designed to last up to 10 years in residential settings.",
    image: "/marble-peace.png", imageAlt: "Elegant marble interior",
    eyebrow: "Confidence in your surface", heading: "Understand your protection from day one.",
    intro: "The NanoShield HD website describes protection against cracking, peeling, bubbling, staining, etching and discolouration for up to 10 years. Ask the team for the written guarantee applicable to your installation.",
    details: [
      ["Your installation", "Confirm the guarantee period and coverage for your stone, intended use and installation before proceeding."],
      ["Everyday care", "Follow the care guidance provided by your installer. Reasonable care is still recommended with extremely hot cookware."],
      ["Support over time", "If you notice a change in your film, contact the team to discuss assessment, care or replacement options."],
    ],
    cta: "Ask about the guarantee", next: "pricing",
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
    cta: "Request a custom quote", next: "technology",
  },
} as const;

export type SitePageSlug = keyof typeof sitePages;
