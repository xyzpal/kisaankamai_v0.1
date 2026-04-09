"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageContext";
import { useRouter } from "next/navigation";

export default function FeedbackPage() {
  const { langText } = useLanguage();
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/feedback/success');
  };

  return (
    <main className="flex-grow flex flex-col items-center pb-24 bg-surface-container-low dark:bg-slate-950/20">
      {/* Hero Section */}
      <section className="w-full max-w-7xl px-6 md:px-8 py-8 md:py-12 mt-4">
        <div className="relative w-full rounded-3xl overflow-hidden bg-primary-container dark:bg-slate-900 shadow-sm border border-slate-100 dark:border-slate-800/50 flex flex-col md:flex-row min-h-[300px]">
          <div className="flex-1 p-10 md:p-14 flex flex-col justify-center bg-primary-container dark:bg-slate-900/80 z-10">
            <h1 className="text-white font-black text-4xl md:text-5xl leading-tight mb-4">
              {langText("Share Your Feedback", "तुमचे अभिप्राय कळवा")}
            </h1>
            <p className="text-emerald-100/80 dark:text-slate-400 text-lg max-w-lg mt-4">
              {langText(
                "Help us improve Kisan Kamai for every farmer and equipment owner in Maharashtra.",
                "महाराष्ट्रातील प्रत्येक शेतकरी आणि उपकरण मालकासाठी किसान कमाई सुधारण्यास आम्हाला मदत करा."
              )}
            </p>
          </div>
          <div
            className="absolute inset-0 md:relative md:w-1/2 opacity-30 md:opacity-100 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1592982537447-6f296b02ec8c?q=80&w=2000&auto=format&fit=crop')",
            }}
          />
        </div>
      </section>

      {/* Main Form Section */}
      <section className="w-full max-w-4xl px-6 md:px-8 mt-4">
        <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-800 p-8 md:p-12">
          <form className="flex flex-col gap-10" onSubmit={handleSubmit}>
            {/* Personal Info Group */}
            <fieldset className="flex flex-col gap-6">
              <legend className="sr-only">Personal Information</legend>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1 flex flex-col gap-2">
                  <label htmlFor="fullName" className="font-bold text-slate-800 dark:text-slate-200 text-[15px]">
                    {langText("Full Name", "पूर्ण नाव")} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    required
                    placeholder={langText("Enter your full name", "तुमचे पूर्ण नाव प्रविष्ट करा")}
                    className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-transparent focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 h-14 px-4 text-slate-800 dark:text-white transition-colors"
                  />
                </div>
                <div className="flex-1 flex flex-col gap-2">
                  <label htmlFor="mobileNumber" className="font-bold text-slate-800 dark:text-slate-200 text-[15px]">
                    {langText("Mobile Number", "मोबाईल नंबर")} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="mobileNumber"
                    required
                    placeholder={langText("Enter 10 digit number", "१० अंकी नंबर प्रविष्ट करा")}
                    className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-transparent focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 h-14 px-4 text-slate-800 dark:text-white transition-colors"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="font-bold text-slate-800 dark:text-slate-200 text-[15px] flex items-center gap-2">
                  {langText("Email", "ईमेल")} <span className="text-slate-500 text-sm font-normal">({langText("Optional", "पर्यायी")})</span>
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder={langText("Enter your email address", "तुमचा ईमेल ॲड्रेस प्रविष्ट करा")}
                  className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-transparent focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 h-14 px-4 text-slate-800 dark:text-white transition-colors"
                />
              </div>
            </fieldset>

            <hr className="border-slate-200 dark:border-slate-800" />

            {/* Feedback Details Group */}
            <fieldset className="flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <label className="font-bold text-slate-800 dark:text-slate-200 text-[15px]">
                  {langText("I am a...", "मी एक...")} <span className="text-red-500">*</span>
                </label>
                <div className="flex flex-wrap gap-4">
                  {[
                    { val: "farmer", en: "Farmer", mr: "शेतकरी" },
                    { val: "owner", en: "Equipment Owner", mr: "मालक" },
                    { val: "partner", en: "Partner", mr: "भागीदार" },
                    { val: "visitor", en: "Visitor", mr: "अभ्यागत", def: true },
                  ].map((role) => (
                    <label key={role.val} className="cursor-pointer group relative">
                      <input type="radio" name="role" value={role.val} defaultChecked={role.def} className="peer sr-only" />
                      <div className="px-6 py-3 rounded-full border-2 border-slate-200 dark:border-slate-700 bg-transparent text-slate-600 dark:text-slate-400 font-bold text-sm transition-all peer-checked:bg-emerald-500 peer-checked:text-white peer-checked:border-emerald-500 hover:border-emerald-400 dark:hover:border-slate-600">
                        {langText(role.en, role.mr)}
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="category" className="font-bold text-slate-800 dark:text-slate-200 text-[15px]">
                  {langText("Feedback Category", "अभिप्रायाची श्रेणी")} <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select
                    id="category"
                    required
                    className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-transparent focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 h-14 px-4 text-slate-800 dark:text-white appearance-none transition-colors"
                    defaultValue=""
                  >
                    <option value="" disabled className="dark:bg-slate-900">
                      {langText("Select a category...", "श्रेणी निवडा...")}
                    </option>
                    <option value="website" className="dark:bg-slate-900">{langText("Website Experience", "वेबसाईट अनुभव")}</option>
                    <option value="booking" className="dark:bg-slate-900">{langText("Booking Experience", "बुकिंग अनुभव")}</option>
                    <option value="listing" className="dark:bg-slate-900">{langText("Listing Experience", "लिस्टिंग अनुभव")}</option>
                    <option value="support" className="dark:bg-slate-900">{langText("Support Experience", "सपोर्ट अनुभव")}</option>
                    <option value="payment" className="dark:bg-slate-900">{langText("Payment & Pricing", "पेमेंट आणि किंमत")}</option>
                    <option value="suggestion" className="dark:bg-slate-900">{langText("Suggestion", "सूचना")}</option>
                    <option value="issue" className="dark:bg-slate-900">{langText("Report an Issue", "समस्येची तक्रार करा")}</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                    <span className="material-symbols-outlined">expand_more</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="font-bold text-slate-800 dark:text-slate-200 text-[15px]">
                  {langText("Subject", "विषय")} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  required
                  placeholder={langText("Brief subject of your feedback", "तुमच्या अभिप्रायाचा संक्षिप्त विषय")}
                  className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-transparent focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 h-14 px-4 text-slate-800 dark:text-white transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="font-bold text-slate-800 dark:text-slate-200 text-[15px]">
                  {langText("Feedback Message", "संदेश")} <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  placeholder={langText("Please describe your experience or suggestion in detail...", "कृपया तुमचा अनुभव किंवा सूचना सविस्तर सांगा...")}
                  className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-transparent focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 p-4 text-slate-800 dark:text-white resize-y transition-colors"
                ></textarea>
              </div>
            </fieldset>

            {/* Rating & Final Options */}
            <fieldset className="flex flex-col gap-6">
              <div className="flex flex-col gap-3">
                <label className="font-bold text-slate-800 dark:text-slate-200 text-[15px]">
                  {langText("Overall Satisfaction", "एकूण समाधान")}
                </label>
                <div className="flex gap-2 text-amber-400">
                  {/* Star Rating Visual Component Elements */}
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button key={star} type="button" className="text-amber-400 hover:text-amber-500 hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-[32px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                        star
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <label className="flex items-center gap-3 cursor-pointer group w-fit mt-2">
                <div className="relative flex items-center justify-center w-6 h-6 border-2 border-slate-300 dark:border-slate-600 rounded-md group-hover:border-emerald-500 transition-colors bg-white dark:bg-slate-900">
                  <input type="checkbox" className="peer sr-only " />
                  <div className="absolute inset-0 bg-emerald-500 rounded-md scale-0 peer-checked:scale-100 transition-transform flex items-center justify-center">
                    <span className="material-symbols-outlined text-white text-[16px] font-bold">check</span>
                  </div>
                </div>
                <span className="font-bold text-[15px] text-slate-700 dark:text-slate-300 select-none">
                  {langText("Contact me about this feedback", "या अभिप्रायाबाबत माझ्याशी संपर्क साधा")}
                </span>
              </label>
            </fieldset>

            {/* Submit Area */}
            <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-6 pt-8 border-t border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                <span className="material-symbols-outlined text-[20px]">lock</span>
                <span className="text-sm font-medium">{langText("Your feedback is handled securely.", "तुमचा अभिप्राय सुरक्षितपणे हाताळला जातो.")}</span>
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl transition-colors shadow-lg shadow-emerald-500/20 active:scale-[0.98]"
              >
                {langText("Submit Feedback", "सबमिट करा")}
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
