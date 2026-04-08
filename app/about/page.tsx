"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/components/LanguageContext";

export default function About() {
  const { langText } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col bg-background dark:bg-slate-950">
      <Header />
      <main className="flex-grow">
        {/* Hero */}
        <section className="relative h-[716px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="w-full h-full object-cover grayscale-[20%] brightness-75" alt="Vast green wheat field in rural India during golden hour" src="/assets/generated/seed_drill.png" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent"></div>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
            <div className="max-w-2xl">
              <span className="inline-block py-1 px-3 bg-secondary-container text-on-secondary-container text-xs font-bold tracking-widest uppercase rounded mb-6">{langText("Rooted in Trust", "विश्वासात रुजलेले")}</span>
              <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight">{langText("Empowering Indian Agriculture Through Shared Growth.", "सामायिक वाढीद्वारे भारतीय शेतीला सक्षम बनवणे.")}</h1>
              <p className="text-xl text-emerald-50/90 font-medium max-w-lg">{langText("We are bridging the gap between equipment owners and farmers to create a more efficient, prosperous, and sustainable farming ecosystem.", "आम्ही उपकरण मालक आणि शेतकऱ्यांमधील अंतर कमी करून अधिक कार्यक्षम, समृद्ध आणि शाश्वत शेती परिसंस्था निर्माण करत आहोत.")}</p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-24 px-6 bg-surface dark:bg-slate-950">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              <div className="md:col-span-8 p-12 bg-primary-container rounded-3xl text-white flex flex-col justify-between min-h-[400px]">
                <div>
                  <span className="material-symbols-outlined text-4xl text-on-primary-container mb-6">spa</span>
                  <h2 className="text-4xl font-bold mb-6">{langText("Our Mission", "आमचे ध्येय")}</h2>
                  <p className="text-xl text-emerald-100/80 leading-relaxed max-w-2xl">{langText("To democratize access to advanced agricultural machinery for every farmer in India, ensuring that no crop goes unharvested due to a lack of equipment. We strive to make farming profitable and equipment ownership a viable business.", "भारतातील प्रत्येक शेतकऱ्यासाठी प्रगत कृषी यंत्रसामग्रीचा लोकशाही प्रवेश सुनिश्चित करणे, जेणेकरून उपकरणांच्या कमतरतेमुळे कोणतेही पीक न कापलेले राहणार नाही. आम्ही शेती फायदेशीर आणि उपकरण मालकी व्यवहार्य व्यवसाय बनवण्याचा प्रयत्न करतो.")}</p>
                </div>
                <div className="mt-8 flex items-center gap-4">
                  <div className="h-[1px] flex-grow bg-emerald-800"></div>
                  <span className="text-on-primary-container font-headline font-bold uppercase tracking-widest text-xs">{langText("The Kisan Kamai Way", "किसान कमाई मार्ग")}</span>
                </div>
              </div>
              <div className="md:col-span-4 p-8 bg-tertiary-container rounded-3xl text-white flex flex-col justify-center text-center">
                <span className="material-symbols-outlined text-5xl text-on-tertiary-container mb-4">visibility</span>
                <h2 className="text-3xl font-bold mb-4">{langText("Our Vision", "आमची दृष्टी")}</h2>
                <p className="text-lg text-amber-100/80">{langText("To become the backbone of rural agricultural logistics, fostering a community where technology and tradition work hand in hand.", "ग्रामीण कृषी लॉजिस्टिक्सचा कणा बनणे, जिथे तंत्रज्ञान आणि परंपरा एकत्र काम करतात अशा समुदायाला प्रोत्साहन देणे.")}</p>
              </div>
              <div className="md:col-span-4 h-80 rounded-3xl overflow-hidden group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Tractor wheel moving through rich dark soil" src="/assets/generated/seed_drill.png" />
              </div>
              <div className="md:col-span-8 p-12 bg-white dark:bg-slate-900/40 rounded-3xl border border-emerald-100 dark:border-slate-800/50 flex flex-col justify-center relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-primary dark:text-emerald-50 mb-4">{langText("The Origin Story", "उत्पत्तीची कथा")}</h3>
                  <p className="text-on-surface-variant dark:text-slate-300 leading-relaxed text-lg italic">{langText("\"It started in a small village in Maharashtra, watching a neighbor struggle to find a harvester while three others sat idle just two kilometers away. We realized it wasn't a lack of resources, but a lack of connection.\"", "\"महाराष्ट्रातील एका छोट्या गावात सुरू झाले, एक शेजारी हार्वेस्टर शोधण्यासाठी धडपडत होता तर फक्त दोन किलोमीटर अंतरावर इतर तीन रिकामे बसले होते. आम्हाला समजले की ही संसाधनांची कमतरता नाही, तर जोडणीची कमतरता आहे.\"")}</p>
                  <p className="mt-6 font-bold text-secondary dark:text-amber-500">{langText("— Founders' Note", "— संस्थापकांची टीप")}</p>
                </div>
                <div className="absolute -right-16 -bottom-16 opacity-5">
                  <span className="material-symbols-outlined text-[200px]" style={{fontVariationSettings: "'FILL' 1"}}>agriculture</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 bg-surface-container-low dark:bg-slate-950 border-y border-emerald-50 dark:border-slate-800/50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-extrabold text-primary dark:text-emerald-50 mb-4">{langText("Core Values", "मूळ मूल्ये")}</h2>
              <div className="h-1 w-20 bg-secondary mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="flex flex-col items-center text-center group">
                <div className="w-20 h-20 rounded-2xl bg-white dark:bg-slate-900/50 shadow-sm flex items-center justify-center text-secondary mb-6 group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                  <span className="material-symbols-outlined text-4xl" style={{fontVariationSettings: "'FILL' 1"}}>handshake</span>
                </div>
                <h3 className="text-xl font-bold text-primary dark:text-emerald-50 mb-3">{langText("Trust", "विश्वास")}</h3>
                <p className="text-on-surface-variant dark:text-slate-400">{langText("We build relationships rooted in transparency, reliability, and verified equipment quality for every transaction.", "आम्ही प्रत्येक व्यवहारासाठी पारदर्शकता, विश्वासार्हता, आणि सत्यापित उपकरण गुणवत्तेवर आधारित संबंध निर्माण करतो.")}</p>
              </div>
              <div className="flex flex-col items-center text-center group">
                <div className="w-20 h-20 rounded-2xl bg-white dark:bg-slate-900/50 shadow-sm flex items-center justify-center text-secondary mb-6 group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                  <span className="material-symbols-outlined text-4xl" style={{fontVariationSettings: "'FILL' 1"}}>lightbulb</span>
                </div>
                <h3 className="text-xl font-bold text-primary dark:text-emerald-50 mb-3">{langText("Innovation", "नवोपक्रम")}</h3>
                <p className="text-on-surface-variant dark:text-slate-400">{langText("We bring cutting-edge logistics and mobile technology to the fields of India to solve age-old agricultural problems.", "आम्ही भारतातील शेतांमध्ये अत्याधुनिक लॉजिस्टिक्स आणि मोबाइल तंत्रज्ञान आणतो, जुन्या कृषी समस्या सोडवण्यासाठी.")}</p>
              </div>
              <div className="flex flex-col items-center text-center group">
                <div className="w-20 h-20 rounded-2xl bg-white dark:bg-slate-900/50 shadow-sm flex items-center justify-center text-secondary mb-6 group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                  <span className="material-symbols-outlined text-4xl" style={{fontVariationSettings: "'FILL' 1"}}>groups</span>
                </div>
                <h3 className="text-xl font-bold text-primary dark:text-emerald-50 mb-3">{langText("Community", "समुदाय")}</h3>
                <p className="text-on-surface-variant dark:text-slate-400">{langText("We are more than a marketplace; we are a support network for farmers and owners growing together.", "आम्ही फक्त बाजारपेठ नाही; आम्ही एकत्र वाढणाऱ्या शेतकरी आणि मालकांसाठी एक सहाय्य नेटवर्क आहोत.")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-24 px-6 bg-background dark:bg-slate-950">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
              <div className="max-w-xl">
                <h2 className="text-4xl font-extrabold text-primary dark:text-emerald-50 mb-4">{langText("Meet the People Behind the Platform", "व्यासपीठामागील लोकांना भेटा")}</h2>
                <p className="text-on-surface-variant dark:text-slate-400 text-lg">{langText("A diverse team of agronomists, technologists, and rural development experts dedicated to your success.", "कृषी शास्त्रज्ञ, तंत्रज्ञ आणि ग्रामीण विकास तज्ञांची विविध टीम तुमच्या यशासाठी समर्पित.")}</p>
              </div>
              <button className="flex items-center gap-2 text-secondary dark:text-amber-500 font-bold hover:gap-4 transition-all">
                {langText("View Open Roles", "रिक्त पदे पहा")} <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: langText("Founder & CEO", "संस्थापक व सीईओ"), role: langText("Agricultural Strategy", "कृषी धोरण"), img: "/assets/generated/seed_drill.png" },
                { title: langText("Chief Technology Officer", "मुख्य तंत्रज्ञान अधिकारी"), role: langText("Product & Logistics", "उत्पादन व लॉजिस्टिक्स"), img: "/assets/generated/seed_drill.png" },
                { title: langText("Head of Operations", "ऑपरेशन प्रमुख"), role: langText("Rural Network & Support", "ग्रामीण नेटवर्क व सपोर्ट"), img: "/assets/generated/seed_drill.png" },
                { title: langText("Lead Experience Designer", "मुख्य अनुभव डिझायनर"), role: langText("Farmer-Centric UX", "शेतकरी-केंद्रित UX"), img: "/assets/generated/seed_drill.png" },
              ].map((member) => (
                <div key={member.title} className="group">
                  <div className="aspect-[4/5] bg-surface-container-high dark:bg-slate-900/50 rounded-2xl overflow-hidden mb-6 relative">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt={member.title} src={member.img} />
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <h3 className="text-xl font-bold text-primary dark:text-emerald-50">{member.title}</h3>
                  <p className="text-on-surface-variant dark:text-slate-400">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact */}
        <section className="py-24 bg-white dark:bg-slate-950">
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-primary p-12 rounded-[40px] flex flex-col md:flex-row items-center gap-12 overflow-hidden relative">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-800/30 via-transparent to-transparent"></div>
              <div className="relative z-10 w-full md:w-1/2">
                <h2 className="text-4xl font-bold text-white mb-6">{langText("Our Impact in Numbers", "आकड्यांमधील आमचा प्रभाव")}</h2>
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <p className="text-primary-fixed text-4xl font-extrabold mb-1">50+</p>
                    <p className="text-emerald-100/60 font-medium">{langText("Districts Covered", "जिल्ह्यांमध्ये सेवा")}</p>
                  </div>
                  <div>
                    <p className="text-primary-fixed text-4xl font-extrabold mb-1">12k+</p>
                    <p className="text-emerald-100/60 font-medium">{langText("Verified Equipments", "सत्यापित उपकरणे")}</p>
                  </div>
                  <div>
                    <p className="text-primary-fixed text-4xl font-extrabold mb-1">85k+</p>
                    <p className="text-emerald-100/60 font-medium">{langText("Farmer Users", "शेतकरी वापरकर्ते")}</p>
                  </div>
                  <div>
                    <p className="text-primary-fixed text-4xl font-extrabold mb-1">20%</p>
                    <p className="text-emerald-100/60 font-medium">{langText("Avg. Cost Saving", "सरासरी खर्च बचत")}</p>
                  </div>
                </div>
              </div>
              <div className="relative z-10 w-full md:w-1/2">
                <div className="aspect-video bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img className="w-full h-full object-cover" alt="Multiple combines harvesting a golden grain field" src="/assets/generated/harvester_action.png" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
