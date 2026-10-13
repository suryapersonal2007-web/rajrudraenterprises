/**
 * Curated Visual Gallery for RAJ RUDRA ENTERPRISES
 */

export interface GalleryItem {
  id: string;
  title: string;
  category: "Bathrooms" | "Sanitaryware" | "Lighting" | "Electrical" | "Plumbing";
  description: string;
  image: string;
  aspectRatio: string;
}

export const GALLERY_CATEGORIES = [
  "All",
  "Bathrooms",
  "Sanitaryware",
  "Lighting",
  "Electrical",
  "Plumbing"
] as const;

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-01",
    title: "Minimalist Master Bath with Brushed Gold Fixtures",
    category: "Bathrooms",
    description: "Monolithic charcoal stone vanity with concealed wall-mount basin faucet and warm cove perimeter lighting.",
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1200&q=80",
    aspectRatio: "16/9"
  },
  {
    id: "gal-02",
    title: "Architectural Vessel Basin & Matte Tapware",
    category: "Sanitaryware",
    description: "Countertop fluted vessel wash basin paired with minimalist matte black mixer on polished terrazzo.",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80",
    aspectRatio: "4/3"
  },
  {
    id: "gal-03",
    title: "Concealed Magnetic Track & Recessed COB Ceiling",
    category: "Lighting",
    description: "Modern linear ceiling profile track lighting with warm 3000K accent downlights highlighting interior textures.",
    image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1200&q=80",
    aspectRatio: "4/3"
  },
  {
    id: "gal-04",
    title: "Designer Glass Modular Switches & Faceplates",
    category: "Electrical",
    description: "Refined tempered glass plates and brushed gold tactile rocker switches installed in contemporary living area.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    aspectRatio: "16/9"
  },
  {
    id: "gal-05",
    title: "Precision CPVC & Brass Plumbing Distribution",
    category: "Plumbing",
    description: "Neat vertical plumbing manifold lines with heavy-duty forged brass isolation valves and CPVC connections.",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1200&q=80",
    aspectRatio: "4/3"
  },
  {
    id: "gal-06",
    title: "Spa Shower Enclosure with Thermostatic Column",
    category: "Bathrooms",
    description: "Frameless glass walk-in shower featuring overhead rain spray and handheld multi-jet body wand.",
    image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1200&q=80",
    aspectRatio: "16/9"
  },
  {
    id: "gal-07",
    title: "Rimless Wall-Hung Sanitary Suite with Hidden Cistern",
    category: "Sanitaryware",
    description: "Hygienic rimless ceramic wall-hung toilet paired with pneumatic dual-flush actuator plate.",
    image: "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=1200&q=80",
    aspectRatio: "4/3"
  },
  {
    id: "gal-08",
    title: "Warm Ambient Architectural Vanity Illumination",
    category: "Lighting",
    description: "High CRI backlit LED vanity mirror combined with recessed micro-spotlights for true color rendition.",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1200&q=80",
    aspectRatio: "4/3"
  }
];
