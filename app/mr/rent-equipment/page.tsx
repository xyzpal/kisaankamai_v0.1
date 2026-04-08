import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function MR_RentEquipment() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">

{/*  Top Navigation Bar  */}

<main className="pt-24 pb-32">
{/*  Hero Section / Discovery Header  */}
<section className="px-8 max-w-screen-2xl mx-auto mt-8 mb-12">
<div className="relative rounded-[40px] overflow-hidden min-h-[400px] flex items-center p-12 bg-primary-container">
<img className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-overlay" data-alt="Premium close-up of a modern high-performance tractor in a sun-drenched Indian wheat field during golden hour, cinematic lighting" src="/assets/generated/seed_drill.png"/>
<div className="relative z-10 max-w-2xl">
<span className="marathi-font bg-orange-700 text-white px-4 py-1 rounded-full text-sm font-bold tracking-wide uppercase mb-4 inline-block">उच्च दर्जाची अवजारे</span>
<h1 className="marathi-font text-5xl md:text-6xl font-extrabold text-white leading-[1.2] mb-6">शेतीसाठी सर्वोत्तम अवजारे आता भाड्याने उपलब्ध</h1>
<p className="marathi-font text-xl text-emerald-50/80 mb-8 font-medium">तुमच्या शेतीच्या कामासाठी ट्रॅक्टर, हार्वेस्टर आणि इतर आधुनिक यंत्रे खात्रीशीर आणि योग्य दरात मिळवा.</p>
{/*  Quick Search Bar  */}
<div className="bg-white p-2 rounded-2xl flex flex-col md:flex-row gap-2 shadow-2xl">
<div className="flex-1 flex items-center px-4 gap-3 border-r border-slate-100">
<span className="material-symbols-outlined text-orange-700">location_on</span>
<input className="marathi-font w-full border-none focus:ring-0 text-on-surface py-3" placeholder="तुमचे स्थान निवडा" type="text"/>
</div>
<div className="flex-1 flex items-center px-4 gap-3">
<span className="material-symbols-outlined text-orange-700">agriculture</span>
<input className="marathi-font w-full border-none focus:ring-0 text-on-surface py-3" placeholder="कोणते अवजार हवे आहे?" type="text"/>
</div>
<button className="marathi-font bg-orange-700 text-white px-8 py-3 rounded-xl font-bold hover:bg-orange-800 transition-colors">
                            शोधा
                        </button>
</div>
</div>
</div>
</section>
{/*  Category Grid  */}
<section className="px-8 max-w-screen-2xl mx-auto mb-16">
<div className="flex justify-between items-end mb-8">
<div>
<h2 className="marathi-font text-3xl font-bold text-emerald-900">श्रेणीनुसार शोधा</h2>
<p className="marathi-font text-on-surface-variant mt-2 font-medium">तुमच्या कामासाठी योग्य गट निवडा</p>
</div>
<button className="marathi-font text-orange-700 font-bold flex items-center gap-2 hover:underline">
                    सर्व पहा <span className="material-symbols-outlined">arrow_forward</span>
</button>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
{/*  Category Card  */}
<div className="group cursor-pointer">
<div className="relative aspect-square rounded-3xl overflow-hidden mb-3 shadow-md group-hover:shadow-xl transition-all">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="Realistic close-up of a modern green tractor with large tires parked in a rural Indian farm setting, bright daylight" src="/assets/generated/seed_drill.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 to-transparent"></div>
<div className="absolute bottom-4 left-4 text-white">
<p className="marathi-font font-bold text-lg">ट्रॅक्टर</p>
</div>
</div>
</div>
{/*  Category Card  */}
<div className="group cursor-pointer">
<div className="relative aspect-square rounded-3xl overflow-hidden mb-3 shadow-md group-hover:shadow-xl transition-all">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="A massive combine harvester working in a golden grain field in Maharashtra, realistic agricultural photography" src="/assets/generated/harvester_action.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 to-transparent"></div>
<div className="absolute bottom-4 left-4 text-white">
<p className="marathi-font font-bold text-lg">हार्वेस्टर</p>
</div>
</div>
</div>
{/*  Category Card  */}
<div className="group cursor-pointer">
<div className="relative aspect-square rounded-3xl overflow-hidden mb-3 shadow-md group-hover:shadow-xl transition-all">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="Powerful tractor-mounted rotavator tilling dark rich soil in an Indian farm, focus on mechanical details" src="/assets/generated/rotavator.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 to-transparent"></div>
<div className="absolute bottom-4 left-4 text-white">
<p className="marathi-font font-bold text-lg">रोटाव्हेटर</p>
</div>
</div>
</div>
{/*  Category Card  */}
<div className="group cursor-pointer">
<div className="relative aspect-square rounded-3xl overflow-hidden mb-3 shadow-md group-hover:shadow-xl transition-all">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="Agricultural seed drill machine attached to a tractor in a plowed field ready for planting, clear rural background" src="/assets/generated/seed_drill.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 to-transparent"></div>
<div className="absolute bottom-4 left-4 text-white">
<p className="marathi-font font-bold text-lg">पेरणी यंत्र</p>
</div>
</div>
</div>
{/*  Category Card  */}
<div className="group cursor-pointer">
<div className="relative aspect-square rounded-3xl overflow-hidden mb-3 shadow-md group-hover:shadow-xl transition-all">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="Modern tractor-pulled spraying equipment in a lush green orchard, fine mist visible, professional farm lighting" src="/assets/generated/seed_drill.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 to-transparent"></div>
<div className="absolute bottom-4 left-4 text-white">
<p className="marathi-font font-bold text-lg">फवारणी यंत्र</p>
</div>
</div>
</div>
{/*  Category Card  */}
<div className="group cursor-pointer">
<div className="relative aspect-square rounded-3xl overflow-hidden mb-3 shadow-md group-hover:shadow-xl transition-all">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="Heavy duty agricultural trailer and transport equipment in a farmyard setting, high resolution mechanical details" src="/assets/generated/seed_drill.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 to-transparent"></div>
<div className="absolute bottom-4 left-4 text-white">
<p className="marathi-font font-bold text-lg">वाहतूक यंत्रे</p>
</div>
</div>
</div>
</div>
</section>
{/*  Main Discovery Section (Asymmetric Layout)  */}
<section className="px-8 max-w-screen-2xl mx-auto flex flex-col lg:flex-row gap-8">
{/*  Sidebar Filters  */}
<aside className="w-full lg:w-72 space-y-8">
<div className="bg-white p-6 rounded-[32px] shadow-sm border border-emerald-50">
<div className="flex justify-between items-center mb-6">
<h3 className="marathi-font font-bold text-xl text-emerald-900">फिल्टर्स</h3>
<button className="marathi-font text-sm text-orange-700 font-semibold">क्लियर</button>
</div>
<div className="space-y-6">
<div>
<label className="marathi-font block font-bold mb-3 text-emerald-900">किंमत (प्रति तास)</label>
<input className="w-full accent-orange-700" type="range"/>
<div className="flex justify-between text-xs font-bold text-emerald-800/60 mt-2">
<span>₹५००</span>
<span>₹५०००+</span>
</div>
</div>
<div className="pt-6 border-t border-emerald-50">
<label className="marathi-font block font-bold mb-3 text-emerald-900">ब्रँड</label>
<div className="space-y-2">
<label className="flex items-center gap-3 cursor-pointer group">
<input className="rounded border-emerald-200 text-emerald-700 focus:ring-emerald-500" type="checkbox"/>
<span className="marathi-font group-hover:text-emerald-700 transition-colors">महिंद्रा</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="rounded border-emerald-200 text-emerald-700 focus:ring-emerald-500" type="checkbox"/>
<span className="marathi-font group-hover:text-emerald-700 transition-colors">जॉन डियर</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="rounded border-emerald-200 text-emerald-700 focus:ring-emerald-500" type="checkbox"/>
<span className="marathi-font group-hover:text-emerald-700 transition-colors">स्वराज</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="rounded border-emerald-200 text-emerald-700 focus:ring-emerald-500" type="checkbox"/>
<span className="marathi-font group-hover:text-emerald-700 transition-colors">मॅसी फर्ग्युसन</span>
</label>
</div>
</div>
</div>
</div>
<div className="bg-orange-50 p-6 rounded-[32px] border border-orange-100">
<h4 className="marathi-font font-bold text-lg text-orange-900 mb-2">मदत हवी आहे?</h4>
<p className="marathi-font text-orange-800/80 text-sm mb-4 leading-relaxed">तुमच्या शेतीसाठी कोणते यंत्र योग्य आहे हे ठरवण्यासाठी आमच्या तज्ञांशी संपर्क साधा.</p>
<button className="marathi-font w-full bg-orange-700 text-white py-3 rounded-2xl font-bold flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-sm">call</span>
                        कॉल करा
                    </button>
