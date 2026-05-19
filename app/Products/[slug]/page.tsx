

'use client'
import { products } from "@/lib/products";
import { useCart } from "@/lib/cartContext";
import { ArrowLeft, ShoppingCart, Heart, X } from "lucide-react";
import Link from "next/link";
import { use } from "react";

export default function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const product = products.find((p) => p.id === parseInt(slug));
  const { addToCart } = useCart();

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
        <div className="text-center">
          <p className="text-[10px] tracking-[0.3em] uppercase text-gray-400 mb-2">Error</p>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-700 mb-6">Product Not Found</h1>
          <Link
            href="/Products"
            className="inline-flex items-center gap-2 text-sm text-sky-600 hover:text-sky-800 transition-colors font-semibold"
          >
            <ArrowLeft size={14} />
            Back To Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-start sm:justify-center p-4 sm:p-6 pt-16 sm:pt-6">

      {/* Back link */}
      <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
        <Link
          href="/Products"
          className="inline-flex items-center gap-1.5 text-sm text-sky-600 hover:text-sky-800 font-semibold transition-colors"
        >
          <ArrowLeft size={14} />
          <span className="hidden sm:inline">All Products</span>
          <span className="sm:hidden">Back</span>
        </Link>
      </div>

      {/* Card */}
      <div className="bg-white w-full max-w-2xl flex flex-col md:flex-row rounded-lg shadow-md hover:shadow-sky-300 transition-shadow overflow-hidden">

        {/* Image panel */}
        <div
          className="relative flex items-center justify-center bg-gray-100 p-8 md:p-10 w-full md:w-[52%]"
          style={{ minHeight: "260px" }}
        >
          {product.featured && (
            <span className="absolute top-3 left-3 text-xs text-white font-semibold bg-sky-400 px-2 py-1 rounded z-10">
              FEATURED
            </span>
          )}

          {product.image ? (
            <img
              src={product.image}
              alt={product.name}
              className="w-48 h-48 sm:w-56 sm:h-56 md:w-full md:h-56 object-cover drop-shadow-lg"
            />
          ) : (
            <div className="w-full h-48 sm:h-56 flex items-center justify-center">
              <ShoppingCart size={56} className="text-gray-300" />
            </div>
          )}
        </div>

        {/* Info panel */}
        <div className="flex flex-col justify-between p-6 sm:p-8 border-t md:border-t-0 md:border-l border-gray-100 w-full md:w-[48%]">

          {/* Top */}
          <div>
            {/* Close — md+ only */}
            <div className="hidden md:flex justify-end mb-4">
              <Link
                href="/Products"
                className="w-7 h-7 border border-gray-200 rounded flex items-center justify-center text-gray-400 hover:border-sky-400 hover:text-sky-500 transition-colors"
              >
                <X size={13} />
              </Link>
            </div>

            {/* Brand / Name / Category */}
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm font-semibold text-red-600">{product.brand}</span>
              <span className="text-xs bg-gray-100 px-2 py-1 rounded">{product.category}</span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight mb-4">
              {product.name}
            </h1>

            <div className="border-t border-gray-100 mb-4" />

            {/* Specs */}
            <div className="space-y-2 mb-4">
              <div className="flex gap-4">
                <span className="text-[10px] tracking-widest uppercase text-gray-400 w-20 shrink-0 font-semibold">Brand</span>
                <span className="text-sm text-gray-600">{product.brand}</span>
              </div>
              <div className="flex gap-4">
                <span className="text-[10px] tracking-widest uppercase text-gray-400 w-20 shrink-0 font-semibold">Category</span>
                <span className="text-sm text-gray-600">{product.category}</span>
              </div>
              <div className="flex gap-4">
                <span className="text-[10px] tracking-widest uppercase text-gray-400 w-20 shrink-0 font-semibold">Stock</span>
                <span className={`text-sm font-medium ${product.inStock ? "text-green-600" : "text-red-600"}`}>
                  {product.inStock ? "In Stock" : "Out of Stock"}
                </span>
              </div>
            </div>

            <div className="border-t border-gray-100 mb-4" />

            {/* Description */}
            <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3 md:line-clamp-4">
              {product.description}
            </p>
          </div>

          {/* Bottom: price + CTA */}
          <div>
            {/* Price */}
            <div className="flex flex-wrap items-baseline gap-2 mb-4">
              <span className="text-2xl sm:text-3xl font-bold text-gray-900">
                {product.price.toLocaleString()} Fcfa
              </span>
              {product.originalPrice && (
                <>
                  <span className="text-sm text-gray-400 line-through">
                    {product.originalPrice.toLocaleString()} Fcfa
                  </span>
                  <span className="text-xs bg-green-200 text-green-700 px-1.5 py-0.5 rounded font-semibold">
                    SALE
                  </span>
                </>
              )}
            </div>

            {/* Buttons */}
            <div className="flex gap-2">
              <button
                disabled={!product.inStock}
                onClick={() =>
                  addToCart({
                    id: product.id,
                    name: product.name,
                    brand: product.brand,
                    price: product.price,
                    image: product.image,
                  })
                }
                className={`flex-1 py-3 rounded-lg text-sm font-bold tracking-wide transition-all ${
                  product.inStock
                    ? "bg-sky-500 text-white hover:bg-sky-600"
                    : "bg-gray-200 text-gray-400 cursor-not-allowed"
                }`}
              >
                {product.inStock ? "Add To Cart" : "Out Of Stock"}
              </button>
              <button className="w-11 border border-gray-200 rounded-lg flex items-center justify-center text-gray-400 hover:border-red-300 hover:text-red-400 transition-colors">
                <Heart size={15} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}









// import { products } from "@/lib/products";
// import { ArrowLeft, ShoppingCart, Heart, X } from "lucide-react";
// import Link from "next/link";

