"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Script from "next/script";
import { GHL_FORM } from "@/lib/contact";

// Embeds the GoHighLevel enquiry form. form_embed.js resizes the iframe to fit its content.
// `params` are appended to the form URL and picked up by hidden fields in GHL that share the same query parameter names.
// After a successful submission GHL redirects (configured in the GHL form settings, "On Submit") to the thank-you page.
// If GHL redirects only the iframe rather than the whole window, the second `load` event below sends the visitor to /thank-you.
export default function GhlForm({ instance = "inline", className = "", params }: { instance?: string; className?: string; params?: Record<string, string> }) {
  const iframeId = `${instance}-${GHL_FORM.id}`;
  const query = params ? new URLSearchParams(params).toString() : "";
  const src = query ? `${GHL_FORM.src}${GHL_FORM.src.includes("?") ? "&" : "?"}${query}` : GHL_FORM.src;
  const router = useRouter();
  const loads = useRef(0);

  useEffect(() => {
    router.prefetch("/thank-you");
  }, [router]);

  const handleLoad = () => {
    loads.current += 1;
    if (loads.current > 1) router.push("/thank-you");
  };

  return (
    <div className="w-full overflow-hidden">
      <iframe
        src={src}
        id={iframeId}
        title={GHL_FORM.name}
        onLoad={handleLoad}
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
