'use client'
import { motion } from "framer-motion";
import { products } from "@/lib/products";
import Link from "next/link";
import { ArrowRight, Search, SlidersHorizontal } from "lucide-react";
import { useState, useMemo } from "react";

// Derive unique categories from your products
const ALL_CATEGORIES = ["All", ...Array.from(new Set(products.map((p) => p.category)))];

export default function ProductzPage() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [inStockOnly, setInStockOnly] = useState(false);
  const [sortBy, setSortBy] = useState("featured");

  const filtered = useMemo(() => {
    let list = [...products];

    // Search
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q) ||
          p.description?.toLowerCase().includes(q)
      );
    }

    // Category
    if (activeCategory !== "All") {
      list = list.filter((p) => p.category === activeCategory);
    }

    // Stock
    if (inStockOnly) {
      list = list.filter((p) => p.inStock);
    }

    // Sort
    if (sortBy === "price-asc") list.sort((a, b) => a.price - b.price);
    else if (sortBy === "price-desc") list.sort((a, b) => b.price - a.price);
    else if (sortBy === "featured") list.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));

    return list;
  }, [query, activeCategory, inStockOnly, sortBy]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-6">
        <h1 className="text-3xl font-bold">Our Shoe Collection</h1>
        <p className="text-sky-600 mt-1">{filtered.length} styles available</p>
      </div>

      {/* Search + Sort row */}
      <div className="max-w-7xl mx-auto flex flex-wrap gap-3 items-center mb-3">
        <div className="relative flex-1 min-w-[200px] max-w-md">
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
          />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by name, brand…"
            className="w-full pl-9 pr-4 py-2.5 rounded-lg border border-gray-200 bg-white text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-300"
          />
        </div>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="py-2.5 px-3 rounded-lg border border-gray-200 bg-white text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-300 cursor-pointer"
        >
          <option value="featured">Sort: Featured</option>
          <option value="price-asc">Price: Low → High</option>
          <option value="price-desc">Price: High → Low</option>
        </select>
      </div>

      {/* Filter pills */}
      <div className="max-w-7xl mx-auto flex flex-wrap gap-2 mb-6">
        {ALL_CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-1.5 rounded-full text-sm border transition-colors ${
              activeCategory === cat
                ? "bg-sky-500 border-sky-500 text-white"
                : "bg-white border-gray-200 text-gray-600 hover:border-sky-300"
            }`}
          >
            {cat}
          </button>
        ))}

        <button
          onClick={() => setInStockOnly((v) => !v)}
          className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm border transition-colors ${
            inStockOnly
              ? "bg-green-500 border-green-500 text-white"
              : "bg-white border-dashed border-gray-300 text-gray-500 hover:border-green-400"
          }`}
        >
          <SlidersHorizontal size={13} />
          In stock only
        </button>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filtered.length === 0 ? (
          <p className="col-span-full text-center text-gray-400 py-16">
            No products match your search.
          </p>
        ) : (
          filtered.map((product) => (
            <Link href={`/Products/${product.id}`} key={product.name}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="bg-white rounded-lg shadow-md hover:shadow-sky-300 transition-shadow cursor-pointer overflow-hidden"
              >
                <div className="h-48 bg-gray-100 relative">
                  {product.featured && (
                    <span className="absolute top-1 left-1 z-10 bg-sky-400 text-xs text-white font-semibold px-2 py-1 rounded">
                      FEATURED
                    </span>
                  )}
                  {product.image ? (
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-6xl">Image Loading...</span>
                    </div>
                  )}
                </div>

                <div className="p-2">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-semibold text-red-600">{product.brand}</span>
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded">{product.category}</span>
                  </div>
                  <h2 className="font-bold text-lg mb-2">{product.name}</h2>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xl font-bold">{product.price} Fcfa</span>
                    {product.originalPrice && (
                      <>
                        <span className="text-sm text-gray-400 line-through">
                          {product.originalPrice} Fcfa
                        </span>
                        <span className="text-xs bg-green-200 text-green-700 px-1 py-0.5 rounded">
                          SALE
                        </span>
                      </>
                    )}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className={`text-sm ${product.inStock ? "text-green-600" : "text-red-600"}`}>
                      {product.inStock ? "In Stock" : "Out of Stock"}
                    </span>
                    <span className="flex items-center gap-1 text-blue-600 text-sm">
                      View <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}