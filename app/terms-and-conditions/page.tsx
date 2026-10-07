import type { Metadata } from "next";
import LegalPage, { type LegalSection } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms & Conditions | NanoShield HD",
  description: "Terms and conditions for using the NanoShield HD website and our marble protection film services.",
};

const sections: LegalSection[] = [
  {
    heading: "Quotes and pricing",
    paragraphs: [
      "Advertised prices, including “supplied and installed from $300m²”, are starting rates only. Your final price depends on the surface area, stone condition, edges, joins, cut-outs, preparation and location, and is confirmed in your written quote.",
      "Quotes are based on the information and photographs you provide. If the surface or scope differs on site, we will discuss any changes with you before proceeding.",
    ],
  },
  {
    heading: "Assessment and preparation",
    paragraphs: [
      "We assess your stone before installation. Because the film is clear, existing stains, etching or scratches can remain visible underneath, so cleaning, polishing or restoration may be recommended first. Any preparation work will be included in your quote.",
    ],
  },
  {
    heading: "Installation",
    paragraphs: [
      "Please ensure the surfaces are clear and accessible on the agreed installation date. Installation is typically completed within a day, and we will advise when your surfaces are ready to use.",
    ],
  },
  {
    id: "guarantee",
    heading: "10 year guarantee",
    paragraphs: [
      "NanoShield HD is backed by our 10 year guarantee for residential installations, subject to the written guarantee provided with your installation. The written guarantee sets out the coverage, conditions and claims process that apply to your project. Commercial installations may have different terms.",
      "Our guarantee is in addition to your rights under the Australian Consumer Law.",
    ],
  },
  {
    heading: "Care and use",
    list: [
      "Clean the film with the Crystal Clear Film Cleaner and the approved soft microfibre cloth provided, and follow your aftercare instructions.",
      "Use a chopping board when cutting. Place hot cookware on a trivet or heat mat.",
      "Do not lift or peel the edges of the film. Removal and replacement must be arranged through your NanoShield HD installer.",
    ],
  },
  {
    heading: "Australian Consumer Law",
    paragraphs: [
      "Our goods and services come with guarantees that cannot be excluded under the Australian Consumer Law. Nothing in these terms excludes, restricts or modifies any right or remedy you have under that law.",
    ],
  },
  {
    heading: "Website use",
    paragraphs: [
      "The information on this website is general in nature and is provided to help you understand our products and services. Images may show representative surfaces and settings. The website content, including text, images and logos, may not be copied or reused without our permission.",
    ],
  },
  {
    heading: "Changes to these terms",
    paragraphs: ["We may update these terms from time to time. The current version will always be available on this page."],
  },
];

export default function TermsAndConditionsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      updated="October 2026"
      intro="These terms apply to your use of the NanoShield HD website and to the marble protection film services we provide. Your written quote and written guarantee form part of your agreement with us."
      sections={sections}
    />
  );
}
