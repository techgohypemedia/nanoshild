"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Script from "next/script";
import { GHL_FORM } from "@/lib/contact";

// Embeds the GoHighLevel enquiry form. form_embed.js resizes the iframe to fit its content.
// `params` are appended to the form URL and picked up by hidden fields in GHL that share the same query parameter names.
// After a successful submission the GHL form posts `["set-sticky-contacts", "embedded_iframe_<id>", ...]` to the parent
// window (form_embed.js uses it to mark the lead as collected). On load it posts the same action with a `_ud` key and a
// cookie payload, which is NOT a submission, so only the `embedded_iframe_` key triggers the redirect to /thank-you.
// The iframe is sandboxed without `allow-top-navigation` so GHL's own "On Submit" redirect (configured in the GHL form
// settings and still pointing at the old domain) cannot take the visitor away from this site.
const FORM_ORIGIN = new URL(GHL_FORM.src).origin;
const LEAD_COLLECTED_KEY_PREFIX = "embedded_iframe_";

export default function GhlForm({ instance = "inline", className = "", params }: { instance?: string; className?: string; params?: Record<string, string> }) {
  const iframeId = `${instance}-${GHL_FORM.id}`;
  const query = params ? new URLSearchParams(params).toString() : "";
  const src = query ? `${GHL_FORM.src}${GHL_FORM.src.includes("?") ? "&" : "?"}${query}` : GHL_FORM.src;
  const router = useRouter();

  useEffect(() => {
    router.prefetch("/thank-you");

    const onMessage = (event: MessageEvent) => {
      if (event.origin !== FORM_ORIGIN) return;
      if (!Array.isArray(event.data) || event.data[0] !== "set-sticky-contacts") return;
      const userDataKey = event.data[1];
      if (typeof userDataKey === "string" && userDataKey.startsWith(LEAD_COLLECTED_KEY_PREFIX)) router.push("/thank-you");
    };

    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [router]);

  return (
    <div className="w-full overflow-hidden">
      <iframe
        src={src}
        id={iframeId}
        title={GHL_FORM.name}
        sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
        style={{
          width: "100%",
          height: GHL_FORM.height,
          border: "none",
          borderRadius: 8,
          marginBottom: "-24px",
          display: "block",
        }}
        className={className}
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name={GHL_FORM.name}
        data-height={GHL_FORM.height}
        data-layout-iframe-id={iframeId}
        data-form-id={GHL_FORM.id}
        data-cookie-consent="true"
        data-cookie-consent-provider="auto"
      />
      <Script src={GHL_FORM.embedScript} strategy="afterInteractive" />
    </div>
  );
}
