/**
 * Verified Business Details for RAJ RUDRA ENTERPRISES
 * Central configuration file.
 */

export interface BusinessConfig {
  name: string;
  proprietor: string;
  category: string;
  primaryTagline: string;
  secondaryTagline: string;
  brandMessage: string;
  address: {
    line1: string;
    street: string;
    city: string;
    pincode: string;
    state: string;
    country: string;
    full: string;
  };
  phones: {
    primary: string;
    secondary: string;
    primaryRaw: string;
    secondaryRaw: string;
  };
  email: string;
  location: string;
  whatsappNumber: string;
  googleMapsUrl: string;
}

export const BUSINESS_INFO: BusinessConfig = {
  name: "RAJ RUDRA ENTERPRISES",
  proprietor: "Vinoth Haran",
  category: "Complete Bathroom, Electrical & Lighting Solution",
  primaryTagline: "Complete Bathroom, Electrical & Lighting Solution",
  secondaryTagline: "Under One Roof",
  brandMessage: "Complete Solution for Every Need",
  address: {
    line1: "No. 23",
    street: "Kaka Thoppu Street",
    city: "Madurai",
    pincode: "625001",
    state: "Tamil Nadu",
    country: "India",
    full: "No. 23, Kaka Thoppu Street, Madurai – 625001, Tamil Nadu, India."
  },
  phones: {
    primary: "+91 98941 40053",
    secondary: "+91 94889 61797",
    primaryRaw: "9894140053",
    secondaryRaw: "9488961797"
  },
  email: "rajrudraenterprises@gmail.com",
  location: "Madurai, Tamil Nadu, India",
  whatsappNumber: "919894140053",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=No.+23,+Kaka+Thoppu+Street,+Madurai+-+625001,+Tamil+Nadu,+India"
};

/**
 * Generates an encoded WhatsApp chat URL with optional custom prefilled message
 */
export function getWhatsAppUrl(customMessage?: string, productName?: string, category?: string): string {
  let message = "Hello Raj Rudra Enterprises, I would like to enquire about your products.";
  
  if (productName) {
    message = `Hello Raj Rudra Enterprises, I would like to enquire about "${productName}"${category ? ` in ${category}` : ""}. Could you please share more details and availability?`;
  } else if (customMessage) {
    message = customMessage;
  }
  
  return `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
