export const site = {
  name: "Shayona Steel Fabrication Works",
  shortName: "Shayona Steel",
  owner: "Chirag Patel",
  tagline: "Custom steel fabrication in Nadiad — built strong, finished beautifully.",
  description:
    "Shayona Steel Fabrication Works, Nadiad — pergolas, gates, laser-cut jali panels, railings, industrial sheds and custom steel furniture. Call Chirag Patel on +91 98255 11011.",
  phoneDisplay: "+91 98255 11011",
  phoneHref: "tel:+919825511011",
  whatsappNumber: "919825511011",
  whatsappMessage: "Hello Shayona Steel, I'd like a quote for a fabrication job.",
  email: "cirag11011@gmail.com",
  address: {
    line1: "Shilpi Apartment, Indira Gandhi Marg",
    line2: "Nr. Petlad Road, Nadiad 387002",
    street: "Shilpi Apartment, Indira Gandhi Marg, Nr. Petlad Road",
    city: "Nadiad",
    postalCode: "387002",
    region: "Gujarat",
    country: "IN",
  },
  // TODO: confirm with Chirag
  hours: "Mon – Sat, 9:00 AM – 7:00 PM",
} as const;

export const whatsappHref = (message: string = site.whatsappMessage) =>
  `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${site.address.street}, ${site.address.city} ${site.address.postalCode}, ${site.address.region}`,
)}`;

export const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Our Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
] as const;
