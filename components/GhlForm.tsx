import Script from "next/script";
import { GHL_FORM } from "@/lib/contact";

// Embeds the GoHighLevel enquiry form. form_embed.js resizes the iframe to fit its content.
export default function GhlForm({ instance = "inline", className = "" }: { instance?: string; className?: string }) {
  const iframeId = `${instance}-${GHL_FORM.id}`;
  return (
    <div className="w-full overflow-hidden">
      <iframe
        src={GHL_FORM.src}
        id={iframeId}
        title={GHL_FORM.name}
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
