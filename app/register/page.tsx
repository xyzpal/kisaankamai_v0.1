import React from 'react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background dark:bg-slate-950">
      <Header />
      <main className="relative flex-grow pt-24 pb-12 flex items-center justify-center overflow-hidden bg-surface font-body text-on-surface selection:bg-primary-fixed selection:text-on-primary-fixed">
      {/* Editorial Background Composition */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-container/20 to-secondary-container/10 z-10"></div>
        <img 
          alt="Maharashtra Agriculture background" 
          className="w-full h-full object-cover grayscale-[20%] brightness-[85%]" 
          data-alt="cinematic wide shot of lush green sugarcane fields in Maharashtra at sunrise with a red tractor parked on a dirt path" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxQOjwxd1GOcMalqWnNbjRE_PdmUfc0-NmR6Q4TuQErXFd_qzDuGiC_WdF1g7ttCtoM0UiVMbVLaVQm0WLKWYov6lMhQOFyseyikTrMes5EQXOe_I4a_6cw2Ae-j6WIH5Gaez5ZmPfqiySohcSrnOyQ_NlH63cuQmtxASSLmjDCc3vYWLKGGxXawj6rqyL0fVwYXIhDuPqyurvIFiseFluZhvpkLiRugKXITVBrfbosLWRWCYExgO7RrH5oe0TEtMmGSkIJsYbgPtE"
        />
      </div>

      {/* Registration Container */}
      <div className="relative z-20 w-full max-w-2xl px-4">
        <div className="glass-panel border border-white/40 shadow-2xl rounded-3xl overflow-hidden bg-white/85 backdrop-blur-md">
          {/* Progress Header */}
          <div className="bg-primary-container p-8 text-white">
            <h1 className="text-3xl font-extrabold font-headline mb-2 tracking-tight">Create Your Account</h1>
            <p className="text-primary-fixed-dim font-medium mb-6">खाते तयार करा - Step 1 of 4</p>
            <div className="flex gap-2 h-1.5">
              <div className="flex-1 bg-white rounded-full"></div>
              <div className="flex-1 bg-white/20 rounded-full"></div>
              <div className="flex-1 bg-white/20 rounded-full"></div>
              <div className="flex-1 bg-white/20 rounded-full"></div>
            </div>
          </div>
          
          {/* Form Content */}
          <form className="p-8 md:p-10 space-y-8">
            {/* Section 1: Account Details */}
            <section className="space-y-6">
              <div className="flex items-center gap-3 mb-2">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>account_circle</span>
                <h2 className="text-xl font-bold font-headline text-primary">Account Details / खाते तपशील</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-outline font-label">Full Name / पूर्ण नाव</label>
                  <input className="w-full bg-surface-container-low border-0 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary-container/50 text-on-surface" placeholder="E.g. Rajesh Patil" type="text"/>
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-outline font-label">Mobile Number / मोबाईल नंबर</label>
                  <div className="relative">
                    <input className="w-full bg-surface-container-low border-0 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary-container/50 text-on-surface" placeholder="+91 98765 43210" type="tel"/>
                    <button className="absolute right-2 top-1.5 bg-primary text-white text-xs font-bold px-3 py-1.5 rounded-lg hover:bg-primary-container transition-colors" type="button">SEND OTP</button>
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-outline font-label">Email Address / ईमेल पत्ता</label>
                  <input className="w-full bg-surface-container-low border-0 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary-container/50 text-on-surface" placeholder="name@example.com" type="email"/>
                </div>
                <div className="space-y-1.5 relative">
                  <label className="text-xs font-bold uppercase tracking-wider text-outline font-label">Password / पासवर्ड</label>
                  <div className="relative">
                    <input className="w-full bg-surface-container-low border-0 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary-container/50 text-on-surface" placeholder="••••••••" type="password"/>
                    <span className="material-symbols-outlined absolute right-3 top-3 text-outline cursor-pointer select-none">visibility</span>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Section 2: Profile */}
            <section className="space-y-6 pt-6 border-t border-surface-container-highest">
              <div className="flex items-center gap-3 mb-2">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
                <h2 className="text-xl font-bold font-headline text-primary">Basic Profile / मूलभूत प्रोफाइल</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-outline font-label">Village/Town / गाव/शहर</label>
                  <input className="w-full bg-surface-container-low border-0 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary-container/50" type="text"/>
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-outline font-label">District / जिल्हा</label>
                  <select className="w-full bg-surface-container-low border-0 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary-container/50">
                    <option>Select District</option>
                    <option>Pune</option>
                    <option>Satara</option>
                    <option>Kolhapur</option>
                    <option>Nashik</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-outline font-label">Pincode / पिनकोड</label>
                  <input className="w-full bg-surface-container-low border-0 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary-container/50" type="number"/>
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-outline font-label">Preferred Language / प्राधान्य भाषा</label>
                  <div className="flex gap-4 pt-1">
                    <label className="flex-1 flex items-center justify-center gap-2 border-2 border-primary-container text-primary-container font-bold rounded-xl py-2 cursor-pointer bg-primary-fixed/30">
                      English
                    </label>
                    <label className="flex-1 flex items-center justify-center gap-2 border-2 border-outline-variant text-outline font-bold rounded-xl py-2 cursor-pointer hover:border-primary-container transition-all">
                      मराठी
                    </label>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Section 3: Role Selection */}
            <section className="space-y-6 pt-6 border-t border-surface-container-highest">
              <div className="flex items-center gap-3 mb-2">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>diversity_3</span>
                <h2 className="text-xl font-bold font-headline text-primary">Your Role / तुमची भूमिका</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <button className="group flex flex-col items-center gap-3 p-4 border-2 border-outline-variant rounded-2xl hover:border-primary transition-all bg-white/50" type="button">
                  <span className="material-symbols-outlined text-3xl text-outline group-hover:text-primary transition-colors">agriculture</span>
                  <div className="text-center">
                    <div className="font-bold text-on-surface">Owner</div>
                    <div className="text-[10px] text-outline font-semibold uppercase">उपकरण मालक</div>
                  </div>
                </button>
                <button className="group flex flex-col items-center gap-3 p-4 border-2 border-primary-container rounded-2xl bg-primary-fixed/20 shadow-md" type="button">
                  <span className="material-symbols-outlined text-3xl text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>person_search</span>
                  <div className="text-center">
                    <div className="font-bold text-primary">Renter</div>
                    <div className="text-[10px] text-primary-container font-semibold uppercase">भाड्याने घेणारे</div>
                  </div>
                </button>
                <button className="group flex flex-col items-center gap-3 p-4 border-2 border-outline-variant rounded-2xl hover:border-primary transition-all bg-white/50" type="button">
                  <span className="material-symbols-outlined text-3xl text-outline group-hover:text-primary transition-colors">handshake</span>
                  <div className="text-center">
                    <div className="font-bold text-on-surface">Both</div>
                    <div className="text-[10px] text-outline font-semibold uppercase">दोन्ही</div>
                  </div>
                </button>
              </div>
            </section>
            
            {/* Section 4: Optional Verification */}
            <section className="space-y-6 pt-6 border-t border-surface-container-highest">
              <div className="flex items-center justify-between gap-3 mb-2">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
                  <h2 className="text-xl font-bold font-headline text-tertiary">Verification / पडताळणी</h2>
                </div>
                <span className="text-[10px] font-bold text-tertiary-container bg-tertiary-fixed px-2 py-0.5 rounded uppercase tracking-widest">Optional</span>
              </div>
              <p className="text-sm text-on-surface-variant italic mb-4">Aadhaar verification helps confirm identity and builds trust between owners and renters. / आधार पडताळणी ओळख निश्चित करण्यास मदत करते.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-outline font-label">ID Type / ओळखपत्राचा प्रकार</label>
                  <select className="w-full bg-surface-container-low border-0 rounded-xl px-4 py-3">
                    <option>Aadhaar Card</option>
                    <option>PAN Card</option>
                    <option>Voter ID</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-outline font-label">ID Number / ओळखपत्र क्रमांक</label>
                  <input className="w-full bg-surface-container-low border-0 rounded-xl px-4 py-3" placeholder="XXXX XXXX XXXX" type="text"/>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="border-2 border-dashed border-outline-variant rounded-2xl p-4 flex flex-col items-center justify-center gap-2 hover:bg-surface-container-low transition-colors cursor-pointer group">
                  <span className="material-symbols-outlined text-outline group-hover:text-primary">upload_file</span>
                  <span className="text-[10px] font-bold text-outline text-center">Front Side / समोरची बाजू</span>
                </div>
                <div className="border-2 border-dashed border-outline-variant rounded-2xl p-4 flex flex-col items-center justify-center gap-2 hover:bg-surface-container-low transition-colors cursor-pointer group">
                  <span className="material-symbols-outlined text-outline group-hover:text-primary">upload_file</span>
                  <span className="text-[10px] font-bold text-outline text-center">Back Side / मागची बाजू</span>
                </div>
              </div>
            </section>
            
            {/* CTA Section */}
            <div className="pt-8 space-y-4">
              <button className="w-full bg-primary-container text-white py-4 rounded-2xl font-bold text-lg shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3" type="submit">
                Create Account / खाते तयार करा
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
              <p className="text-center text-sm font-medium text-on-surface-variant">
                Already have an account?{' '}
                <Link className="text-primary font-bold hover:underline" href="/login">Login / लॉगिन करा</Link>
              </p>
            </div>
          </form>
        </div>
        
        {/* Trust Badges */}
        <div className="mt-8 flex flex-wrap justify-center items-center gap-4 md:gap-8 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-white">security</span>
            <span className="text-xs text-white font-bold tracking-widest uppercase">Secure SSL</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-white">verified</span>
            <span className="text-xs text-white font-bold tracking-widest uppercase">Verified Owners</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-white">support_agent</span>
            <span className="text-xs text-white font-bold tracking-widest uppercase">24/7 Support</span>
          </div>
        </div>
      </div>
    </main>
      <Footer />
    </div>
  );
}
