"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

export const CONTACT_FORM_ANCHOR = "contact";
export const CONTACT_FORM_HREF = `/contact-us#${CONTACT_FORM_ANCHOR}`;

/** Pages that render the enquiry form inline; on these the CTA scrolls instead of navigating. */
const PAGES_WITH_FORM = new Set(["/", "/contact-us"]);

export function quoteHref(pathname: string | null, params?: Record<string, string>) {
  const query = params ? `?${new URLSearchParams(params).toString()}` : "";
  if (!query && pathname && PAGES_WITH_FORM.has(pathname)) return `#${CONTACT_FORM_ANCHOR}`;
  return `/contact-us${query}#${CONTACT_FORM_ANCHOR}`;
}

// Replaces the old pop-up modal: every "quote" CTA now leads to the inline enquiry form.
export default function QuoteLink({ children, className, onClick }: { children: ReactNode; className?: string; onClick?: () => void }) {
  const pathname = usePathname();
  return (
    <Link href={quoteHref(pathname)} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}
