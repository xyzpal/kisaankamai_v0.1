import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function MR_ListEquipment() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">

{/*  Top Navigation Shell  */}

<main className="pt-20">
{/*  Hero Section  */}
<section className="relative h-[600px] flex items-center overflow-hidden">
<div className="absolute inset-0 z-0">
<img alt="Agricultural Equipment" className="w-full h-full object-cover" data-alt="Modern powerful tractor parked in a vibrant green Indian farm field during late afternoon golden hour lighting with realistic textures" src="/assets/generated/seed_drill.png"/>
<div className="absolute inset-0 bg-gradient-to-r from-emerald-950/90 via-emerald-950/60 to-transparent"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
<div className="max-w-2xl">
<span className="inline-block px-3 py-1 bg-secondary text-white text-xs font-bold rounded mb-6 tracking-widest uppercase">अवजार मालकांसाठी</span>
<h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6 font-headline">
                        तुमची अवजारे, तुमचे <span className="text-secondary-container">अतिरिक्त उत्पन्न.</span>
</h1>
<p className="text-xl text-emerald-50/90 mb-10 leading-relaxed font-body">
                        तुमच्या ट्रॅक्टर आणि शेती उपकरणांची नोंदणी करा आणि रिकाम्या वेळेत सुरक्षितपणे भाडे मिळवा. खऱ्या शेतकऱ्यांशी जोडून आपला व्यवसाय वाढवा.
                    </p>
<div className="flex flex-wrap gap-4">
<button className="px-8 py-4 bg-secondary text-white rounded-lg font-bold text-lg shadow-xl hover:bg-secondary/90 transition-all flex items-center gap-3">
                            नोंदणी सुरू करा
                            <span className="material-symbols-outlined">arrow_forward</span>
</button>
<button className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-lg font-bold text-lg hover:bg-white/20 transition-all">
                            कसे कार्य करते ते पहा
                        </button>
</div>
</div>
</div>
</section>
{/*  Earnings Bento Grid  */}
<section className="py-24 bg-surface">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-extrabold text-primary mb-4 font-headline">मालक म्हणून मिळणारे फायदे</h2>
<p className="text-slate-600 max-w-2xl mx-auto">किसान कमाई प्लॅटफॉर्मवर आपली उपकरणे सुरक्षितपणे भाड्याने देण्याचे तीन मुख्य आधार.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto">
{/*  Feature 1  */}
<div className="md:col-span-7 bg-white p-10 rounded-2xl shadow-sm border border-emerald-50 flex flex-col justify-between group">
<div className="mb-8">
<div className="w-14 h-14 bg-emerald-50 text-emerald-700 rounded-xl flex items-center justify-center mb-6">
<span className="material-symbols-outlined text-3xl">verified_user</span>
</div>
<h3 className="text-2xl font-bold text-primary mb-4">पूर्णतः सुरक्षित व्यवहार</h3>
<p className="text-slate-600 leading-relaxed text-lg">
                                प्रत्येक भाडेकरूची पडताळणी केली जाते. व्यवहाराची सुरक्षितता आणि वेळेवर पेमेंट ही आमची जबाबदारी आहे, जेणेकरून तुम्ही निश्चिंत राहू शकता.
                            </p>
</div>
<div className="relative rounded-xl overflow-hidden h-48 mt-4">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="Two Indian farmers smiling and shaking hands in a rural landscape, representing trust and business partnership" src="/assets/generated/seed_drill.png"/>
</div>
</div>
{/*  Feature 2  */}
<div className="md:col-span-5 bg-primary-container p-10 rounded-2xl shadow-sm flex flex-col text-white">
<div className="w-14 h-14 bg-white/10 text-white rounded-xl flex items-center justify-center mb-6">
<span className="material-symbols-outlined text-3xl">monitoring</span>
</div>
<h3 className="text-2xl font-bold mb-4">उत्पन्नाचा अचूक मागोवा</h3>
<p className="text-emerald-100/80 leading-relaxed mb-8">
                            तुमच्या अवजारांनी किती कमाई केली, किती बुकिंग्स पूर्ण झाले, हे सर्व तुम्ही एका साध्या डॅशबोर्डवर पाहू शकता.
                        </p>
