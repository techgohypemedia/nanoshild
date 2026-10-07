import type { Metadata } from "next";
import LegalPage, { type LegalSection } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy | NanoShield HD",
  description: "How NanoShield HD collects, uses and protects your personal information.",
};

const sections: LegalSection[] = [
  {
    heading: "Information we collect",
    paragraphs: ["We only collect personal information that is reasonably necessary to respond to your enquiry and provide our services. This may include:"],
    list: [
      "Your name, phone number and email address",
      "Your suburb or project address",
      "Details and photographs of your stone surfaces that you choose to share with us",
      "Records of our communications with you and the work we complete",
    ],
  },
  {
    heading: "How we collect your information",
    paragraphs: [
      "We collect information when you complete an enquiry form on our website, call or email us, book an assessment or installation, or otherwise deal with us directly.",
      "Our enquiry forms are provided through a third-party customer relationship management platform, which stores the details you submit on our behalf.",
    ],
  },
  {
    heading: "How we use your information",
    list: [
      "To respond to your enquiry and prepare a quote",
      "To assess your stone and arrange cleaning, restoration or installation work",
      "To provide aftercare support, guarantee assistance and film replacement",
      "To send you information about our services, where you have agreed to receive it. You can opt out at any time.",
      "To meet our legal and record-keeping obligations",
    ],
  },
  {
    heading: "Disclosing your information",
    paragraphs: [
      "We do not sell your personal information. We may share it with trusted service providers who help us run our business, such as our website, form and communication platforms, only for the purpose of providing our services to you. We may also disclose information where required or authorised by law.",
    ],
  },
  {
    heading: "Cookies and website analytics",
    paragraphs: [
      "Our website and embedded forms may use cookies and similar technologies to operate correctly and to help us understand how visitors use the site. You can adjust your browser settings to refuse cookies, although some parts of the website may not work as intended.",
    ],
  },
  {
    heading: "Storage and security",
    paragraphs: [
      "We take reasonable steps to protect your personal information from misuse, interference, loss and unauthorised access, modification or disclosure. Information that is no longer required is securely destroyed or de-identified.",
    ],
  },
  {
    heading: "Access, correction and complaints",
    paragraphs: [
      "You can ask to access or correct the personal information we hold about you by contacting us. If you have a concern about how we have handled your information, please contact us first so we can try to resolve it. If you are not satisfied with our response, you can contact the Office of the Australian Information Commissioner (OAIC) at oaic.gov.au.",
    ],
  },
  {
    heading: "Changes to this policy",
    paragraphs: ["We may update this policy from time to time. The current version will always be available on this page."],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="October 2026"
      intro="NanoShield HD respects your privacy. This policy explains how we collect, use, store and disclose personal information in line with the Privacy Act 1988 (Cth) and the Australian Privacy Principles."
      sections={sections}
    />
  );
}
