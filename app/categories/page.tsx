"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/components/LanguageContext";
import Link from "next/link";

export default function Categories() {
  const { langText } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col bg-background dark:bg-slate-950">
      <Header />
      <main className="flex-grow py-24 bg-surface-container-lowest dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <h1 className="text-5xl font-black text-primary dark:text-emerald-50 mb-4 tracking-tight">{langText("All Equipment Categories", "सर्व उपकरण श्रेणी")}</h1>
            <p className="text-slate-600 dark:text-slate-400 max-w-xl text-lg">{langText("Browse our extensive range of agricultural equipment to find exactly what you need.", "आपल्याला नेमके काय हवे आहे हे शोधण्यासाठी आमच्या कृषी उपकरणांची विस्तृत श्रेणी ब्राउझ करा.")}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { id: "tractors", img: "https://images.unsplash.com/photo-1592982537447-6f29e16d4fb0?auto=format&fit=crop&q=80", name: "Tractors", mrName: "ट्रॅक्टर्स" },
              { id: "harvesters", img: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&q=80", name: "Harvesters", mrName: "हार्वेस्टर्स" },
              { id: "implements", img: "https://images.unsplash.com/photo-1530836369250-ef71a3f5e481?auto=format&fit=crop&q=80", name: "Implements", mrName: "उपकरणे" },
              { id: "ploughs", img: "https://images.unsplash.com/photo-1589922589088-34eb1bb9b2b3?auto=format&fit=crop&q=80", name: "Ploughs", mrName: "नांगर" },
              { id: "sprayers", img: "https://images.unsplash.com/photo-1629731693635-f48386de6f80?auto=format&fit=crop&q=80", name: "Sprayers", mrName: "फवारणी यंत्रे" },
              { id: "rotavators", img: "https://images.unsplash.com/photo-1615671524827-0cf04cb35be4?auto=format&fit=crop&q=80", name: "Rotavators", mrName: "रोटाव्हेटर्स" },
              { id: "seeders", img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80", name: "Seeders", mrName: "सीडर्स" },
              { id: "threshers", img: "https://images.unsplash.com/photo-1586771107445-d3afcb841e24?auto=format&fit=crop&q=80", name: "Threshers", mrName: "थ्रेशर्स" },
              { id: "pumps", img: "https://images.unsplash.com/photo-1546252973-1f1965bb8965?auto=format&fit=crop&q=80", name: "Water Pumps", mrName: "पाण्याचे पंप" },
              { id: "balers", img: "https://images.unsplash.com/photo-1559884732-cbf3f98df310?auto=format&fit=crop&q=80", name: "Balers", mrName: "बेलर्स" },
              { id: "trolleys", img: "https://images.unsplash.com/photo-1630141695249-1be877f06d71?auto=format&fit=crop&q=80", name: "Trolleys & Trailers", mrName: "ट्रॉली आणि ट्रेलर्स" }
            ].map(cat => (
              <Link key={cat.id} href={`/models?category=${cat.id}`} className="group relative h-[400px] overflow-hidden rounded-3xl shadow-xl cursor-pointer block">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={cat.name} src={cat.img} />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <h3 className="text-3xl font-black text-white mb-2 tracking-wide">{langText(cat.name, cat.mrName)}</h3>
                  <div className="flex items-center gap-2 text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                    {langText("Browse Models", "मॉडेल्स पहा")} <span className="material-symbols-outlined">chevron_right</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
