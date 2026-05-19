
'use client'
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Zap, Shield, Star } from "lucide-react";

const stats = [
  { value: "500+", label: "Styles Curated" },
  { value: "10K+", label: "Happy Customers" },
  { value: "5★", label: "Average Rating" },
  { value: "2020", label: "Est. Douala" },
];

const values = [
  {
    icon: <Zap size={22} />,
    title: "Bold by Design",
    description:
      "We don't follow trends — we set them. Every pair in our collection is chosen to make a statement, just like the iron giant that watches over Deido.",
  },
  {
    icon: <Shield size={22} />,
    title: "Built to Last",
    description:
      "Quality over quantity. Each shoe passes our strict durability check before earning a spot on our shelves — because Cameroon deserves the best.",
  },
  {
    icon: <Star size={22} />,
    title: "Made for Everyone",
    description:
      "From Bassa to Bonanjo, our collection speaks to every style, every budget, and every stride. Fashion is for all.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/*  Hero Section */}
      <section className="relative max-w-7xl mx-auto px-6 pt-12 pb-0 grid grid-cols-1 lg:grid-cols-2 gap-10 items-end">
        
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="pb-12 lg:pb-20"
        >
          
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-sky-600 mb-4">
            <MapPin size={13} />
            Douala, Cameroun
          </span>

          <h1 className="text-5xl md:text-6xl font-black leading-[1.05] mb-6 text-gray-900">
            Rooted in&nbsp;
            <span className="text-sky-500">Strength.</span>
            <br />
            Built for&nbsp;
            <span className="relative inline-block">
              Movement.
            
            </span>
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed max-w-md mb-8">
            Like the iconic iron warrior standing tall at Rond Point Deido, we
            believe in boldness, resilience, and the power of showing up in
            style. We are Douala's premier destination for premium footwear.
          </p>

          <div className="flex items-center gap-4">
            <Link
              href="/Products"
              className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Shop Collection <ArrowRight size={16} />
            </Link>
            <Link
              href="#story"
              className="text-sm font-semibold text-gray-700 hover:text-sky-600 transition-colors"
            >
              Our Story ↓
            </Link>
          </div>
        </motion.div>

        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="relative flex justify-center lg:justify-end"
        >
          
          <div className="absolute bottom-0 right-0 w-[340px] h-[420px] bg-sky-200 rounded-3xl -z-0" />

          <div className="relative z-10 w-[280px] md:w-[320px] lg:w-[360px] h-[480px] md:h-[540px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
            <img
              src="https://i.pinimg.com/736x/fa/1c/72/fa1c723ece051cef51d710b17e21d567.jpg"
              alt="Statue du Rond Point Deido, Douala"
              className="w-full h-full object-cover object-top"
            />
            

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow flex items-center gap-2 whitespace-nowrap">
              <MapPin size={13} className="text-sky-500" />
              <span className="text-xs font-semibold text-gray-700">
                Rond Point Deido · Douala
              </span>
            </div>
          </div>

          

          
        </motion.div>
      </section>

      {/* ── Stats bar ── */}
      <section className="bg-sky-500 mt-12 py-8">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <p className="text-3xl font-black text-white">{s.value}</p>
              <p className="text-sky-100 text-sm font-medium mt-1">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Story ── */}
      <section id="story" className="max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-semibold uppercase tracking-widest text-sky-600"
          >
            Our Story
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl font-black mt-3 mb-6 text-gray-900"
          >
            Born on the streets of Douala
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 text-lg leading-relaxed"
          >
            We started with a simple conviction: Cameroonian sneaker culture
            deserves a home-grown champion. From a small boutique near Marché
            Central to a full online store shipping across the country, our
            journey has been fueled by passion for quality footwear and pride
            in where we come from. The robot of Rond Point Deido — forged from
            salvaged metal, towering over the city — is our symbol. A reminder
            that greatness can be built from humble beginnings.
          </motion.p>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-black text-gray-900 mb-10 text-center"
          >
            What We Stand For
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="bg-gray-50 rounded-2xl p-7 hover:shadow-md hover:shadow-sky-200 transition-shadow"
              >
                <div className="w-10 h-10 bg-sky-100 text-sky-600 rounded-xl flex items-center justify-center mb-4">
                  {v.icon}
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">
                  {v.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {v.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl px-10 py-14 text-center relative overflow-hidden"
        >
          {/* decorative circle */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-sky-500 rounded-full" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-sky-500 rounded-full" />

          <p className="text-sky-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Ready to step up?
          </p>
          <h2 className="text-4xl font-black text-white mb-5">
            Find your perfect pair today.
          </h2>
          <p className="text-gray-400 max-w-md mx-auto mb-8">
            Browse our full collection — from everyday classics to exclusive
            drops, always at the best price in Douala.
          </p>
          <Link
            href="/Products"
            className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-400 text-white font-bold px-8 py-4 rounded-xl transition-colors text-base"
          >
            Shop Now <ArrowRight size={18} />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
