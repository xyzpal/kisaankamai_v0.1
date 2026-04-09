"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageContext";

export default function FeedbackSuccessPage() {
  const { langText } = useLanguage();

  return (
    <main className="flex-1 flex flex-col justify-center items-center py-20 px-6 bg-surface-container-low dark:bg-slate-950/20">
      <div className="max-w-[800px] w-full bg-white dark:bg-slate-900 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col">
        {/* Banner Image */}
        <div 
          className="w-full h-48 md:h-64 bg-center bg-no-repeat bg-cover flex-shrink-0"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1595844730298-b960ff86df16?q=80&w=2000&auto=format&fit=crop')" }}
        />
        
        {/* Content */}
        <div className="flex flex-col items-center px-6 py-12 md:px-14 text-center">
          {/* Success Icon */}
          <div className="h-20 w-20 bg-emerald-100 dark:bg-emerald-900/40 rounded-full flex items-center justify-center mb-8 border-[6px] border-emerald-50 dark:border-emerald-900/20 shadow-sm relative">
            <span className="material-symbols-outlined text-[40px] text-emerald-600 dark:text-emerald-400" style={{ fontVariationSettings: "'FILL' 1" }}>
              check_circle
            </span>
            <div className="absolute inset-0 rounded-full border border-emerald-200 dark:border-emerald-700/50"></div>
          </div>

          <h1 className="text-slate-900 dark:text-white font-black text-3xl md:text-4xl leading-tight mb-4">
            {langText("Thank You for Your Feedback", "तुमच्या अभिप्रायासाठी धन्यवाद")}
          </h1>
          
          <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed max-w-2xl mb-12">
            {langText(
              "We've received your feedback. Our team reviews every suggestion to build a better Kisan Kamai for you.",
              "आम्हाला तुमचा अभिप्राय मिळाला आहे. तुमच्यासाठी उत्तम किसान कमाई तयार करण्यासाठी आमची टीम प्रत्येक सूचनेचे पुनरावलोकन करते."
            )}
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row w-full max-w-[600px] gap-4 justify-center items-stretch sm:items-center">
            <Link 
              href="/"
              className="flex items-center justify-center rounded-xl h-14 px-8 bg-emerald-600 text-white hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-500/20 font-bold text-base whitespace-nowrap active:scale-[0.98]"
            >
              {langText("Back to Home", "मुख्यपृष्ठावर जा")}
            </Link>
            
            <Link 
              href="/rent-equipment"
              className="flex items-center justify-center rounded-xl h-14 px-8 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors font-bold text-base whitespace-nowrap"
            >
              {langText("Browse Equipment", "अवजारे शोधा")}
            </Link>
            
            <Link 
              href="/about"
              className="flex items-center justify-center rounded-xl h-14 px-8 bg-transparent border-2 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors font-bold text-base whitespace-nowrap"
            >
              {langText("Contact Support", "सपोर्ट")}
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
