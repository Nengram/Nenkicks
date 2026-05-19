

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Eye, EyeOff, ArrowRight, Check } from "lucide-react";

const shoes = [
  "https://i.pinimg.com/736x/80/33/a4/8033a49a1af88a4e4b3e22abd2795173.jpg",
  "https://i.pinimg.com/736x/42/0c/ab/420cab71d9a7424649b0039d0db83602.jpg",
  "https://i.pinimg.com/1200x/ec/04/42/ec04429e03999f3fe2a998a9584369f6.jpg",
];

export default function SignupPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [activeImg, setActiveImg] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) return;
    setSubmitted(true);
  };

  const passwordStrength = () => {
    const p = form.password;
    if (!p) return 0;
    let score = 0;
    if (p.length >= 8) score++;
    if (/[A-Z]/.test(p)) score++;
    if (/[0-9]/.test(p)) score++;
    if (/[^A-Za-z0-9]/.test(p)) score++;
    return score;
  };

  const strength = passwordStrength();
  const strengthLabel = ["", "Weak", "Fair", "Good", "Strong"][strength];
  const strengthColor = ["", "bg-red-400", "bg-yellow-400", "bg-sky-400", "bg-green-500"][strength];

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 shadow-2xl rounded-3xl overflow-hidden">

        {/* LEFT — image panel */}
        <div className="relative hidden lg:flex flex-col bg-[#62B2FE] overflow-hidden">
          <div className="flex-1 relative">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeImg}
                src={shoes[activeImg]}
                alt="shoe"
                initial={{ opacity: 0, scale: 1.08 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-[#62B2FE] via-[#62B2FE]/20 to-transparent" />
          </div>

          <div className="relative z-10 p-10">
            <h2 className="text-white text-4xl font-bold leading-tight mb-3">
              Step Into<br />Your Style.
            </h2>
            <p className="text-white/80 text-sm mb-6">
              Join thousands of sneaker lovers. Get early access to drops, exclusive deals, and more.
            </p>
            <div className="flex gap-3">
              {shoes.map((src, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`w-14 h-14 rounded-xl overflow-hidden border-2 transition-all ${
                    activeImg === i ? "border-white scale-110" : "border-white/30 opacity-60"
                  }`}
                >
                  <img src={src} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT — form panel */}
        <div className="bg-white flex flex-col justify-center px-8 py-12 sm:px-12">
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center text-center gap-4"
              >
                <div className="w-20 h-20 rounded-full bg-sky-100 flex items-center justify-center">
                  <Check size={36} className="text-sky-500" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">You're in!</h2>
                <p className="text-gray-500 text-sm">
                  Welcome to the squad,{" "}
                  <span className="text-sky-500 font-semibold">{form.name}</span>.
                  Start exploring our collection.
                </p>
                <Link
                  href="/Products"
                  className="mt-4 inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-full text-sm font-semibold transition-colors"
                >
                  Shop Now <ArrowRight size={16} />
                </Link>
              </motion.div>
            ) : (
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <div className="mb-8">
                  <span className="text-xs font-semibold uppercase tracking-widest text-sky-500">
                    Create Account
                  </span>
                  <h1 className="text-3xl font-bold text-gray-900 mt-1">Sign Up</h1>
                  <p className="text-gray-400 text-sm mt-1">
                    Already have an account?{" "}
                    <Link href="/login" className="text-sky-500 hover:underline font-medium">
                      Log in
                    </Link>
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  {/* Full Name */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                      Full Name
                    </label>
                    <input
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-sky-300 focus:border-transparent transition"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                      Email
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-sky-300 focus:border-transparent transition"
                    />
                  </div>

                  {/* Password */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                      Password
                    </label>
                    <div className="relative">
                      <input
                        name="password"
                        type={showPassword ? "text" : "password"}
                        required
                        value={form.password}
                        onChange={handleChange}
                        placeholder="Min. 8 characters"
                        className="w-full px-4 py-3 pr-11 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-sky-300 focus:border-transparent transition"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword((v) => !v)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                      </button>
                    </div>
                    {form.password && (
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex gap-1 flex-1">
                          {[1, 2, 3, 4].map((i) => (
                            <div
                              key={i}
                              className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                                i <= strength ? strengthColor : "bg-gray-200"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-xs text-gray-400">{strengthLabel}</span>
                      </div>
                    )}
                  </div>

                  {/* Confirm Password */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                      Confirm Password
                    </label>
                    <div className="relative">
                      <input
                        name="confirmPassword"
                        type={showConfirm ? "text" : "password"}
                        required
                        value={form.confirmPassword}
                        onChange={handleChange}
                        placeholder="Repeat your password"
                        className={`w-full px-4 py-3 pr-11 rounded-xl border bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-sky-300 focus:border-transparent transition ${
                          form.confirmPassword && form.password !== form.confirmPassword
                            ? "border-red-300"
                            : "border-gray-200"
                        }`}
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirm((v) => !v)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        {showConfirm ? <EyeOff size={16} /> : <Eye size={16} />}
                      </button>
                    </div>
                    {form.confirmPassword && form.password !== form.confirmPassword && (
                      <p className="text-xs text-red-400 mt-0.5">Passwords don't match</p>
                    )}
                  </div>

                  {/* Terms */}
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" required className="mt-0.5 accent-sky-500" />
                    <span className="text-xs text-gray-400 leading-relaxed">
                      I agree to the{" "}
                      <Link href="#" className="text-sky-500 hover:underline">Terms of Service</Link>{" "}
                      and{" "}
                      <Link href="#" className="text-sky-500 hover:underline">Privacy Policy</Link>
                    </span>
                  </label>

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    whileTap={{ scale: 0.97 }}
                    className="w-full bg-sky-500 hover:bg-sky-600 text-white py-3.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-colors mt-1"
                  >
                    Create Account <ArrowRight size={16} />
                  </motion.button>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}