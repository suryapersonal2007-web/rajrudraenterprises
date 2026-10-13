import React, { useState, useMemo } from 'react';
import { Search, Filter, MessageSquare, ExternalLink, X, Check, Eye } from 'lucide-react';
import { PRODUCTS_DATA, PRODUCT_CATEGORIES, ProductCategory, ProductItem } from '../data/products';
import { getWhatsAppUrl } from '../data/business';

interface ProductCatalogueProps {
  onOpenEnquiry: (productName?: string, category?: string) => void;
}

export const ProductCatalogue: React.FC<ProductCatalogueProps> = ({ onOpenEnquiry }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('All');
  const [selectedBrand, setSelectedBrand] = useState<string>('All');
  const [quickViewProduct, setQuickViewProduct] = useState<ProductItem | null>(null);

  // Extract unique brands for brand filter
  const availableBrands = useMemo(() => {
    const brands = new Set<string>();
    PRODUCTS_DATA.forEach(p => brands.add(p.brand));
    return ['All', ...Array.from(brands).sort()];
  }, []);

  // Filtered products list
  const filteredProducts = useMemo(() => {
    return PRODUCTS_DATA.filter(item => {
      const matchesSearch =
        searchQuery === '' ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.subCategory.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === 'All' || item.category === selectedCategory;

      const matchesBrand =
        selectedBrand === 'All' || item.brand === selectedBrand;

      return matchesSearch && matchesCategory && matchesBrand;
    });
  }, [searchQuery, selectedCategory, selectedBrand]);

  return (
    <section id="products" className="py-20 lg:py-28 bg-[#10110F] border-b border-[#C89536]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs uppercase tracking-widest text-[#E4BD70] font-semibold mb-2">
              Product Catalogue
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#F5F0E7]">
              EXPLORE OUR PRODUCT RANGE
            </h2>
            <p className="text-sm md:text-base text-[#96958F] mt-2 max-w-2xl">
              Discover verified collections across bathroom fittings, sanitaryware, electrical supplies, pipes, and architectural lighting.
            </p>
          </div>

          <div className="text-xs text-[#96958F] font-mono shrink-0">
            Showing <span className="text-[#E4BD70] font-bold">{filteredProducts.length}</span> curated items
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="space-y-4 mb-10">
          {/* Top Bar: Search Input & Brand Dropdown */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
            {/* Search Input (8 cols) */}
            <div className="sm:col-span-8 relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#96958F]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by product name, category, or brand..."
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#1C1D1A] border border-[#C89536]/25 text-sm text-[#F5F0E7] placeholder-[#666] focus:outline-none focus:border-[#E4BD70] transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#96958F] hover:text-[#F5F0E7]"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Brand Dropdown (4 cols) */}
            <div className="sm:col-span-4 relative">
              <select
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                aria-label="Filter by brand"
                className="w-full px-4 py-3 rounded-xl bg-[#1C1D1A] border border-[#C89536]/25 text-sm text-[#F5F0E7] focus:outline-none focus:border-[#E4BD70] transition-colors appearance-none cursor-pointer"
              >
                {availableBrands.map(brand => (
                  <option key={brand} value={brand} className="bg-[#1C1D1A] text-[#F5F0E7]">
                    {brand === 'All' ? 'All Brands' : `Brand: ${brand}`}
                  </option>
                ))}
              </select>
              <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-[#96958F]">
                <Filter className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Interactive Category Segmented Tabs (Functional Buttons) */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
            {PRODUCT_CATEGORIES.map(cat => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-[#C89536] text-[#10110F] shadow-sm'
                      : 'bg-[#1C1D1A] text-[#96958F] hover:text-[#F5F0E7] hover:bg-[#252622] border border-[#C89536]/15'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          /* Empty State */
          <div className="py-20 text-center rounded-2xl bg-[#1C1D1A]/50 border border-[#C89536]/20 p-8 space-y-4">
            <div className="w-12 h-12 rounded-full bg-[#10110F] border border-[#C89536]/30 flex items-center justify-center text-[#96958F] mx-auto">
              <Search className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#F5F0E7]">No matching products found</h3>
            <p className="text-xs text-[#96958F] max-w-md mx-auto">
              Try adjusting your search query or selecting a different category tab. You can also contact our team directly for custom requirements.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
                setSelectedBrand('All');
              }}
              className="px-4 py-2 rounded-lg text-xs font-semibold text-[#10110F] bg-[#E4BD70] hover:bg-[#F5F0E7] transition-colors"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group rounded-2xl bg-[#1C1D1A] border border-[#C89536]/20 hover:border-[#E4BD70]/50 transition-all duration-300 flex flex-col overflow-hidden shadow-lg hover:shadow-black/60 hover:-translate-y-1"
              >
                {/* Product Image Slot (resilient with fallback container) */}
                <div className="relative h-60 w-full overflow-hidden bg-[#151614]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      // Fallback if image load fails
                      e.currentTarget.style.display = 'none';
                    }}
                  />

                  {/* Fallback pattern in case image fails */}
                  <div className="absolute inset-0 -z-10 flex flex-col items-center justify-center bg-gradient-to-br from-[#1C1D1A] to-[#10110F] p-4 text-center">
                    <span className="text-xs font-mono text-[#E4BD70]">{product.brand}</span>
                    <span className="text-sm font-semibold text-[#F5F0E7] mt-1">{product.name}</span>
                  </div>

                  {/* Top Bar on Image: Clean metadata */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                    <span className="text-[11px] font-mono text-[#E4BD70] bg-[#10110F]/85 backdrop-blur-sm px-2.5 py-1 rounded border border-[#C89536]/30">
                      {product.brand}
                    </span>
                    <button
                      onClick={() => setQuickViewProduct(product)}
                      className="pointer-events-auto p-1.5 rounded-lg bg-[#10110F]/85 text-[#96958F] hover:text-[#F5F0E7] border border-[#C89536]/30 transition-colors"
                      title="Quick View Details"
                    >
                      <Eye className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Gradient Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C1D1A] via-transparent to-transparent opacity-80" />
                </div>

                {/* Product Info Card Body */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    {/* Unboxed clean metadata (Anti-slop zero pill rule) */}
                    <div className="flex items-center gap-2 text-xs text-[#96958F]">
                      <span>{product.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>{product.subCategory}</span>
                    </div>

                    <h3 className="text-base font-bold font-heading text-[#F5F0E7] group-hover:text-[#E4BD70] transition-colors line-clamp-1">
                      {product.name}
                    </h3>

                    <p className="text-xs text-[#96958F] line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>

                    <div className="text-[11px] text-[#C89536] font-mono pt-1">
                      {product.finishOrType}
                    </div>
                  </div>

                  {/* Action CTAs */}
                  <div className="pt-3 border-t border-[#252622] flex items-center gap-2">
                    {/* Enquiry Modal Button */}
                    <button
                      onClick={() => onOpenEnquiry(product.name, product.category)}
                      className="flex-1 py-2.5 px-3 rounded-lg text-xs font-semibold uppercase tracking-wider text-[#10110F] bg-gradient-to-r from-[#E4BD70] to-[#C89536] hover:from-[#F5F0E7] hover:to-[#E4BD70] transition-all text-center"
                    >
                      Enquire
                    </button>

                    {/* WhatsApp Action */}
                    <a
                      href={getWhatsAppUrl(undefined, product.name, product.category)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-lg border border-[#25D366]/40 text-[#25D366] hover:bg-[#25D366]/10 transition-colors"
                      title={`WhatsApp enquiry for ${product.name}`}
                    >
                      <MessageSquare className="w-4 h-4" />
                    </a>

                    {/* Quick View Button */}
                    <button
                      onClick={() => setQuickViewProduct(product)}
                      className="p-2.5 rounded-lg border border-[#C89536]/25 text-[#96958F] hover:text-[#F5F0E7] hover:bg-[#222] transition-colors"
                      title="Inspect Specifications"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Quick View Product Modal */}
      {quickViewProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl rounded-2xl bg-[#1C1D1A] border border-[#C89536]/40 p-6 md:p-8 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => setQuickViewProduct(null)}
              className="absolute top-5 right-5 p-2 rounded-lg text-[#96958F] hover:text-[#F5F0E7] hover:bg-[#10110F] border border-[#333] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-6">
              {/* Product Header */}
              <div className="space-y-2 pr-8">
                <div className="flex items-center gap-2 text-xs text-[#E4BD70] font-mono">
                  <span>{quickViewProduct.brand}</span>
                  <span>·</span>
                  <span>{quickViewProduct.category}</span>
                  <span>·</span>
                  <span>{quickViewProduct.subCategory}</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold font-heading text-[#F5F0E7]">
                  {quickViewProduct.name}
                </h3>
              </div>

              {/* Product Image */}
              <div className="h-64 rounded-xl overflow-hidden bg-[#10110F] border border-[#333]">
                <img
                  src={quickViewProduct.image}
                  alt={quickViewProduct.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Description */}
              <p className="text-sm text-[#96958F] leading-relaxed">
                {quickViewProduct.description}
              </p>

              {/* Features List */}
              <div className="space-y-2">
                <h4 className="text-xs uppercase tracking-wider text-[#E4BD70] font-semibold">
                  Key Specifications & Attributes
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {quickViewProduct.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-[#F5F0E7]">
                      <Check className="w-3.5 h-3.5 text-[#C89536] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Specs Meta */}
              <div className="p-3.5 rounded-xl bg-[#10110F] border border-[#C89536]/20 grid grid-cols-2 gap-3 text-xs">
                <div>
                  <span className="text-[#96958F] block">Finish / Dimensions:</span>
                  <span className="text-[#F5F0E7] font-medium">{quickViewProduct.finishOrType}</span>
                </div>
                <div>
                  <span className="text-[#96958F] block">Recommended Application:</span>
                  <span className="text-[#F5F0E7] font-medium">{quickViewProduct.application}</span>
                </div>
              </div>

              {/* Modal Actions */}
              <div className="flex items-center gap-3 pt-2">
                <button
                  onClick={() => {
                    const prod = quickViewProduct;
                    setQuickViewProduct(null);
                    onOpenEnquiry(prod.name, prod.category);
                  }}
                  className="flex-1 py-3 rounded-lg text-xs font-semibold uppercase tracking-wider text-[#10110F] bg-gradient-to-r from-[#E4BD70] to-[#C89536] hover:from-[#F5F0E7] hover:to-[#E4BD70] transition-all text-center"
                >
                  Submit Enquiry
                </button>
                <a
                  href={getWhatsAppUrl(undefined, quickViewProduct.name, quickViewProduct.category)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-lg text-xs font-semibold uppercase tracking-wider text-[#25D366] bg-[#10110F] border border-[#25D366]/40 hover:bg-[#25D366]/10 transition-all flex items-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