</div>
</aside>
{/*  Results Grid  */}
<div className="flex-1">
<div className="flex justify-between items-center mb-8">
<p className="marathi-font text-emerald-900/60 font-medium">तुमच्या परिसरातील <span className="text-emerald-900 font-bold">१२८</span> अवजारे सापडली</p>
<div className="flex items-center gap-2">
<span className="marathi-font text-sm text-emerald-900 font-medium">क्रमवारी:</span>
<select className="marathi-font bg-transparent border-none focus:ring-0 font-bold text-emerald-900 cursor-pointer">
<option>लोकप्रियता</option>
<option>कमी किंमत</option>
<option>जास्त रेटिंग</option>
</select>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
{/*  Product Card  */}
<div className="bg-white rounded-[32px] p-4 shadow-sm border border-emerald-50 hover:shadow-xl transition-shadow group">
<div className="relative h-64 rounded-2xl overflow-hidden mb-4">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Side profile of a red Mahindra tractor in pristine condition, shot in a sunlit village farmyard, high-end commercial quality" src="/assets/generated/seed_drill.png"/>
<div className="absolute top-4 left-4 flex gap-2">
<span className="marathi-font bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-emerald-900">५५ HP</span>
<span className="marathi-font bg-orange-700 px-3 py-1 rounded-full text-xs font-bold text-white shadow-lg">पॉप्युलर</span>
</div>
<button className="absolute top-4 right-4 bg-white/90 backdrop-blur-md p-2 rounded-full text-emerald-900 hover:text-red-500 transition-colors">
<span className="material-symbols-outlined">favorite</span>
</button>
</div>
<div className="px-2">
<div className="flex justify-between items-start mb-2">
<h3 className="marathi-font text-xl font-bold text-emerald-900">महिंद्रा अर्जुन ५५५ DI</h3>
<div className="flex items-center text-amber-500">
<span className="material-symbols-outlined text-sm" style={{'fontVariationSettings': '\'FILL\' 1'}}>star</span>
<span className="text-sm font-bold ml-1 text-emerald-900">४.९</span>
</div>
</div>
<div className="flex items-center gap-2 text-on-surface-variant mb-4">
<span className="material-symbols-outlined text-sm">location_on</span>
<span className="marathi-font text-sm font-medium">संगमनेर, अहमदनगर</span>
</div>
<div className="flex items-center justify-between pt-4 border-t border-emerald-50">
<div>
<p className="marathi-font text-xs text-on-surface-variant font-bold">भाडे (प्रति तास)</p>
<p className="marathi-font text-2xl font-black text-emerald-900">₹८००</p>
</div>
<button className="marathi-font bg-slate-900 text-white px-6 py-3 rounded-2xl font-bold hover:bg-emerald-800 transition-colors">
                                    बुक करा
                                </button>
</div>
</div>
</div>
{/*  Product Card  */}
<div className="bg-white rounded-[32px] p-4 shadow-sm border border-emerald-50 hover:shadow-xl transition-shadow group">
<div className="relative h-64 rounded-2xl overflow-hidden mb-4">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Modern green John Deere tractor with rotavator attachment, parked in a lush farmland in Maharashtra, bright afternoon light" src="/assets/generated/rotavator.png"/>
<div className="absolute top-4 left-4 flex gap-2">
<span className="marathi-font bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-emerald-900">५० HP</span>
</div>
<button className="absolute top-4 right-4 bg-white/90 backdrop-blur-md p-2 rounded-full text-emerald-900 hover:text-red-500 transition-colors">
<span className="material-symbols-outlined">favorite</span>
</button>
</div>
<div className="px-2">
<div className="flex justify-between items-start mb-2">
<h3 className="marathi-font text-xl font-bold text-emerald-900">जॉन डियर ५०५० D</h3>
<div className="flex items-center text-amber-500">
<span className="material-symbols-outlined text-sm" style={{'fontVariationSettings': '\'FILL\' 1'}}>star</span>
<span className="text-sm font-bold ml-1 text-emerald-900">४.८</span>
</div>
</div>
<div className="flex items-center gap-2 text-on-surface-variant mb-4">
<span className="material-symbols-outlined text-sm">location_on</span>
<span className="marathi-font text-sm font-medium">सिन्नर, नाशिक</span>
</div>
<div className="flex items-center justify-between pt-4 border-t border-emerald-50">
<div>
<p className="marathi-font text-xs text-on-surface-variant font-bold">भाडे (प्रति तास)</p>
<p className="marathi-font text-2xl font-black text-emerald-900">₹९५०</p>
</div>
<button className="marathi-font bg-slate-900 text-white px-6 py-3 rounded-2xl font-bold hover:bg-emerald-800 transition-colors">
                                    बुक करा
                                </button>
