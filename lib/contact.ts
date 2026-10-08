export const PHONE_DISPLAY = "1300 375 030";
export const PHONE_HREF = "tel:1300375030";
export const EMAIL = "support@nanoshield.com.au";
export const SERVICE_AREAS = "Melbourne · Sydney · Brisbane";

// Showroom address (Moorabbin, VIC)
export const SHOWROOM_ADDRESS_LINES = ["Factory 5", "83-85 Keys Rd", "Moorabbin VIC 3189"];
export const SHOWROOM_ADDRESS = SHOWROOM_ADDRESS_LINES.join(", ");
const SHOWROOM_QUERY = encodeURIComponent(SHOWROOM_ADDRESS);
// Keyless Google Maps embed, so no API key is needed
export const SHOWROOM_MAP_EMBED_URL = `https://www.google.com/maps?q=${SHOWROOM_QUERY}&z=16&iwloc=&output=embed`;
export const SHOWROOM_MAP_LINK = `https://www.google.com/maps/search/?api=1&query=${SHOWROOM_QUERY}`;

export const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/profile.php?id=61575366062309",
  instagram: "https://www.instagram.com/nanoshield.hd/",
};

export const GOOGLE_REVIEWS_URL = "https://share.google/8NGKaTzhW6XxlAwQK";

// GoHighLevel "NanoShieldHD Form Home" (same form used on the existing nanoshieldhd.com.au site)
export const GHL_FORM = {
  id: "3uGj8iAnEHVoGIrwtCfn",
  name: "NanoShieldHD Form Home",
  src: "https://lp.marbleprotectionfilm.com.au/widget/form/3uGj8iAnEHVoGIrwtCfn",
  embedScript: "https://lp.marbleprotectionfilm.com.au/js/form_embed.js",
  height: 1056,
};