<div className="mt-auto space-y-4">
<div className="flex justify-between items-center p-4 bg-white/5 rounded-lg border border-white/10">
<span className="text-sm">एकूण बुकिंग्स</span>
<span className="font-bold text-secondary-container">१५+</span>
</div>
<div className="flex justify-between items-center p-4 bg-white/5 rounded-lg border border-white/10">
<span className="text-sm">पेमेंट स्टेटस</span>
<span className="font-bold text-emerald-400">यशस्वी</span>
</div>
</div>
</div>
{/*  Feature 3  */}
<div className="md:col-span-12 lg:col-span-4 bg-white p-8 rounded-2xl shadow-sm border border-emerald-50">
<div className="w-12 h-12 bg-tertiary-fixed text-on-tertiary-fixed-variant rounded-lg flex items-center justify-center mb-6">
<span className="material-symbols-outlined">schedule</span>
</div>
<h3 className="text-xl font-bold text-primary mb-3">लवचिक वेळापत्रक</h3>
<p className="text-slate-600">तुमचे अवजार केव्हा उपलब्ध असेल आणि केव्हा नाही, हे तुम्ही स्वतः ठरवू शकता. पूर्ण नियंत्रण तुमच्या हातात.</p>
</div>
{/*  Feature 4  */}
<div className="md:col-span-6 lg:col-span-4 bg-white p-8 rounded-2xl shadow-sm border border-emerald-50">
<div className="w-12 h-12 bg-secondary-fixed text-on-secondary-fixed-variant rounded-lg flex items-center justify-center mb-6">
<span className="material-symbols-outlined">support_agent</span>
</div>
<h3 className="text-xl font-bold text-primary mb-3">ग्राहक सहाय्य</h3>
<p className="text-slate-600">काही अडचण आल्यास आमची टीम तुमच्या मदतीसाठी सदैव उपलब्ध आहे. मराठीत संवाद साधून समस्या सोडवा.</p>
</div>
{/*  Feature 5  */}
<div className="md:col-span-6 lg:col-span-4 bg-white p-8 rounded-2xl shadow-sm border border-emerald-50">
<div className="w-12 h-12 bg-primary-fixed text-on-primary-fixed-variant rounded-lg flex items-center justify-center mb-6">
<span className="material-symbols-outlined">distance</span>
</div>
<h3 className="text-xl font-bold text-primary mb-3">स्थानिक ग्राहक</h3>
<p className="text-slate-600">तुमच्या आजूबाजूच्या गावातील शेतकऱ्यांकडून बुकिंग मिळवा, ज्यामुळे वाहतुकीचा त्रास आणि खर्च वाचतो.</p>
</div>
</div>
</div>
</section>
{/*  Equipment Categories for Listing  */}
<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div className="max-w-2xl">
<h2 className="text-3xl font-extrabold text-primary mb-4 font-headline">कोणती उपकरणे तुम्ही नोंदवू शकता?</h2>
<p className="text-slate-600">तुमच्याकडे खालीलपैकी कोणतीही अवजारे असल्यास आजच नोंदणी करा.</p>
</div>
</div>
<div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
{/*  Category 1  */}
<div className="group cursor-pointer">
<div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-4 shadow-md">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="Close up of a heavy duty agricultural harvester machine in a field, highly detailed and professional photography" src="/assets/generated/harvester_action.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
<div className="absolute bottom-6 left-6 text-white">
<h4 className="text-xl font-bold">हार्वेस्टर</h4>
<p className="text-xs text-white/70 uppercase tracking-widest mt-1">Harvesters</p>
</div>
</div>
</div>
{/*  Category 2  */}
<div className="group cursor-pointer">
<div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-4 shadow-md">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="Powerful tractor pulling a rotavator implement through rich soil on an Indian farm, low angle shot" src="/assets/generated/rotavator.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
<div className="absolute bottom-6 left-6 text-white">
<h4 className="text-xl font-bold">रोटाव्हेटर</h4>
<p className="text-xs text-white/70 uppercase tracking-widest mt-1">Rotavators</p>
</div>
</div>
</div>
{/*  Category 3  */}
<div className="group cursor-pointer">
<div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-4 shadow-md">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="Automatic seed drill machine attached to a tractor in a sunlit field, focus on mechanical details" src="/assets/generated/seed_drill.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
<div className="absolute bottom-6 left-6 text-white">
<h4 className="text-xl font-bold">पेरणी यंत्रे</h4>
<p className="text-xs text-white/70 uppercase tracking-widest mt-1">Seeders</p>
</div>
</div>
</div>
{/*  Category 4  */}
<div className="group cursor-pointer">
<div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-4 shadow-md">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="Modern crop sprayer equipment being prepared in an agricultural field, professional and clean look" src="/assets/generated/seed_drill.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
<div className="absolute bottom-6 left-6 text-white">
<h4 className="text-xl font-bold">फवारणी यंत्रे</h4>
<p className="text-xs text-white/70 uppercase tracking-widest mt-1">Sprayers</p>
</div>
</div>
</div>
</div>
</div>
</section>
{/*  Final CTA Section  */}
<section className="py-20 relative overflow-hidden bg-primary-container text-white">
<div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
<img className="w-full h-full object-cover grayscale" data-alt="Abstract patterns in a tilled field from top view, organic and geometric farming textures" src="/assets/generated/rotavator.png"/>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
<div className="max-w-2xl">
<h2 className="text-4xl font-extrabold mb-6 font-headline leading-tight">तुमच्या व्यवसायाची नवी सुरुवात आजच करा!</h2>
<p className="text-emerald-100/90 text-lg mb-8">नोंदणी प्रक्रिया अत्यंत सोपी आहे. अवघ्या ५ मिनिटांत तुम्ही आपले पहिले अवजार लिस्ट करू शकता.</p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="px-10 py-5 bg-secondary text-white rounded-xl font-bold text-xl shadow-2xl hover:bg-secondary/90 hover:-translate-y-1 transition-all">नोंदणी सुरू करा</button>
<button className="px-10 py-5 bg-white text-primary rounded-xl font-bold text-xl hover:bg-emerald-50 transition-all">प्रतिनिधीशी बोला</button>
</div>
</div>
<div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl max-w-sm">
<div className="flex gap-2 mb-6">
<span className="material-symbols-outlined text-tertiary-fixed text-3xl">star</span>
<span className="material-symbols-outlined text-tertiary-fixed text-3xl">star</span>
<span className="material-symbols-outlined text-tertiary-fixed text-3xl">star</span>
<span className="material-symbols-outlined text-tertiary-fixed text-3xl">star</span>
<span className="material-symbols-outlined text-tertiary-fixed text-3xl">star</span>
</div>
<p className="text-emerald-50 text-lg italic mb-6">"किसान कमाईमुळे माझ्या ट्रॅक्टरचा वापर वाढला आणि मला घरबसल्या खात्रीशीर भाडे मिळू लागले."</p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-emerald-700"></div>
<div>
<p className="font-bold">सतीश कुलकर्णी</p>
<p className="text-emerald-300 text-sm">ट्रॅक्टर मालक, सातारा</p>
</div>
</div>
</div>
</div>
</section>
</main>
{/*  Footer Shell  */}


      </main>
      <Footer />
    </div>
  );
}
