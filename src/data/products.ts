/**
 * Curated Product Discovery Catalog for RAJ RUDRA ENTERPRISES
 * Central product configuration.
 */

export interface ProductItem {
  id: string;
  name: string;
  category: "Bathroom Fittings" | "Sanitaryware" | "Electrical Products" | "Plumbing Solutions" | "Lighting Solutions";
  subCategory: string;
  brand: string;
  description: string;
  features: string[];
  finishOrType: string;
  application: string;
  image: string;
  isFeatured: boolean;
}

export const PRODUCT_CATEGORIES = [
  "All",
  "Bathroom Fittings",
  "Sanitaryware",
  "Electrical Products",
  "Plumbing Solutions",
  "Lighting Solutions"
] as const;

export type ProductCategory = (typeof PRODUCT_CATEGORIES)[number];

export const PRODUCTS_DATA: ProductItem[] = [
  // A. Bathroom Fittings
  {
    id: "bf-01",
    name: "Architectural Single-Lever Basin Mixer",
    category: "Bathroom Fittings",
    subCategory: "Faucets and Taps",
    brand: "Jaquar",
    description: "High-grade forged brass basin mixer with ceramic disc cartridge, smooth water flow aerator, and corrosion-resistant brushed gold finish.",
    features: ["Sedal ceramic cartridge", "Soft aerated stream", "Quarter-turn ceramic disc", "Brushed Gold PVD Finish"],
    finishOrType: "Brushed Gold / Matte Black / Chrome",
    application: "Luxury Countertop Basin",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
    isFeatured: true
  },
  {
    id: "bf-02",
    name: "Thermostatic Rain Shower Column System",
    category: "Bathroom Fittings",
    subCategory: "Shower Fittings",
    brand: "Grafdeor",
    description: "Multifunction concealed shower column with 12-inch slim stainless steel rain showerhead, handheld wand, and anti-scald thermostatic diverter.",
    features: ["Anti-lime silicone nozzles", "Thermostatic safety stop at 38°C", "Dual outlet diverter", "Solid brass valve body"],
    finishOrType: "Matte Black & Chrome",
    application: "Walk-in Shower Enclosure",
    image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=800&q=80",
    isFeatured: true
  },
  {
    id: "bf-03",
    name: "Wall Mounted Tall Pillar Cock",
    category: "Bathroom Fittings",
    subCategory: "Wash Basin Fittings",
    brand: "Watertec",
    description: "High-performance virgin polymer pillar cock designed for zero dripping, effortless flow control, and high durability against hard water.",
    features: ["Virgin engineering polymer", "Zero leak washer", "Corrosion and scale immune", "Smooth ergonomic knob"],
    finishOrType: "Premium White & Chrome Touch",
    application: "Bathroom Wash Basin / Vanity",
    image: "https://images.unsplash.com/photo-1595846519845-68e298c2edd8?auto=format&fit=crop&w=800&q=80",
    isFeatured: false
  },
  {
    id: "bf-04",
    name: "Complete 5-Piece Solid Brass Bath Accessories Set",
    category: "Bathroom Fittings",
    subCategory: "Bathroom Accessories",
    brand: "Jaquar",
    description: "Coordinated architectural accessory ensemble including towel rail, soap dispenser, tumbler holder, robe hook, and toilet paper holder.",
    features: ["Solid brass substrate", "Concealed mounting screws", "Heavy gauge construction", "Tarnish-proof finish"],
    finishOrType: "Brushed Champagne Gold",
    application: "Master Bathroom & Guest Bath",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    isFeatured: true
  },

  // B. Sanitaryware
  {
    id: "sw-01",
    name: "Sculptural Matte Ceramic Countertop Vessel Basin",
    category: "Sanitaryware",
    subCategory: "Wash Basins",
    brand: "Hindware",
    description: "Italian designed oval countertop basin made with vitreous china and nano-glazed anti-bacterial coating for effortless maintenance.",
    features: ["Thin-rim architectural profile", "Nano-glaze dirt repellent surface", "Deep basin cavity prevents splashing", "Standard drain hole compatibility"],
    finishOrType: "Matte Charcoal & Warm Ivory",
    application: "Vanity Counters & Powder Rooms",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80",
    isFeatured: true
  },
  {
    id: "sw-02",
    name: "Rimless Wall-Hung Water Closet with Soft-Close Seat",
    category: "Sanitaryware",
    subCategory: "Toilets & Closets",
    brand: "Parryware",
    description: "Modern rimless siphon flush wall-hung toilet offering 360-degree hygienic bowl wash, silent slim UF soft-closing seat, and space-saving aesthetic.",
    features: ["Tornado 360° rimless flush", "Duroplast quick-release seat", "Dual flush 3L/6L efficiency", "Concealed trap installation"],
    finishOrType: "Gloss Alpine White",
    application: "Modern Bathrooms",
    image: "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=800&q=80",
    isFeatured: true
  },
  {
    id: "sw-03",
    name: "Integrated Monobloc Pedestal Wash Basin",
    category: "Sanitaryware",
    subCategory: "Wash Basins",
    brand: "Hindware",
    description: "Full pedestal one-piece basin with elegant fluted column concealing all waste plumbing lines, ideal for compact or classic bathroom designs.",
    features: ["Heavy vitreous china", "Integral overflow hole", "Wide tap deck", "High stain resistance"],
    finishOrType: "Vitreous Gloss White",
    application: "Living Area & Dining Hand Wash",
    image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=800&q=80",
    isFeatured: false
  },

  // C. Electrical Products
  {
    id: "ep-01",
    name: "Arteor Designer Modular Switches & Glass Plates",
    category: "Electrical Products",
    subCategory: "Switches and Sockets",
    brand: "Legrand",
    description: "Ultra-slim modular switches featuring mirror-finish tempered glass plates, soft-click tactile micro switches, and built-in subtle LED orientation backlight.",
    features: ["Toughened bevelled glass plates", "Silver alloy contacts for 100k+ cycles", "Child-safe shuttered sockets", "Spark-shield enclosure"],
    finishOrType: "Midnight Black Glass & Brushed Gold",
    application: "Luxury Residences & Showrooms",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
    isFeatured: true
  },
  {
    id: "ep-02",
    name: "FR-LSH Low Smoke Halogen-Free Flame Retardant Copper Wires",
    category: "Electrical Products",
    subCategory: "Wires and Cables",
    brand: "Finolex",
    description: "100% electrolytic grade multi-strand annealed bright copper wires with specially formulated flame retardant PVC insulation for maximum safety.",
    features: ["Zero toxicity low smoke emission", "100% pure electrolytic copper", "Oxygen index > 29%", "High temperature resistance"],
    finishOrType: "1.0 sq.mm to 6.0 sq.mm (Multiple Colors)",
    application: "Concealed Building Electrification",
    image: "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&w=800&q=80",
    isFeatured: true
  },
  {
    id: "ep-03",
    name: "Zeno Flat Touch Modular Switch Series",
    category: "Electrical Products",
    subCategory: "Switches and Sockets",
    brand: "Anchor by Panasonic",
    description: "Flush architectural switches with Panasonic precision mechanisms, captive screws, and polycarbonate plates with anti-dust treatment.",
    features: ["Zero gap flush profile", "UV-stabilized polycarbonate", "Heavy gauge brass terminals", "High breaking capacity"],
    finishOrType: "Matte Anthracite & Champagne Gold",
    application: "Residential & Commercial Interiors",
    image: "https://images.unsplash.com/photo-1517055729445-fa7d27394b48?auto=format&fit=crop&w=800&q=80",
    isFeatured: false
  },
  {
    id: "ep-04",
    name: "Green Wire FRLS Multi-Strand High Conductivity Cables",
    category: "Electrical Products",
    subCategory: "Wires and Cables",
    brand: "Polycab",
    description: "Eco-friendly, energy saving copper cables engineered for high current capacity, reduced voltage drop, and enhanced fire protection.",
    features: ["Class 5 flexible copper conductor", "Rohs & Reach compliant", "Dual layer insulation", "Moisture resistant"],
    finishOrType: "Certified ISI & CE Standards",
    application: "Heavy Appliance & Mains Distribution",
    image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&w=800&q=80",
    isFeatured: false
  },

  // D. Plumbing Solutions
  {
    id: "pl-01",
    name: "Lifeline CPVC Hot & Cold Water Distribution Pipes",
    category: "Plumbing Solutions",
    subCategory: "Pipes and Fittings",
    brand: "Supreme",
    description: "NSF-certified Chlorinated Polyvinyl Chloride pipes and brass-inserted fittings designed for hot and cold potable water up to 93°C.",
    features: ["Zero bacterial growth", "No corrosion or scaling", "High chemical resistance", "Precision brass transition threads"],
    finishOrType: "SDR 11 & SDR 13.5 (½ inch to 2 inch)",
    application: "Domestic & Commercial Plumbing",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=800&q=80",
    isFeatured: true
  },
  {
    id: "pl-02",
    name: "FlowGuard Plus CPVC High-Pressure Pipe & Fitting Range",
    category: "Plumbing Solutions",
    subCategory: "Pipes and Fittings",
    brand: "Ashirvad Pipes",
    description: "World-class plumbing system compounded with Lubrizol materials, tested to withstand high pressure surges and continuous hot water flow.",
    features: ["25% higher tensile strength", "Lead-free & non-toxic", "Smooth inner bore reduces friction", "Long-term thermal stability"],
    finishOrType: "Complete Range with Solvent Cements",
    application: "Concealed Bathrooms & Vertical Risers",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    isFeatured: false
  },
  {
    id: "pl-03",
    name: "Heavy-Duty Brass Forged Ball Valves & Check Valves",
    category: "Plumbing Solutions",
    subCategory: "Water-Related Fittings",
    brand: "Century Pipes & Fittings",
    description: "Full bore forged brass isolation ball valves with chrome-plated ball, Teflon PTFE seats, and zinc-plated anti-rust steel handles.",
    features: ["Forged brass body PN25 rating", "Blowout-proof stem", "PTFE virgin sealing gaskets", "100% pressure factory tested"],
    finishOrType: "Forged Brass (½ inch to 2 inch)",
    application: "Main Overhead Tank & Inflow Lines",
    image: "https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&w=800&q=80",
    isFeatured: true
  },

  // E. Lighting Solutions
  {
    id: "lt-01",
    name: "Architectural Deep Recessed COB Downlights",
    category: "Lighting Solutions",
    subCategory: "Indoor Lighting",
    brand: "Philips",
    description: "Low-glare deep recessed ceiling spotlight with optical lens, high CRI > 90, and die-cast aluminum heat sink for true-to-life architectural illumination.",
    features: ["UGR < 19 anti-glare reflector", "High CRI 92 for true color fidelity", "Warm 3000K / Natural 4000K CCT", "50,000 burning hours lifespan"],
    finishOrType: "7W / 12W / 18W Matte Black & White Bezel",
    application: "Living, Bathroom Vanities & Cove Ceilings",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80",
    isFeatured: true
  },
  {
    id: "lt-02",
    name: "Magnetic Linear Architectural Track Light System",
    category: "Lighting Solutions",
    subCategory: "Decorative & Architectural Lights",
    brand: "Sturlite",
    description: "Low voltage 48V magnetic profile track system allowing tool-free snapping and repositioning of linear floodlights, spotlights, and pendant fixtures.",
    features: ["48V safe touch magnetic track", "Modular snap-in fixtures", "Dimmable driver compatibility", "Seamless recessed or surface profile"],
    finishOrType: "Anodized Matte Black Aluminum",
    application: "Modern Living Rooms & Designer Ceilings",
    image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=800&q=80",
    isFeatured: true
  },
  {
    id: "lt-03",
    name: "High Efficiency Edge-Lit Slim LED Panel Light",
    category: "Lighting Solutions",
    subCategory: "LED Lights",
    brand: "Philips",
    description: "Ultra-slim 10mm ceiling panel light delivering uniform, shadow-free illumination with flicker-free isolated electronic driver.",
    features: ["Surge protection up to 4kV", "Flicker-free eye comfort", "High lumen efficiency > 105 lm/W", "Uniform optical diffuser"],
    finishOrType: "Square & Round (6W to 22W)",
    application: "Kitchens, Bathrooms & Office Spaces",
    image: "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?auto=format&fit=crop&w=800&q=80",
    isFeatured: false
  }
];