// export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
//   const { slug } = await params;
//   const product = products.find((p) => p.id === parseInt(slug));

//   if (!product) {
//     return (
//       <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
//         <div className="text-center">
//           <p className="text-[10px] tracking-[0.3em] uppercase text-gray-400 mb-2">Error</p>
//           <h1 className="text-xl sm:text-2xl font-bold text-gray-700 mb-6">Product Not Found</h1>
//           <Link
//             href="/Products"
//             className="inline-flex items-center gap-2 text-sm text-sky-600 hover:text-sky-800 transition-colors font-semibold"
//           >
//             <ArrowLeft size={14} />
//             Back To Products
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-start sm:justify-center p-4 sm:p-6 pt-16 sm:pt-6">

//       {/* Back link */}
//       <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
//         <Link
//           href="/Products"
//           className="inline-flex items-center gap-1.5 text-sm text-sky-600 hover:text-sky-800 font-semibold transition-colors"
//         >
//           <ArrowLeft size={14} />
//           <span className="hidden sm:inline">All Products</span>
//           <span className="sm:hidden">Back</span>
//         </Link>
//       </div>

//       {/* Card */}
//       <div className="bg-white w-full max-w-2xl flex flex-col md:flex-row rounded-lg shadow-md hover:shadow-sky-300 transition-shadow overflow-hidden">

//         {/* Image panel */}
//         <div
//           className="relative flex items-center justify-center bg-gray-100 p-8 md:p-10 w-full md:w-[52%]"
//           style={{ minHeight: "260px" }}
//         >
//           {product.featured && (
//             <span className="absolute top-3 left-3 text-xs text-white font-semibold bg-sky-400 px-2 py-1 rounded z-10">
//               FEATURED
//             </span>
//           )}

//           {product.image ? (
//             <img
//               src={product.image}
//               alt={product.name}
//               className="w-48 h-48 sm:w-56 sm:h-56 md:w-full md:h-56 object-cover drop-shadow-lg"
//             />
//           ) : (
//             <div className="w-full h-48 sm:h-56 flex items-center justify-center">
//               <ShoppingCart size={56} className="text-gray-300" />
//             </div>
//           )}
//         </div>

//         {/* Info panel */}
//         <div className="flex flex-col justify-between p-6 sm:p-8 border-t md:border-t-0 md:border-l border-gray-100 w-full md:w-[48%]">

//           {/* Top */}
//           <div>
//             {/* Close — md+ only */}
//             <div className="hidden md:flex justify-end mb-4">
//               <Link
//                 href="/Products"
//                 className="w-7 h-7 border border-gray-200 rounded flex items-center justify-center text-gray-400 hover:border-sky-400 hover:text-sky-500 transition-colors"
//               >
//                 <X size={13} />
//               </Link>
//             </div>

//             {/* Brand / Name / Category */}
//             <div className="flex justify-between items-center mb-1">
//               <span className="text-sm font-semibold text-red-600">{product.brand}</span>
//               <span className="text-xs bg-gray-100 px-2 py-1 rounded">{product.category}</span>
//             </div>

//             <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight mb-4">
//               {product.name}
//             </h1>

//             <div className="border-t border-gray-100 mb-4" />

//             {/* Specs */}
//             <div className="space-y-2 mb-4">
//               <div className="flex gap-4">
//                 <span className="text-[10px] tracking-widest uppercase text-gray-400 w-20 shrink-0 font-semibold">Brand</span>
//                 <span className="text-sm text-gray-600">{product.brand}</span>
//               </div>
//               <div className="flex gap-4">
//                 <span className="text-[10px] tracking-widest uppercase text-gray-400 w-20 shrink-0 font-semibold">Category</span>
//                 <span className="text-sm text-gray-600">{product.category}</span>
//               </div>
//               <div className="flex gap-4">
//                 <span className="text-[10px] tracking-widest uppercase text-gray-400 w-20 shrink-0 font-semibold">Stock</span>
//                 <span className={`text-sm font-medium ${product.inStock ? "text-green-600" : "text-red-600"}`}>
//                   {product.inStock ? "In Stock" : "Out of Stock"}
//                 </span>
//               </div>
//             </div>

//             <div className="border-t border-gray-100 mb-4" />

//             {/* Description */}
//             <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3 md:line-clamp-4">
//               {product.description}
//             </p>
//           </div>

//           {/* Bottom: price + CTA */}
//           <div>
//             {/* Price */}
//             <div className="flex flex-wrap items-baseline gap-2 mb-4">
//               <span className="text-2xl sm:text-3xl font-bold text-gray-900">
//                 {product.price.toLocaleString()} Fcfa
//               </span>
//               {product.originalPrice && (
//                 <>
//                   <span className="text-sm text-gray-400 line-through">
//                     {product.originalPrice.toLocaleString()} Fcfa
//                   </span>
//                   <span className="text-xs bg-green-200 text-green-700 px-1.5 py-0.5 rounded font-semibold">
//                     SALE
//                   </span>
//                 </>
//               )}
//             </div>

//             {/* Buttons */}
//             <div className="flex gap-2">
//               <button
//                 disabled={!product.inStock}
//                 className={`flex-1 py-3 rounded-lg text-sm font-bold tracking-wide transition-all ${
//                   product.inStock
//                     ? "bg-sky-500 text-white hover:bg-sky-600"
//                     : "bg-gray-200 text-gray-400 cursor-not-allowed"
//                 }`}
//               >
//                 {product.inStock ? "Add To Cart" : "Out Of Stock"}
//               </button>
//               <button className="w-11 border border-gray-200 rounded-lg flex items-center justify-center text-gray-400 hover:border-red-300 hover:text-red-400 transition-colors">
//                 <Heart size={15} />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }