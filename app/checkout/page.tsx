



'use client'
import { useCart } from "@/lib/cartContext";
import { ArrowLeft, ShoppingBag, MessageCircle, Trash2, Plus, Minus } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

// ✅ PASTE YOUR WHATSAPP GROUP LINK HERE
const WHATSAPP_LINK = "https://chat.whatsapp.com/GFf1wclHFMp6Sh8GFTR7LQ";

export default function CheckoutPage() {
  const { items, removeFromCart, updateQuantity, clearCart } = useCart();
  const router = useRouter();

  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);

  const handleWhatsAppRedirect = () => {
    clearCart();
    window.open(WHATSAPP_LINK, "_blank");
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4 text-center">
        <ShoppingBag size={56} className="text-gray-300 mb-4" />
        <h2 className="text-xl font-bold text-gray-700 mb-2">Your cart is empty</h2>
        <p className="text-sm text-gray-400 mb-6">Add some shoes before checking out</p>
        <Link
          href="/Products"
          className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white font-bold px-6 py-3 rounded-xl text-sm transition-colors"
        >
          <ArrowLeft size={15} />
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6">
      <div className="max-w-2xl mx-auto">

        {/* Header */}
        <div className="mb-6">
          <Link
            href="/Products"
            className="inline-flex items-center gap-1.5 text-sm text-sky-600 hover:text-sky-800 font-semibold transition-colors mb-4"
          >
            <ArrowLeft size={14} />
            Back to Products
          </Link>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Checkout</h1>
          <p className="text-gray-500 text-sm mt-1">{totalItems} item{totalItems > 1 ? "s" : ""} in your order</p>
        </div>

        {/* Order Summary */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden mb-4">
          <div className="px-5 py-4 border-b border-gray-100">
            <h2 className="font-bold text-gray-800">Order Summary</h2>
          </div>

          <div className="divide-y divide-gray-50">
            {items.map((item) => (
              <div key={item.id} className="flex gap-4 px-5 py-4 items-center">
                {/* Image */}
                <div className="w-16 h-16 rounded-xl bg-gray-100 shrink-0 overflow-hidden">
                  {item.image ? (
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <ShoppingBag size={22} className="text-gray-300" />
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-red-500 font-semibold">{item.brand}</p>
                  <p className="text-sm font-bold text-gray-800 truncate">{item.name}</p>
                  <p className="text-xs text-gray-400">{item.price.toLocaleString()} Fcfa each</p>
                </div>

                {/* Quantity + Remove */}
                <div className="flex flex-col items-end gap-2 shrink-0">
                  <p className="text-sm font-bold text-gray-900">
                    {(item.price * item.quantity).toLocaleString()} Fcfa
                  </p>
                  <div className="flex items-center gap-1">
                    <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-6 h-6 flex items-center justify-center text-gray-500 hover:bg-gray-100 transition-colors"
                      >
                        <Minus size={11} />
                      </button>
                      <span className="text-sm font-semibold w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-6 h-6 flex items-center justify-center text-gray-500 hover:bg-gray-100 transition-colors"
                      >
                        <Plus size={11} />
                      </button>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="w-6 h-6 flex items-center justify-center text-gray-300 hover:text-red-400 transition-colors"
                    >
                      <Trash2 size={13} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Total */}
        <div className="bg-white rounded-2xl shadow-sm px-5 py-4 mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-500">Subtotal</span>
            <span className="text-sm text-gray-700">{total.toLocaleString()} Fcfa</span>
          </div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-500">Delivery</span>
            <span className="text-sm text-green-600 font-semibold">To be confirmed</span>
          </div>
          <div className="border-t border-gray-100 mt-3 pt-3 flex justify-between items-center">
            <span className="font-bold text-gray-900">Total</span>
            <span className="text-xl font-bold text-gray-900">{total.toLocaleString()} Fcfa</span>
          </div>
        </div>

        {/* WhatsApp CTA */}
        <div className="bg-white rounded-2xl shadow-sm px-5 py-5">
          <div className="flex items-start gap-3 mb-4">
            <div className="w-9 h-9 bg-green-100 rounded-full flex items-center justify-center shrink-0">
              <MessageCircle size={18} className="text-green-600" />
            </div>
            <div>
              <p className="font-bold text-gray-800 text-sm">Complete your order on WhatsApp</p>
              <p className="text-xs text-gray-400 mt-0.5">
                Click below to join our WhatsApp group and finalise your order with our team.
              </p>
            </div>
          </div>
          <button
            onClick={handleWhatsAppRedirect}
            className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3.5 rounded-xl text-sm transition-colors flex items-center justify-center gap-2"
          >
            <MessageCircle size={18} />
            Complete Order on WhatsApp
          </button>
        </div>

      </div>
    </div>
  );
}