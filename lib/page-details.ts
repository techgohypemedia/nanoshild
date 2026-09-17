import type { SitePageSlug } from "./site-pages";

type PageDetails = {
  feature: { eyebrow: string; title: string; text: string; image: string; alt: string; points: string[] };
  processTitle: string;
  steps: [string, string][];
  faqs: [string, string][];
};

export const pageDetails: Record<SitePageSlug, PageDetails> = {
  technology: {
    feature: {
      eyebrow: "Designed around natural stone", title: "What happens above the surface matters.",
      text: "Marble is chosen for its natural variation, delicate veining and depth. The protective system is designed to keep those qualities visible while separating the stone from the things that can damage it during daily use.",
      image: "/marble-calacatta-hd.jpg", alt: "Close view of natural marble veining",
      points: ["A clear film over the surface", "A primer that supports adhesion and eventual removal", "The original stone beneath the protection"],
    },
    processTitle: "From assessment to a protected surface.",
    steps: [
      ["Assess the stone", "Identify the stone, finish and existing condition. The team checks the layout, edges and cut-outs before recommending an installation approach."],
      ["Prepare the surface", "Discuss any existing marks or damage and the preparation needed. Surface protection and restoration serve different purposes."],
      ["Apply the system", "The primer and protective film form a separation layer above the marble, with attention to the details of your surface."],
      ["Review and care", "Review the finished installation with the team and get guidance on daily use, care and future film replacement."],
    ],
    faqs: [
      ["How is it different from a stone sealer?", "A sealer works within the stone to slow absorption. NanoShield HD is a physical film above the stone that separates the surface from direct contact with spills and acidic ingredients."],
      ["Will the film hide my marble’s veining?", "The film is optically clear and extremely thin, so the stone’s colour and veining remain visible. A demonstration is a good opportunity to inspect the finish closely."],
      ["Can the protective film be removed?", "The system uses a specialised primer designed to support adhesion during use and clean removal when replacement is needed. Ask the team to assess removal or replacement rather than attempting it yourself."],
      ["Does protection mean I can stop caring for the surface?", "Continue to follow the installer’s care guidance. Protection is designed for everyday use; reasonable care with extremely hot cookware remains important."],
    ],
  },
  "protective-wrap": {
    feature: {
      eyebrow: "Spaces that get used", title: "For everything that happens around the kitchen.",
      text: "Coffee on the island. Food preparation at the bench. Friends around the table. A protective layer helps make natural stone a practical part of the spaces you spend the most time in.",
      image: "/marble-kitchen-island.jpg", alt: "Marble kitchen island ready for everyday use",
      points: ["Protection against food and drink staining", "A barrier against etching from acidic ingredients", "A replaceable surface that takes everyday wear"],
    },
    processTitle: "Plan your installation with confidence.",
    steps: [
      ["Show us your space", "Share clear photographs of the full surface, along with close-ups of corners, edges, joins and existing marks."],
      ["Confirm suitability", "Discuss the stone type, finish and intended use. Include any surfaces beyond the kitchen so they can be assessed individually."],
      ["Plan the installation", "Agree the scope and timing with the team. Ask about access, preparation and when your particular surface will be ready to use."],
      ["Settle into daily use", "Keep the supplied care instructions handy and contact the team if the film needs assessment or replacement over time."],
    ],
    faqs: [
      ["Can it be installed on stone I already own?", "Share the type and condition of your existing stone with the team. They can assess suitability and discuss whether any preparation or restoration is needed before protection."],
      ["Does it repair existing stains or etching?", "Protective film is intended to separate the stone from future contact. Existing stains, etching or other damage should be discussed during assessment so any preparation can be planned."],
      ["How long does installation take?", "The site’s installation guidance describes a typical installation within a day, with the benchtop usable the following morning. Confirm the timing for your project with the installer."],
      ["Is it suitable for hospitality or commercial spaces?", "The system is also intended for spaces such as cafés, bars and hotels. Discuss traffic, cleaning routines and intended use so the team can confirm suitability and the applicable terms."],
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
  guarantee: {
    feature: {
      eyebrow: "Looking after your investment", title: "Know your surface. Keep your records.",
      text: "Your installation details and written guarantee give you a useful reference throughout the life of the protective film. Keep them together with the care guidance so you know where to turn if something changes.",
      image: "/marble-family-freedom.jpg", alt: "Natural stone in a family living space",
      points: ["Keep your installation date and project records", "Retain the written guarantee and care instructions", "Photograph any changes you would like assessed"],
    },
    processTitle: "If your surface needs attention.",
    steps: [
      ["Record the change", "Take clear photographs of the affected area and the wider surface. Note when you first noticed the issue."],
      ["Find your details", "Have the installation date, project details and written guarantee available to help the team identify your installation."],
      ["Contact the team", "Describe what has changed and ask for an assessment. Check with the team before trying a repair or removing the film."],
      ["Review the next steps", "The team can discuss assessment and suitable options for your surface with reference to your written guarantee."],
    ],
    faqs: [
      ["What does ‘up to 10 years’ mean?", "NanoShield HD is described as designed to last up to 10 years in residential settings. Confirm the actual guarantee period, coverage and conditions for your installation in the written documentation."],
      ["Is the same period available for commercial use?", "Commercial spaces can have different usage and cleaning demands. Ask the team to confirm the period and terms applicable to your specific commercial project."],
      ["What if the protective film shows wear?", "The film is the layer that takes daily use. If you notice wear or a change in appearance, ask the team to assess it and discuss care or replacement options."],
      ["Where can I find the full guarantee terms?", "Request the written guarantee from the team before proceeding. It should be your reference for the coverage, conditions and process applicable to your installation."],
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
    ],
  },
};
