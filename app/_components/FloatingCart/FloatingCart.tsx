

'use client'
import { useCart } from "@/lib/cartContext";
import { X, Plus, Minus, ShoppingCart, Trash2 } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function FloatingCart() {
  const { items, isOpen, setIsOpen, removeFromCart, updateQuantity, totalItems } = useCart();
  const router = useRouter();

  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-sky-500 hover:bg-sky-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg transition-colors"
      >
        <ShoppingCart size={22} />
        {totalItems > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
            {totalItems}
          </span>
        )}
      </button>

      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/30 z-50"
          />
        )}
      </AnimatePresence>

      {/* Cart panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed bottom-24 right-6 z-50 w-[340px] max-h-[70vh] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
              <div className="flex items-center gap-2">
                <ShoppingCart size={18} className="text-sky-500" />
                <span className="font-bold text-gray-800">Your Cart</span>
                {totalItems > 0 && (
                  <span className="text-xs bg-sky-100 text-sky-600 font-semibold px-2 py-0.5 rounded-full">
                    {totalItems} item{totalItems > 1 ? "s" : ""}
                  </span>
                )}
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-7 h-7 flex items-center justify-center rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
              >
                <X size={15} />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <ShoppingCart size={40} className="text-gray-200 mb-3" />
                  <p className="text-sm text-gray-400">Your cart is empty</p>
                  <p className="text-xs text-gray-300 mt-1">Add some shoes to get started</p>
                </div>
              ) : (
                items.map((item) => (
                  <div key={item.id} className="flex gap-3 items-center">
                    <div className="w-14 h-14 rounded-lg bg-gray-100 shrink-0 overflow-hidden">
                      {item.image ? (
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <ShoppingCart size={20} className="text-gray-300" />
                        </div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-red-500 font-semibold">{item.brand}</p>
                      <p className="text-sm font-semibold text-gray-800 truncate">{item.name}</p>
                      <p className="text-sm text-gray-700 font-bold">
                        {(item.price * item.quantity).toLocaleString()} Fcfa
                      </p>
                    </div>
                    <div className="flex flex-col items-end gap-1.5 shrink-0">
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-gray-300 hover:text-red-400 transition-colors"
                      >
                        <Trash2 size={13} />
                      </button>
                      <div className="flex items-center gap-1 border border-gray-200 rounded-lg overflow-hidden">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-6 h-6 flex items-center justify-center text-gray-500 hover:bg-gray-100 transition-colors"
                        >
                          <Minus size={11} />
                        </button>
                        <span className="text-sm font-semibold w-5 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-6 h-6 flex items-center justify-center text-gray-500 hover:bg-gray-100 transition-colors"
                        >
                          <Plus size={11} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-gray-100 px-4 py-3">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm text-gray-500">Total</span>
                  <span className="text-lg font-bold text-gray-900">
                    {total.toLocaleString()} Fcfa
                  </span>
                </div>
                {/* ✅ CHECKOUT BUTTON — now redirects to /checkout */}
                <button
                  onClick={() => { setIsOpen(false); router.push("/checkout"); }}
                  className="w-full bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 rounded-xl text-sm transition-colors"
                >
                  Checkout
                </button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}



// 'use client'
// import { useCart } from "@/lib/cartContext";
// import { X, Plus, Minus, ShoppingCart, Trash2 } from "lucide-react";
// import { AnimatePresence, motion } from "framer-motion";

// export default function FloatingCart() {
//   const { items, isOpen, setIsOpen, removeFromCart, updateQuantity, totalItems } = useCart();

//   const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

//   return (
//     <>
//       {/* Floating button */}
//       <button
//         onClick={() => setIsOpen(true)}
//         className="fixed bottom-6 right-6 z-50 bg-sky-500 hover:bg-sky-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg transition-colors"
//       >
//         <ShoppingCart size={22} />
//         {totalItems > 0 && (
//           <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
//             {totalItems}
//           </span>
//         )}
//       </button>

//       {/* Backdrop */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={() => setIsOpen(false)}
//             className="fixed inset-0 bg-black/30 z-50"
//           />
//         )}
//       </AnimatePresence>

//       {/* Cart panel */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95, y: 20 }}
//             animate={{ opacity: 1, scale: 1, y: 0 }}
//             exit={{ opacity: 0, scale: 0.95, y: 20 }}
//             transition={{ duration: 0.2, ease: "easeOut" }}
//             className="fixed bottom-24 right-6 z-50 w-[340px] max-h-[70vh] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden"
//           >
//             {/* Header */}
//             <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
//               <div className="flex items-center gap-2">
//                 <ShoppingCart size={18} className="text-sky-500" />
//                 <span className="font-bold text-gray-800">Your Cart</span>
//                 {totalItems > 0 && (
//                   <span className="text-xs bg-sky-100 text-sky-600 font-semibold px-2 py-0.5 rounded-full">
//                     {totalItems} item{totalItems > 1 ? "s" : ""}
//                   </span>
//                 )}
//               </div>
//               <button
//                 onClick={() => setIsOpen(false)}
//                 className="w-7 h-7 flex items-center justify-center rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
//               >
//                 <X size={15} />
//               </button>
//             </div>

//             {/* Items */}
//             <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
//               {items.length === 0 ? (
//                 <div className="flex flex-col items-center justify-center py-12 text-center">
//                   <ShoppingCart size={40} className="text-gray-200 mb-3" />
//                   <p className="text-sm text-gray-400">Your cart is empty</p>
//                   <p className="text-xs text-gray-300 mt-1">Add some shoes to get started</p>
//                 </div>
//               ) : (
//                 items.map((item) => (
//                   <div key={item.id} className="flex gap-3 items-center">
//                     <div className="w-14 h-14 rounded-lg bg-gray-100 shrink-0 overflow-hidden">
//                       {item.image ? (
//                         <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
//                       ) : (
//                         <div className="w-full h-full flex items-center justify-center">
//                           <ShoppingCart size={20} className="text-gray-300" />
//                         </div>
//                       )}
//                     </div>
//                     <div className="flex-1 min-w-0">
//                       <p className="text-xs text-red-500 font-semibold">{item.brand}</p>
//                       <p className="text-sm font-semibold text-gray-800 truncate">{item.name}</p>
//                       <p className="text-sm text-gray-700 font-bold">
//                         {(item.price * item.quantity).toLocaleString()} Fcfa
//                       </p>
//                     </div>
//                     <div className="flex flex-col items-end gap-1.5 shrink-0">
//                       <button
//                         onClick={() => removeFromCart(item.id)}
//                         className="text-gray-300 hover:text-red-400 transition-colors"
//                       >
//                         <Trash2 size={13} />
//                       </button>
//                       <div className="flex items-center gap-1 border border-gray-200 rounded-lg overflow-hidden">
//                         <button
//                           onClick={() => updateQuantity(item.id, item.quantity - 1)}
//                           className="w-6 h-6 flex items-center justify-center text-gray-500 hover:bg-gray-100 transition-colors"
//                         >
//                           <Minus size={11} />
//                         </button>
//                         <span className="text-sm font-semibold w-5 text-center">{item.quantity}</span>
//                         <button
//                           onClick={() => updateQuantity(item.id, item.quantity + 1)}
//                           className="w-6 h-6 flex items-center justify-center text-gray-500 hover:bg-gray-100 transition-colors"
//                         >
//                           <Plus size={11} />
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 ))
//               )}
//             </div>

//             {/* Footer */}
//             {items.length > 0 && (
//               <div className="border-t border-gray-100 px-4 py-3">
//                 <div className="flex justify-between items-center mb-3">
//                   <span className="text-sm text-gray-500">Total</span>
//                   <span className="text-lg font-bold text-gray-900">
//                     {total.toLocaleString()} Fcfa
//                   </span>
//                 </div>
//                 <button className="w-full bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 rounded-xl text-sm transition-colors">
//                   Checkout
//                 </button>
//               </div>
//             )}
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }