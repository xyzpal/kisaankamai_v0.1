"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/components/LanguageContext";

export default function SupportPage() {
  const { langText } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col bg-surface text-on-surface antialiased font-body dark:bg-slate-950">
      <Header />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section 
          className="py-24 px-6 relative" 
          style={{
            backgroundImage: "linear-gradient(to bottom, rgba(20, 59, 46, 0.95), rgba(20, 59, 46, 0.85)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuCmyveS_0x4A8aBJ57EMa1ZpTZdnBo1VRQE77_TS2IUSUPDSgng2_CNZCgntW9YE-o1YgtgB-ugVk9URnV2No0KRmXF-unoyuMHPqZiI007rDW3gDvnUKvpJGjo8a31EBkROaTlqafqHJnpCedZNyBm-NvnzLSseztMJcLndLmGT6J3A6l0m8G1cfCe9efZsOpuMzks4ldnvhn63IEM_Ct2i8OE5vbvd65F4b0LZOfuazJyC9-6UWpl3GVPIRMIXYyoSsN-beFw0XUp')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-3">
              <h1 className="text-4xl md:text-6xl font-extrabold text-white font-headline tracking-tight">
                {langText("Support", "मदत केंद्र")}
              </h1>
              <p className="text-xl text-emerald-50 font-medium opacity-90">
                {langText("Get help, report issues, and find answers quickly", "मदत मिळवा, समस्या कळवा आणि उत्तरे शोधा.")}
              </p>
            </div>
            <div className="relative max-w-2xl mx-auto">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-primary-container/60 dark:text-slate-400">search</span>
              <input 
                className="w-full pl-12 pr-6 py-5 rounded-2xl border-none shadow-2xl focus:ring-4 focus:ring-on-tertiary-container/30 dark:bg-slate-800 dark:text-white dark:placeholder-slate-400 text-lg placeholder-slate-400 transition-all outline-none" 
                placeholder={langText("Search for help topics", "मदत विषय शोधा")} 
                type="text" 
              />
            </div>
          </div>
        </section>

        {/* Section 1: Quick Help Cards */}
        <section className="py-16 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-sm border border-emerald-50 dark:border-slate-800 hover:shadow-md transition-shadow group">
              <div className="w-12 h-12 bg-emerald-50 dark:bg-emerald-900/40 rounded-lg flex items-center justify-center text-primary-container dark:text-emerald-400 mb-6 group-hover:bg-primary-container group-hover:text-white transition-colors">
                <span className="material-symbols-outlined">account_circle</span>
              </div>
              <h3 className="font-bold text-lg mb-2 dark:text-slate-100">Account & Login</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                <span className="font-bold dark:text-slate-300">खाते आणि लॉगिन:</span> Manage password, profile, and verification settings.
              </p>
            </div>
            <div className="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-sm border border-emerald-50 dark:border-slate-800 hover:shadow-md transition-shadow group">
              <div className="w-12 h-12 bg-emerald-50 dark:bg-emerald-900/40 rounded-lg flex items-center justify-center text-primary-container dark:text-emerald-400 mb-6 group-hover:bg-primary-container group-hover:text-white transition-colors">
                <span className="material-symbols-outlined">agriculture</span>
              </div>
              <h3 className="font-bold text-lg mb-2 dark:text-slate-100">Listing & Equipment</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                <span className="font-bold dark:text-slate-300">यादी आणि उपकरणे:</span> Help with adding machinery and managing availability.
              </p>
            </div>
            <div className="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-sm border border-emerald-50 dark:border-slate-800 hover:shadow-md transition-shadow group">
              <div className="w-12 h-12 bg-emerald-50 dark:bg-emerald-900/40 rounded-lg flex items-center justify-center text-primary-container dark:text-emerald-400 mb-6 group-hover:bg-primary-container group-hover:text-white transition-colors">
                <span className="material-symbols-outlined">verified_user</span>
              </div>
              <h3 className="font-bold text-lg mb-2 dark:text-slate-100">Trust & Safety</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                <span className="font-bold dark:text-slate-300">विश्वास आणि सुरक्षा:</span> Verification process, safety tips, and dispute resolution.
              </p>
            </div>
            <div className="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-sm border border-emerald-50 dark:border-slate-800 hover:shadow-md transition-shadow group">
              <div className="w-12 h-12 bg-emerald-50 dark:bg-emerald-900/40 rounded-lg flex items-center justify-center text-primary-container dark:text-emerald-400 mb-6 group-hover:bg-primary-container group-hover:text-white transition-colors">
                <span className="material-symbols-outlined">contact_support</span>
              </div>
              <h3 className="font-bold text-lg mb-2 dark:text-slate-100">Contact Support</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                <span className="font-bold dark:text-slate-300">समर्थनाशी संपर्क साधा:</span> Reach out to our human agents for complex issues.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2 & 3: Popular Topics & FAQ */}
        <section className="py-16 bg-surface-container-low dark:bg-slate-900/50 px-6 border-y border-outline-variant/20 dark:border-slate-800/50">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12">
            {/* Popular Topics */}
            <div className="lg:col-span-1 space-y-6">
              <h2 className="text-2xl font-extrabold text-primary-container dark:text-emerald-400 font-headline">
                {langText("Popular Topics", "लोकप्रिय विषय")}
              </h2>
              <ul className="space-y-4">
                <li>
                  <a className="flex items-center p-4 bg-white dark:bg-slate-800 rounded-lg border border-transparent dark:border-slate-700 hover:text-secondary-container transition-colors group" href="#">
                    <span className="material-symbols-outlined mr-3 text-slate-400 dark:text-slate-500">trending_up</span>
                    <span className="dark:text-slate-200">{langText("How to complete profile setup", "प्रोफाइल कसे पूर्ण करावे")}</span>
                  </a>
                </li>
                <li>
                  <a className="flex items-center p-4 bg-white dark:bg-slate-800 rounded-lg border border-transparent dark:border-slate-700 hover:text-secondary-container transition-colors group" href="#">
                    <span className="material-symbols-outlined mr-3 text-slate-400 dark:text-slate-500">search</span>
                    <span className="dark:text-slate-200">{langText("Finding equipment near you", "जवळची उपकरणे शोधणे")}</span>
                  </a>
                </li>
                <li>
                  <a className="flex items-center p-4 bg-white dark:bg-slate-800 rounded-lg border border-transparent dark:border-slate-700 hover:text-secondary-container transition-colors group" href="#">
                    <span className="material-symbols-outlined mr-3 text-slate-400 dark:text-slate-500">report_problem</span>
                    <span className="dark:text-slate-200">{langText("Reporting suspicious activity", "संशयास्पद हालचालींची तक्रार")}</span>
                  </a>
                </li>
                <li>
                  <a className="flex items-center p-4 bg-white dark:bg-slate-800 rounded-lg border border-transparent dark:border-slate-700 hover:text-secondary-container transition-colors group" href="#">
                    <span className="material-symbols-outlined mr-3 text-slate-400 dark:text-slate-500">payments</span>
                    <span className="dark:text-slate-200">{langText("Payment methods and security", "पेमेंट पद्धती आणि सुरक्षा")}</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* FAQ Accordion */}
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-2xl font-extrabold text-primary-container dark:text-emerald-400 font-headline">
                {langText("FAQs", "वारंवार विचारले जाणारे प्रश्न")}
              </h2>
              <div className="space-y-4">
                <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 overflow-hidden text-left">
                  <div className="w-full flex items-center justify-between p-5 font-bold text-on-surface dark:text-slate-100">
                    <span>{langText("How do I rent equipment on Kisan Kamai?", "मी किसान कमाईवर उपकरणे कशी भाड्याने घेऊ शकतो?")}</span>
                  </div>
                  <div className="px-5 pb-5 text-slate-600 dark:text-slate-400 text-sm leading-relaxed border-t border-slate-50 dark:border-slate-700/50 pt-4">
                    {langText(
                      "Browse categories like tractors or harvesters, select your location, view available listings, and click 'Book Now' to send a request to the owner.",
                      "ट्रॅक्टर किंवा हार्वेस्टर यांसारख्या श्रेणी ब्राउझ करा, तुमचे स्थान निवडा, उपलब्ध याद्या पहा आणि मालकाला विनंती पाठवण्यासाठी 'Book Now' वर क्लिक करा."
                    )}
                  </div>
                </div>

                <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 overflow-hidden text-left">
                  <div className="w-full flex items-center justify-between p-5 font-bold text-on-surface dark:text-slate-100">
                    <span>{langText("Is my payment secure?", "माझे पेमेंट सुरक्षित आहे का?")}</span>
                  </div>
                  <div className="px-5 pb-5 text-slate-600 dark:text-slate-400 text-sm leading-relaxed border-t border-slate-50 dark:border-slate-700/50 pt-4">
                    {langText(
                      "Yes, Kisan Kamai uses encrypted gateways. We hold funds in escrow until the service is confirmed.",
                      "होय, किसान कमाई एनक्रिप्टेड गेटवे वापरते. सेवा निश्चित होईपर्यंत आम्ही निधी एस्क्रोमध्ये ठेवतो."
                    )}
                  </div>
                </div>

                <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 overflow-hidden text-left">
                  <div className="w-full flex items-center justify-between p-5 font-bold text-on-surface dark:text-slate-100">
                    <span>{langText("How to verify a machinery owner?", "यंत्रसामग्री मालकाची पडताळणी कशी करावी?")}</span>
                  </div>
                  <div className="px-5 pb-5 text-slate-600 dark:text-slate-400 text-sm leading-relaxed border-t border-slate-50 dark:border-slate-700/50 pt-4">
                    {langText(
                      "Look for the 'Verified' badge on the profile. We check identity and address proofs of all listed owners.",
                      "प्रोफाइलवरील 'Verified' बॅज पहा. आम्ही सर्व सूचीबद्ध मालकांची ओळख आणि पत्त्याचे पुरावे तपासतो."
                    )}
                  </div>
                </div>

                <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 overflow-hidden text-left">
                  <div className="w-full flex items-center justify-between p-5 font-bold text-on-surface dark:text-slate-100">
                    <span>{langText("What if the machine breaks down?", "मशीन खराब झाल्यास काय करावे?")}</span>
                  </div>
                  <div className="px-5 pb-5 text-slate-600 dark:text-slate-400 text-sm leading-relaxed border-t border-slate-50 dark:border-slate-700/50 pt-4">
                    {langText(
                      "Contact the owner immediately through the app and report it to our support team for documentation.",
                      "ॲपद्वारे त्वरित मालकाशी संपर्क साधा आणि कागदपत्रांसाठी आमच्या सपोर्ट टीमला कळवा."
                    )}
                  </div>
                </div>

                <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 overflow-hidden text-left">
                  <div className="w-full flex items-center justify-between p-5 font-bold text-on-surface dark:text-slate-100">
                    <span>{langText("Can I cancel a booking?", "मी बुकिंग रद्द करू शकतो का?")}</span>
                  </div>
                  <div className="px-5 pb-5 text-slate-600 dark:text-slate-400 text-sm leading-relaxed border-t border-slate-50 dark:border-slate-700/50 pt-4">
                    {langText(
                      "Yes, cancellations are allowed as per the owner's policy stated on the listing page.",
                      "होय, सूची पृष्ठावर नमूद केलेल्या मालकाच्या धोरणानुसार रद्दीकरणास अनुमती आहे."
                    )}
                  </div>
                </div>

                <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 overflow-hidden text-left">
                  <div className="w-full flex items-center justify-between p-5 font-bold text-on-surface dark:text-slate-100">
                    <span>{langText("Listing support for owners", "मालकांसाठी सूची समर्थन")}</span>
                  </div>
                  <div className="px-5 pb-5 text-slate-600 dark:text-slate-400 text-sm leading-relaxed border-t border-slate-50 dark:border-slate-700/50 pt-4">
                    {langText(
                      "Navigate to 'List Equipment', upload photos, and set your price. Contact our help desk for bulk listings.",
                      "'List Equipment' वर जा, फोटो अपलोड करा आणि तुमची किंमत सेट करा. मोठ्या प्रमाणात सूचीसाठी आमच्या मदत केंद्राशी संपर्क साधा."
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Contact Channels */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <h2 className="text-3xl font-extrabold text-primary-container dark:text-emerald-400 font-headline text-center mb-12">
            {langText("Contact Channels", "संपर्क माध्यमे")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white dark:bg-slate-900 border-2 border-emerald-50 dark:border-slate-800 p-6 rounded-2xl flex flex-col items-center text-center hover:border-emerald-200 dark:hover:border-slate-600 transition-colors">
              <div className="w-16 h-16 bg-emerald-50 dark:bg-emerald-900/40 rounded-full flex items-center justify-center text-emerald-700 dark:text-emerald-400 mb-4">
                <span className="material-symbols-outlined text-3xl">chat</span>
              </div>
              <h4 className="font-bold mb-1 dark:text-slate-100">WhatsApp Support</h4>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">Quick chats for general queries.</p>
              <a className="text-emerald-700 dark:text-emerald-400 font-bold hover:underline" href="#">+91 98765 43210</a>
            </div>
            <div className="bg-white dark:bg-slate-900 border-2 border-emerald-50 dark:border-slate-800 p-6 rounded-2xl flex flex-col items-center text-center hover:border-emerald-200 dark:hover:border-slate-600 transition-colors">
              <div className="w-16 h-16 bg-emerald-50 dark:bg-emerald-900/40 rounded-full flex items-center justify-center text-emerald-700 dark:text-emerald-400 mb-4">
                <span className="material-symbols-outlined text-3xl">mail</span>
              </div>
              <h4 className="font-bold mb-1 dark:text-slate-100">Email Desk</h4>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">Official documentation & support.</p>
              <a className="text-emerald-700 dark:text-emerald-400 font-bold hover:underline" href="mailto:support@kisankamai.com">support@kisankamai.com</a>
            </div>
            <div className="bg-white dark:bg-slate-900 border-2 border-emerald-50 dark:border-slate-800 p-6 rounded-2xl flex flex-col items-center text-center hover:border-emerald-200 dark:hover:border-slate-600 transition-colors">
              <div className="w-16 h-16 bg-emerald-50 dark:bg-emerald-900/40 rounded-full flex items-center justify-center text-emerald-700 dark:text-emerald-400 mb-4">
                <span className="material-symbols-outlined text-3xl">call</span>
              </div>
              <h4 className="font-bold mb-1 dark:text-slate-100">Direct Call</h4>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">Mon-Sat, 9 AM to 6 PM IST.</p>
              <a className="text-emerald-700 dark:text-emerald-400 font-bold hover:underline" href="tel:1800123456">1800-123-456</a>
            </div>
            <div className="bg-white dark:bg-slate-900 border-2 border-emerald-50 dark:border-slate-800 p-6 rounded-2xl flex flex-col items-center text-center hover:border-emerald-200 dark:hover:border-slate-600 transition-colors">
              <div className="w-16 h-16 bg-emerald-50 dark:bg-emerald-900/40 rounded-full flex items-center justify-center text-emerald-700 dark:text-emerald-400 mb-4">
                <span className="material-symbols-outlined text-3xl">assignment</span>
              </div>
              <h4 className="font-bold mb-1 dark:text-slate-100">Raise Request</h4>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">Formal ticket for issue tracking.</p>
              <a className="text-emerald-700 dark:text-emerald-400 font-bold hover:underline" href="#form">Open Ticket</a>
            </div>
          </div>
        </section>

        {/* Section 5: Report a Concern */}
        <section className="py-16 bg-primary-container dark:bg-emerald-950 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-10">
              <h2 className="text-3xl font-extrabold text-white font-headline">
                {langText("Report a Concern", "तक्रार नोंदवा")}
              </h2>
              <p className="text-emerald-100 opacity-80 mt-2">
                {langText("We take safety seriously. Tell us if something isn't right.", "आम्ही सुरक्षिततेची काळजी घेतो. काही चुकीचे असल्यास आम्हाला सांगा.")}
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/10 dark:bg-slate-900/30 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/20 dark:hover:bg-slate-900/50 transition-all cursor-pointer group">
                <span className="material-symbols-outlined text-tertiary-fixed-dim text-4xl mb-4">person_cancel</span>
                <h4 className="text-white font-bold text-xl mb-2">Report a User</h4>
                <p className="text-emerald-50/70 text-sm">Harassment, fake identities, or unprofessional behavior.</p>
              </div>
              <div className="bg-white/10 dark:bg-slate-900/30 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/20 dark:hover:bg-slate-900/50 transition-all cursor-pointer group">
                <span className="material-symbols-outlined text-tertiary-fixed-dim text-4xl mb-4">block</span>
                <h4 className="text-white font-bold text-xl mb-2">Report a Listing</h4>
                <p className="text-emerald-50/70 text-sm">Misleading info, damaged equipment, or incorrect pricing.</p>
              </div>
              <div className="bg-white/10 dark:bg-slate-900/30 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/20 dark:hover:bg-slate-900/50 transition-all cursor-pointer group">
                <span className="material-symbols-outlined text-tertiary-fixed-dim text-4xl mb-4">gpp_maybe</span>
                <h4 className="text-white font-bold text-xl mb-2">Safety Issue</h4>
                <p className="text-emerald-50/70 text-sm">Report physical safety concerns during equipment handling.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6 & 7: Form & Expectations */}
        <section className="py-24 px-6 max-w-7xl mx-auto" id="form">
          <div className="grid lg:grid-cols-5 gap-16 items-start">
            {/* Support Form */}
            <div className="lg:col-span-3 bg-white dark:bg-slate-900 p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-800">
              <div className="mb-10">
                <h2 className="text-3xl font-extrabold text-primary-container dark:text-emerald-400 font-headline">
                  {langText("Support Request Form", "मदत विनंती अर्ज")}
                </h2>
                <p className="text-slate-500 dark:text-slate-400 mt-2">
                  {langText("Fill in the details and we'll get back to you within 24 hours.", "तपशील भरा आणि आम्ही २४ तासांच्या आत तुम्हाला प्रतिसाद देऊ.")}
                </p>
              </div>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300">
                      {langText("Name", "नाव")}
                    </label>
                    <input className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-white focus:ring-2 focus:ring-primary-container/20 dark:focus:ring-emerald-500/30 focus:border-primary-container dark:focus:border-emerald-500 transition-all outline-none" placeholder={langText("Your full name", "तुमचे पूर्ण नाव")} type="text" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300">
                      {langText("Phone or Email", "फोन किंवा ईमेल")}
                    </label>
                    <input className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-white focus:ring-2 focus:ring-primary-container/20 dark:focus:ring-emerald-500/30 focus:border-primary-container dark:focus:border-emerald-500 transition-all outline-none" placeholder={langText("Contact details", "संपर्क तपशील")} type="text" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300">
                    {langText("Issue Type", "समस्येचा प्रकार")}
                  </label>
                  <select className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-white focus:ring-2 focus:ring-primary-container/20 dark:focus:ring-emerald-500/30 focus:border-primary-container dark:focus:border-emerald-500 transition-all outline-none appearance-none">
                    <option>Select a category</option>
                    <option>Booking Dispute</option>
                    <option>Technical Issue</option>
                    <option>Payment Inquiry</option>
                    <option>Verification Help</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300">
                    {langText("Message", "संदेश")}
                  </label>
                  <textarea className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-white focus:ring-2 focus:ring-primary-container/20 dark:focus:ring-emerald-500/30 focus:border-primary-container dark:focus:border-emerald-500 transition-all outline-none" placeholder={langText("Describe your issue in detail...", "तुमच्या समस्येचे तपशीलवार वर्णन करा...")} rows={4}></textarea>
                </div>
                <button className="w-full bg-primary-container dark:bg-emerald-600 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl dark:hover:bg-emerald-500 transition-all transform active:scale-[0.98]" type="submit">
                  {langText("Submit Request", "विनंती पाठवा")}
                </button>
              </form>
            </div>

            {/* Help Expectations */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-secondary-fixed dark:bg-orange-950 p-8 rounded-3xl border border-on-secondary-container/10 dark:border-orange-900">
                <div className="flex items-center gap-3 mb-4">
                  <span className="material-symbols-outlined text-secondary dark:text-orange-400 font-bold">info</span>
                  <h3 className="text-xl font-bold text-on-secondary-fixed dark:text-orange-100">
                    {langText("Help Expectations", "आमची मदत पद्धत")}
                  </h3>
                </div>
                <div className="space-y-4 text-on-secondary-fixed-variant dark:text-orange-200/80 leading-relaxed">
                  <p className="font-medium">Kisan Kamai acts as a marketplace facilitator. Our support team helps with:</p>
                  <ul className="list-disc pl-5 space-y-2 text-sm opacity-90">
                    <li>Platform navigation and usage.</li>
                    <li>Payment security and escrow release.</li>
                    <li>User verification and trust badges.</li>
                    <li>Dispute mediation between renters and owners.</li>
                  </ul>
                  <p className="text-xs italic pt-4 opacity-70 border-t border-orange-200/20 dark:border-orange-800/30 mt-4">
                    {langText("Note: Physical maintenance and machine operation training are the responsibility of the equipment owner.", "टीप: मशीन देखभाल आणि मशीन चालवण्याचे प्रशिक्षण ही उपकरण मालकाची जबाबदारी आहे.")}
                  </p>
                </div>
              </div>
              <div className="relative rounded-3xl overflow-hidden h-64 shadow-lg border border-slate-100 dark:border-slate-800">
                <img className="w-full h-full object-cover" alt="Farmer lifestyle" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2LGBzDo63WqeI32_a8li4CS_fy9DSE66GDmFidr3FEmRWVEER31rac33q8f4fNqMQVAukzYq9YSRXOCw0Ia9M_zACV-4ZJ4mk8hkhgtcCIdV2YyB7Ie0L8A8Q5tlQZK4YF6eHr-pFd8Atp8BT71aQ4FFaUHSQN8RKmp64QOCN2IG2xBT0PdpS-aicvhWT68NcCM55wikIHcg9v-lSq2KOM_uhH3y6U4mYb-5ILGZJGWpo5rKwndO3hMYWyPy82KZYcbkjHGzvA9Dy"/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                  <p className="text-white text-sm font-medium italic text-center">"Always here to ensure your farming never stops."</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 8: Final CTA */}
        <section className="py-20 bg-surface-container-high dark:bg-slate-900/50 border-t border-outline-variant/20 dark:border-slate-800 px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary-container dark:text-emerald-400 font-headline">
              {langText("Still need help?", "अजूनही मदत हवी आहे?")}
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-primary-container dark:bg-emerald-600 text-white rounded-full font-bold shadow-md hover:shadow-lg dark:hover:bg-emerald-500 transition-all flex items-center justify-center gap-2 transform active:scale-95">
                <span className="material-symbols-outlined">support_agent</span>
                Contact Support
              </button>
              <button className="px-8 py-4 bg-white dark:bg-slate-900 text-primary-container dark:text-emerald-400 border-2 border-primary-container dark:border-emerald-600 rounded-full font-bold hover:bg-primary-container hover:text-white dark:hover:bg-emerald-600 dark:hover:text-white transition-all flex items-center justify-center gap-2 transform active:scale-95">
                <span className="material-symbols-outlined">library_books</span>
                Browse Help Library
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