</div>
</div>
</div>
{/*  Product Card (Compact for Grid variation)  */}
<div className="bg-white rounded-[32px] p-4 shadow-sm border border-emerald-50 hover:shadow-xl transition-shadow group">
<div className="relative h-64 rounded-2xl overflow-hidden mb-4">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Massive combine harvester in field, realistic professional agricultural equipment photography, golden hour" src="/assets/generated/harvester_action.png"/>
<div className="absolute top-4 left-4 flex gap-2">
<span className="marathi-font bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-emerald-900">हार्वेस्टर</span>
</div>
</div>
<div className="px-2">
<div className="flex justify-between items-start mb-2">
<h3 className="marathi-font text-xl font-bold text-emerald-900">विशाल हार्वेस्टर ७०५</h3>
<div className="flex items-center text-amber-500">
<span className="material-symbols-outlined text-sm" style={{'fontVariationSettings': '\'FILL\' 1'}}>star</span>
<span className="text-sm font-bold ml-1 text-emerald-900">४.७</span>
</div>
</div>
<div className="flex items-center justify-between pt-4 border-t border-emerald-50">
<div>
<p className="marathi-font text-xs text-on-surface-variant font-bold">भाडे (प्रति तास)</p>
<p className="marathi-font text-2xl font-black text-emerald-900">₹२,२००</p>
</div>
<button className="marathi-font bg-slate-900 text-white px-6 py-3 rounded-2xl font-bold hover:bg-emerald-800 transition-colors">
                                    बुक करा
                                </button>
</div>
</div>
</div>
{/*  Product Card  */}
<div className="bg-white rounded-[32px] p-4 shadow-sm border border-emerald-50 hover:shadow-xl transition-shadow group">
<div className="relative h-64 rounded-2xl overflow-hidden mb-4">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Heavy duty rotary tiller attachment on a tractor, detailed mechanical shot in a field environment" src="/assets/generated/rotavator.png"/>
<div className="absolute top-4 left-4 flex gap-2">
<span className="marathi-font bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-emerald-900">रोटाव्हेटर</span>
</div>
</div>
<div className="px-2">
<div className="flex justify-between items-start mb-2">
<h3 className="marathi-font text-xl font-bold text-emerald-900">शक्तीमान ४ फूट रोटाव्हेटर</h3>
<div className="flex items-center text-amber-500">
<span className="material-symbols-outlined text-sm" style={{'fontVariationSettings': '\'FILL\' 1'}}>star</span>
<span className="text-sm font-bold ml-1 text-emerald-900">५.०</span>
</div>
</div>
<div className="flex items-center justify-between pt-4 border-t border-emerald-50">
<div>
<p className="marathi-font text-xs text-on-surface-variant font-bold">भाडे (प्रति तास)</p>
<p className="marathi-font text-2xl font-black text-emerald-900">₹४५०</p>
</div>
<button className="marathi-font bg-slate-900 text-white px-6 py-3 rounded-2xl font-bold hover:bg-emerald-800 transition-colors">
                                    बुक करा
                                </button>
</div>
</div>
</div>
</div>
{/*  Pagination  */}
<div className="mt-12 flex justify-center items-center gap-4">
<button className="w-12 h-12 rounded-full border border-emerald-100 flex items-center justify-center text-emerald-900 hover:bg-emerald-50">
<span className="material-symbols-outlined">chevron_left</span>
</button>
<button className="w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold">१</button>
<button className="w-12 h-12 rounded-full border border-emerald-100 flex items-center justify-center text-emerald-900 hover:bg-emerald-50 font-bold">२</button>
<button className="w-12 h-12 rounded-full border border-emerald-100 flex items-center justify-center text-emerald-900 hover:bg-emerald-50 font-bold">३</button>
<button className="w-12 h-12 rounded-full border border-emerald-100 flex items-center justify-center text-emerald-900 hover:bg-emerald-50">
<span className="material-symbols-outlined">chevron_right</span>
</button>
</div>
</div>
</section>
</main>
{/*  Footer  */}

{/*  Bottom Navigation Bar (Mobile only)  */}


      </main>
      <Footer />
    </div>
  );
}
