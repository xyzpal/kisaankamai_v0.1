"use client";

import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function OwnerDashboardPage() {

  return (
    <div className="bg-background dark:bg-slate-950 font-body text-on-background antialiased flex min-h-screen">
      {/* SideNavBar (Shared Component) */}
      <aside className="hidden lg:flex flex-col fixed left-0 top-0 h-screen w-64 border-r border-surface-container-highest dark:border-slate-800 bg-white dark:bg-slate-950 z-40">
        <div className="px-6 py-8 flex justify-between items-center">
          <span className="text-xl font-bold text-primary dark:text-emerald-50">Kisan Kamai</span>
          <ThemeToggle />
        </div>
        <div className="px-4 mb-6">
          <div className="flex items-center gap-3 p-3 rounded-xl bg-surface-container-low dark:bg-slate-900/50 border border-surface-container-highest dark:border-slate-800">
            <div className="w-10 h-10 rounded-full overflow-hidden bg-primary-container flex-shrink-0">
              <img className="w-full h-full object-cover" alt="farmer portrait" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCExv3QOuibAX6OClfz_t075pUbPpJfzqx6sb25CiutKAmBrXyTH1QWiiPw-IW4p5WgJr3Dmm5g5mCx6isTHJzUsHMEW_vpFKttBYWOMjfGTCUxD3GX0E0jCk4LmKjk3uwBC42kquNUrTDYImmkeAjgiHZmhUCvsyaUAo-6qFhAGCwvj9j9M0yI2mPGM7qxvaED16FYQe-i4v3ins77rZpK6wLZFqza2K80SQHrw_rUlDaG0pHpssIDt2u1KfQiEk0X4VVCY3_OBKOq"/>
            </div>
            <div className="flex flex-col overflow-hidden">
              <span className="text-sm font-bold text-primary dark:text-emerald-100 leading-tight truncate">Kisan Owner</span>
              <span className="text-[10px] font-medium text-on-surface-variant dark:text-slate-400 uppercase tracking-wider truncate">Verified Partner</span>
            </div>
          </div>
        </div>
        <nav className="flex-1 px-3 space-y-1">
          <a className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-900/60 rounded-lg transition-all duration-200 group" href="#">
            <span className="material-symbols-outlined group-hover:scale-110 transition-transform">dashboard</span>
            <span className="font-manrope text-sm font-medium">Dashboard</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-900/60 rounded-lg transition-all duration-200 group" href="#">
            <span className="material-symbols-outlined group-hover:scale-110 transition-transform">agriculture</span>
            <span className="font-manrope text-sm font-medium">My Equipment</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300 shadow-[inset_-4px_0_0_0_#00251a] dark:shadow-[inset_-4px_0_0_0_#34d399] font-bold rounded-l-lg transition-all duration-200" href="#">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>calendar_today</span>
            <span className="font-manrope text-sm font-medium">Bookings</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-900/60 rounded-lg transition-all duration-200 group" href="#">
            <span className="material-symbols-outlined group-hover:scale-110 transition-transform">payments</span>
            <span className="font-manrope text-sm font-medium">Earnings</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-900/60 rounded-lg transition-all duration-200 group" href="#">
            <span className="material-symbols-outlined group-hover:scale-110 transition-transform">settings</span>
            <span className="font-manrope text-sm font-medium">Settings</span>
          </a>
        </nav>
        <div className="p-4 space-y-2 border-t border-surface-container-highest dark:border-slate-800">
          <Link href="/owner-registration" className="w-full flex items-center justify-center gap-2 bg-primary-container text-white py-3 px-4 rounded-xl font-bold text-sm hover:opacity-90 transition-opacity">
            <span className="material-symbols-outlined text-sm">add</span>
            Add New Listing
          </Link>
          <a className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-900/60 rounded-lg transition-all" href="#">
            <span className="material-symbols-outlined">support_agent</span>
            <span className="font-manrope text-sm font-medium">Support</span>
          </a>
          <Link className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-900/60 rounded-lg transition-all" href="/">
            <span className="material-symbols-outlined">logout</span>
            <span className="font-manrope text-sm font-medium">Sign Out</span>
          </Link>
        </div>
      </aside>

      {/* Main Content Canvas */}
      <main className="lg:ml-64 flex-1 min-h-screen pb-12 w-full dark:bg-slate-900">
        {/* Top Sticky Header for Mobile/Context */}
        <header className="sticky top-0 z-30 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border-b border-surface-container-highest dark:border-slate-800 px-6 py-4 flex justify-between items-center lg:hidden">
          <span className="text-xl font-extrabold text-primary dark:text-emerald-50">Kisan Kamai</span>
          <div className="flex gap-2 items-center">
            <ThemeToggle />
            <button className="p-2 text-on-surface dark:text-slate-300">
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </header>

        <div className="max-w-6xl mx-auto px-6 pt-8">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-2 text-on-surface-variant dark:text-slate-400 mb-1">
                <span className="text-xs font-bold tracking-widest uppercase">Owner Portal</span>
                <span className="w-1 h-1 rounded-full bg-outline-variant"></span>
                <span className="text-xs font-bold tracking-widest uppercase text-secondary">मराठी पोर्टल</span>
              </div>
              <h1 className="text-3xl font-extrabold text-primary dark:text-emerald-50 tracking-tight">Booking Management</h1>
              <p className="text-on-surface-variant dark:text-slate-400 mt-1">Manage your incoming requests and schedule.</p>
            </div>
            <div className="flex items-center gap-3 bg-white dark:bg-slate-950 p-1 rounded-xl shadow-sm border border-surface-container-highest dark:border-slate-800 overflow-x-auto whitespace-nowrap">
              <button className="px-4 py-2 text-sm font-bold bg-primary text-white rounded-lg transition-all">Active</button>
              <button className="px-4 py-2 text-sm font-bold text-on-surface-variant dark:text-slate-400 hover:bg-surface-container dark:hover:bg-slate-800 rounded-lg transition-all">Upcoming</button>
              <button className="px-4 py-2 text-sm font-bold text-on-surface-variant dark:text-slate-400 hover:bg-surface-container dark:hover:bg-slate-800 rounded-lg transition-all">History</button>
            </div>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            {/* Left: New Requests Column (Bento Cards) */}
            <div className="xl:col-span-2 space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold text-primary dark:text-emerald-50 flex items-center gap-2">
                  New Requests <span className="bg-secondary-container dark:bg-amber-600 text-on-secondary-container dark:text-white px-2 py-0.5 rounded-full text-xs">3</span>
                </h2>
                <a className="text-sm font-bold text-secondary hover:underline dark:text-amber-500" href="#">मराठीत पहा</a>
              </div>

              {/* Request Card 1 */}
              <div className="bg-white dark:bg-slate-950 rounded-2xl p-5 border border-surface-container-highest dark:border-slate-800 shadow-sm hover:shadow-md transition-all group">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-full md:w-32 h-32 rounded-xl overflow-hidden bg-surface-container flex-shrink-0">
                    <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="high-end John Deere tractor" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfu_AMK_TC8qMMVZ5e68Vj614f7M-Jvj39tLDf3BQJkq-OR0wlOV6NnKY023rSowbHNfyUR20P5q9Emgjo4e57yk4c-aACXJdZTlCLD205lUsSDSeqCy9E2TCpIP7z4Fvt3iHDiYNgRCVDnJB3NDcwl79hAdszGgm4yLyy0f7U7N9J_tB4bXx2XkjVYlAWGd5o9b53aF9pauVHDAIeeds_aa7VckpSTmbvjgEmlh9kYALpZ4nflwGb2cyeq4_Ih7RTZDPwgd3CIiRh"/>
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-base font-bold text-primary dark:text-emerald-50">Mahindra Yuvo 575 DI</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <div className="w-6 h-6 rounded-full overflow-hidden bg-surface-container-highest flex-shrink-0">
                            <img className="w-full h-full object-cover" alt="Rajesh Deshmukh" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDx5bzL6bDQVA0JxAp7j3KMGj422zWVggwjN1uLMEN6YpdhDTjMjWHLXb_0V3dVd0WMlENhvLzIn426BpV8FXdPS88eGjjWb2YK4IpWBgH4aXhxV3uwZNLfBgajOd9yQhswUz1ZVqFEhjLJG_FKW9E9sLeR697KlUCScCYRDLMDl-t9mf5xwsJQudvzRFyYPPSv5jPOhU5v_omPSVzIiCTDoNc4oXdWzTRporMg1YH3LoPQoWVSEz4abYKQ3jGGBPZYgL9aOVZnMFfe"/>
                          </div>
                          <span className="text-sm font-semibold text-on-surface dark:text-slate-200">Rajesh Deshmukh <span className="text-on-surface-variant dark:text-slate-400 font-normal">from Satara</span></span>
                        </div>
                      </div>
                      <div className="text-right flex-shrink-0 ml-2">
                        <span className="block text-lg font-extrabold text-primary dark:text-emerald-400">₹3,200</span>
                        <span className="text-[10px] font-bold text-on-surface-variant dark:text-slate-500 uppercase tracking-tighter">Estimated Total</span>
                      </div>
                    </div>
                    <div className="mt-4 flex flex-wrap items-center gap-4 py-3 border-y border-surface-container-highest dark:border-slate-800">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-secondary dark:text-amber-500 text-lg">calendar_month</span>
                        <span className="text-xs font-bold dark:text-slate-300">24 Oct - 26 Oct</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-secondary dark:text-amber-500 text-lg">history</span>
                        <span className="text-xs font-bold dark:text-slate-300">3 Days</span>
                      </div>
                      <div className="flex items-center gap-2 ml-auto">
                        <span className="px-2 py-1 bg-amber-50 dark:bg-amber-900/40 text-amber-700 dark:text-amber-400 text-[10px] font-black rounded uppercase">Urgent</span>
                      </div>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-3">
                      <button className="flex-1 min-w-[120px] bg-primary text-white py-2.5 rounded-lg text-sm font-bold hover:bg-primary/90 transition-colors">Approve Request</button>
                      <button className="px-6 py-2.5 min-w-[100px] border border-surface-container-highest dark:border-slate-700 text-on-surface dark:text-slate-300 rounded-lg text-sm font-bold hover:bg-surface-container dark:hover:bg-slate-800 transition-colors">Decline</button>
                      <button className="w-10 h-10 flex flex-shrink-0 items-center justify-center border border-surface-container-highest dark:border-slate-700 text-primary dark:text-emerald-400 rounded-lg hover:bg-surface-container dark:hover:bg-slate-800 transition-colors">
                        <span className="material-symbols-outlined">chat</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Request Card 2 (Bento Variant) */}
              <div className="bg-white dark:bg-slate-950 rounded-2xl p-5 border border-surface-container-highest dark:border-slate-800 shadow-sm hover:shadow-md transition-all group">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-full md:w-32 h-32 rounded-xl overflow-hidden bg-surface-container flex-shrink-0">
                    <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Harvester" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXeWgkAV1x1OgBpa0auyHmBacTvv1IBdSuN6HHZuMz0giFUEgslR8DNPtxyaEFW_qQfI-SY6jGv3V3EMDAQxI5mZ10393zRusmkv2bKJ0Eath72hCyYwYPCNfDHP8rV_I0LBL3I8go1bhHdl5ramzkl-_47sR06qnJvglu5XQAz32-c5aMpqHKCutM2wE6jkFcfqQOO-oqQE7EbYADTp3cVHtBZTe3hEvuMKsI-i5SRaRyWrydi81W7U1m7BGa2bUrV19hlxUPJC1m"/>
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-base font-bold text-primary dark:text-emerald-50">Swaraj 744 FE</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <div className="w-6 h-6 rounded-full overflow-hidden bg-surface-container-highest flex-shrink-0">
                            <img className="w-full h-full object-cover" alt="Anjali Patil" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSq5F2cYUuHYvBmXAsvxfDZXj8e5KUW5MdWMRmUV_E7aVgcECHdB37efSooZU37aQMHE2uMlH5_qq8EXFprA_jz2AT0Bf8jhSMJYsvk5HDimpaD86TMoEyYlEhntgcyEt7YDAPS6Hbs2dKAGkjqWW5m5pgRzagnZ9MCEO2waJgg-VGJuzN5M3W_FDECvdn_c_mYGqSUvGZQpTe7vNh6Wq12hUw7sh2AryJuq-dWeNygpmLu3nl_7gSomHl4vsY_kHpoeLx5TgwK3fu"/>
                          </div>
                          <span className="text-sm font-semibold text-on-surface dark:text-slate-200">Anjali Patil <span className="text-on-surface-variant dark:text-slate-400 font-normal">from Karad</span></span>
                        </div>
                      </div>
                      <div className="text-right flex-shrink-0 ml-2">
                        <span className="block text-lg font-extrabold text-primary dark:text-emerald-400">₹1,850</span>
                        <span className="text-[10px] font-bold text-on-surface-variant dark:text-slate-500 uppercase tracking-tighter">Estimated Total</span>
                      </div>
                    </div>
                    <div className="mt-4 flex flex-wrap items-center gap-4 py-3 border-y border-surface-container-highest dark:border-slate-800">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-secondary dark:text-amber-500 text-lg">calendar_month</span>
                        <span className="text-xs font-bold dark:text-slate-300">28 Oct - 29 Oct</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-secondary dark:text-amber-500 text-lg">history</span>
                        <span className="text-xs font-bold dark:text-slate-300">2 Days</span>
                      </div>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-3">
                      <button className="flex-1 min-w-[120px] bg-primary text-white py-2.5 rounded-lg text-sm font-bold hover:bg-primary/90 transition-colors">Approve Request</button>
                      <button className="px-6 py-2.5 min-w-[100px] border border-surface-container-highest dark:border-slate-700 text-on-surface dark:text-slate-300 rounded-lg text-sm font-bold hover:bg-surface-container dark:hover:bg-slate-800 transition-colors">Decline</button>
                      <button className="w-10 h-10 flex flex-shrink-0 items-center justify-center border border-surface-container-highest dark:border-slate-700 text-primary dark:text-emerald-400 rounded-lg hover:bg-surface-container dark:hover:bg-slate-800 transition-colors">
                        <span className="material-symbols-outlined">chat</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Calendar & Stats */}
            <div className="space-y-8">
              {/* Calendar View Section */}
              <div className="bg-white dark:bg-slate-950 rounded-2xl p-6 border border-surface-container-highest dark:border-slate-800 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-base font-bold text-primary dark:text-emerald-50">Schedule</h2>
                  <div className="flex gap-1">
                    <button className="p-1 rounded hover:bg-surface-container dark:hover:bg-slate-800 dark:text-slate-300"><span className="material-symbols-outlined text-sm">chevron_left</span></button>
                    <button className="p-1 rounded hover:bg-surface-container dark:hover:bg-slate-800 dark:text-slate-300"><span className="material-symbols-outlined text-sm">chevron_right</span></button>
                  </div>
                </div>
                <div className="grid grid-cols-7 gap-1 text-center mb-4">
                  <span className="text-[10px] font-black text-on-surface-variant dark:text-slate-400 uppercase">M</span>
                  <span className="text-[10px] font-black text-on-surface-variant dark:text-slate-400 uppercase">T</span>
                  <span className="text-[10px] font-black text-on-surface-variant dark:text-slate-400 uppercase">W</span>
                  <span className="text-[10px] font-black text-on-surface-variant dark:text-slate-400 uppercase">T</span>
                  <span className="text-[10px] font-black text-on-surface-variant dark:text-slate-400 uppercase">F</span>
                  <span className="text-[10px] font-black text-on-surface-variant dark:text-slate-400 uppercase">S</span>
                  <span className="text-[10px] font-black text-on-surface-variant dark:text-slate-400 uppercase">S</span>
                </div>
                <div className="grid grid-cols-7 gap-2">
                  <div className="h-8 flex items-center justify-center text-xs text-on-surface-variant opacity-40">20</div>
                  <div className="h-8 flex items-center justify-center text-xs text-on-surface-variant opacity-40">21</div>
                  <div className="h-8 flex items-center justify-center text-xs font-bold text-on-surface dark:text-slate-300">22</div>
                  <div className="h-8 flex items-center justify-center text-xs font-bold text-on-surface dark:text-slate-300">23</div>
                  <div className="h-8 flex items-center justify-center text-xs font-bold bg-primary text-white rounded-lg shadow-sm">24</div>
                  <div className="h-8 flex items-center justify-center text-xs font-bold bg-primary-fixed dark:bg-emerald-900/60 text-primary dark:text-emerald-300 rounded-lg">25</div>
                  <div className="h-8 flex items-center justify-center text-xs font-bold bg-primary-fixed dark:bg-emerald-900/60 text-primary dark:text-emerald-300 rounded-lg">26</div>
                  <div className="h-8 flex items-center justify-center text-xs font-bold text-on-surface dark:text-slate-300">27</div>
                  <div className="h-8 flex items-center justify-center text-xs font-bold bg-secondary-container dark:bg-amber-900/50 text-on-secondary-container dark:text-amber-400 rounded-lg">28</div>
                  <div className="h-8 flex items-center justify-center text-xs font-bold bg-secondary-container dark:bg-amber-900/50 text-on-secondary-container dark:text-amber-400 rounded-lg">29</div>
                  <div className="h-8 flex items-center justify-center text-xs font-bold text-on-surface dark:text-slate-300">30</div>
                  <div className="h-8 flex items-center justify-center text-xs font-bold text-on-surface dark:text-slate-300">31</div>
                  <div className="h-8 flex items-center justify-center text-xs text-on-surface-variant opacity-40">1</div>
                  <div className="h-8 flex items-center justify-center text-xs text-on-surface-variant opacity-40">2</div>
                </div>
                <div className="mt-6 pt-4 border-t border-surface-container-highest dark:border-slate-800 space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary dark:bg-emerald-400"></span>
                    <span className="text-xs font-semibold dark:text-slate-300">Deshmukh - Tractor (Today)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-secondary-container dark:bg-amber-500"></span>
                    <span className="text-xs font-semibold dark:text-slate-300">Anjali - Swaraj (Upcoming)</span>
                  </div>
                </div>
              </div>

              {/* Earnings Summary */}
              <div className="bg-primary-container rounded-2xl p-6 text-white shadow-lg overflow-hidden relative">
                <div className="relative z-10">
                  <span className="text-[10px] font-black uppercase tracking-widest text-on-primary-container dark:text-emerald-300">Estimated Earnings</span>
                  <div className="text-3xl font-extrabold mt-1">₹42,850</div>
                  <div className="mt-4 flex items-center gap-2 text-xs font-medium text-emerald-100">
                    <span className="material-symbols-outlined text-sm">trending_up</span>
                    12% higher than last month
                  </div>
                </div>
                <div className="absolute -right-4 -bottom-4 opacity-10">
                  <span className="material-symbols-outlined text-[120px]">payments</span>
                </div>
              </div>

              {/* Quick Support Card */}
              <div className="bg-surface-container-low dark:bg-slate-900/40 rounded-2xl p-6 border border-dashed border-outline-variant dark:border-slate-800 text-center">
                <h3 className="text-sm font-bold text-primary dark:text-emerald-400 mb-2">Need help managing equipment?</h3>
                <p className="text-xs text-on-surface-variant dark:text-slate-400 mb-4 leading-relaxed">Our support team is available in Marathi & English to help you list or manage bookings.</p>
                <button className="w-full py-2 bg-white dark:bg-slate-900 text-primary dark:text-emerald-50 border border-surface-container-highest dark:border-slate-800 rounded-lg text-xs font-bold hover:bg-surface transition-colors">Contact Support</button>
              </div>
            </div>
          </div>

          {/* Completed History Strip */}
          <div className="mt-16">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-primary dark:text-emerald-50">Recently Completed</h2>
              <button className="text-sm font-bold text-on-surface-variant dark:text-slate-400 hover:text-primary dark:hover:text-emerald-400 transition-colors">View All History</button>
            </div>
            <div className="overflow-x-auto pb-4 scrollbar-hide">
              <div className="flex gap-4 min-w-max">
                {/* History Item 1 */}
                <div className="w-80 bg-white dark:bg-slate-950 p-4 rounded-xl border border-surface-container-highest dark:border-slate-800 flex gap-4 items-center">
                  <div className="w-12 h-12 rounded-lg overflow-hidden bg-surface-container flex-shrink-0">
                    <img className="w-full h-full object-cover" alt="History" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdqNOAoCPN8x0nsEZC8ySbNFRQhgNTr8XGeglYme_oheUE-k1yvgLhZtw5MZd2AnHdZBTUP9xgRxwNDjSjuqiAOcuSnP4MChkAFQSOkgcz-1_hGr-OJ2z1tDzf8sOQDTVJu296cAO1lslwFCoXrwyZpVsm9_gqgIrzYeHEFMt-F63fydM-fghS4V_bZ3tWF-zGPQyrV1SPq8Z5g7MRNMeFK1jcr99JJnCYiEAXJ-d_Egi_TGMI-UBGEi5auHaJpN3nUrA4eeHXZSJM"/>
                  </div>
                  <div className="flex-1">
                    <span className="block text-xs font-black text-on-surface-variant dark:text-slate-400 uppercase tracking-tighter">Completed 12 Oct</span>
                    <h4 className="text-sm font-bold text-primary dark:text-emerald-50">Rotavator Attachment</h4>
                    <span className="text-xs font-medium text-secondary dark:text-amber-500">₹1,200 Earned</span>
                  </div>
                  <span className="material-symbols-outlined text-emerald-600 dark:text-emerald-400" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                </div>
                {/* History Item 2 */}
                <div className="w-80 bg-white dark:bg-slate-950 p-4 rounded-xl border border-surface-container-highest dark:border-slate-800 flex gap-4 items-center">
                  <div className="w-12 h-12 rounded-lg overflow-hidden bg-surface-container flex-shrink-0">
                    <img className="w-full h-full object-cover" alt="History" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDD7UN56-Z2_tDkc9fBsx1kXCYvgZSc6DtKZ-iIbjFzKKvMiNQE2_kpTFOJZoJ-82Rl4k669AmPzsKzGuPiXxOak6Vuxv0dB_GJ43522eiid2WvxFDwZlPR5TT_2cyO_fpq84se2YAe019WzFiJbgxenW7R1UEyPbtFk2TWOiosq0Rq0ibIK90moqEjMBqjhwkvB7Y8xTgAb4VIiP9m5kV09cXfp4gu4is9YrmHaBy1aNtTQKG1UP5PVwJ_D_QZFRZuk63-qQbjJXKG"/>
                  </div>
                  <div className="flex-1">
                    <span className="block text-xs font-black text-on-surface-variant dark:text-slate-400 uppercase tracking-tighter">Completed 08 Oct</span>
                    <h4 className="text-sm font-bold text-primary dark:text-emerald-50">Seed Drill - 9 Row</h4>
                    <span className="text-xs font-medium text-secondary dark:text-amber-500">₹2,450 Earned</span>
                  </div>
                  <span className="material-symbols-outlined text-emerald-600 dark:text-emerald-400" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                </div>
                {/* History Item 3 */}
                <div className="w-80 bg-white dark:bg-slate-950 p-4 rounded-xl border border-surface-container-highest dark:border-slate-800 flex gap-4 items-center">
                  <div className="w-12 h-12 rounded-lg overflow-hidden bg-surface-container flex-shrink-0">
                    <img className="w-full h-full object-cover" alt="History" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDo30tOlVIugzS_7jgt7kuk4aZ7kUqq9s-awHCixPh5aJzriB9MdVMO_H8faueekx3BhnItbI7F9XHhH4zuKIaF9ytFaC1HBrDuwcwkJP2zNE4TjwSfJfRxCdGrJNjdWHI_XIy3QlKbJpKYN1BQc8PuvrbXd0eqpnzPL69L64J3Fh6MgVgqVIgV2AAqhlsNTDGhoevjEujKOzHb_9ZtXhCy7m6BQisG1w5zXAaKltdC4njE3nE7IBh2gKFoGN2BcjSYpCJ5H4xkb3yw"/>
                  </div>
                  <div className="flex-1">
                    <span className="block text-xs font-black text-on-surface-variant dark:text-slate-400 uppercase tracking-tighter">Completed 02 Oct</span>
                    <h4 className="text-sm font-bold text-primary dark:text-emerald-50">John Deere 5310</h4>
                    <span className="text-xs font-medium text-secondary dark:text-amber-500">₹3,800 Earned</span>
                  </div>
                  <span className="material-symbols-outlined text-emerald-600 dark:text-emerald-400" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer (Shared Component Lite) */}
        <footer className="w-full mt-20 pt-12 pb-8 border-t border-emerald-100 dark:border-slate-800 bg-white dark:bg-slate-950">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <span className="text-lg font-black text-primary dark:text-emerald-50">Kisan Kamai</span>
              <p className="text-xs text-on-surface-variant dark:text-slate-400 mt-1">© 2024 Kisan Kamai. Rooted in Trust.</p>
            </div>
            <div className="flex gap-6">
              <a className="text-xs font-bold text-on-surface-variant dark:text-slate-400 hover:text-primary dark:hover:text-emerald-400" href="#">Safety & Insurance</a>
              <a className="text-xs font-bold text-on-surface-variant dark:text-slate-400 hover:text-primary dark:hover:text-emerald-400" href="#">Marathi Support</a>
              <a className="text-xs font-bold text-on-surface-variant dark:text-slate-400 hover:text-primary dark:hover:text-emerald-400" href="#">Privacy Policy</a>
              <a className="text-xs font-bold text-on-surface-variant dark:text-slate-400 hover:text-primary dark:hover:text-emerald-400" href="#">Terms of Service</a>
            </div>
          </div>
        </footer>
      </main>

      {/* Mobile Navigation Bar (Shared Component) */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-slate-950 border-t border-surface-container-highest dark:border-slate-800 px-4 py-2 flex justify-around items-center z-50">
        <a className="flex flex-col items-center p-2 text-slate-500 dark:text-slate-400" href="#">
          <span className="material-symbols-outlined">dashboard</span>
          <span className="text-[10px] font-bold mt-1">Home</span>
        </a>
        <a className="flex flex-col items-center p-2 text-primary dark:text-emerald-400" href="#">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>calendar_today</span>
          <span className="text-[10px] font-bold mt-1">Bookings</span>
        </a>
        <Link href="/owner-registration" className="bg-primary-container text-white w-12 h-12 rounded-full flex items-center justify-center -mt-8 shadow-lg">
          <span className="material-symbols-outlined">add</span>
        </Link>
        <a className="flex flex-col items-center p-2 text-slate-500 dark:text-slate-400" href="#">
          <span className="material-symbols-outlined">payments</span>
          <span className="text-[10px] font-bold mt-1">Earnings</span>
        </a>
        <a className="flex flex-col items-center p-2 text-slate-500 dark:text-slate-400" href="#">
          <span className="material-symbols-outlined">person</span>
          <span className="text-[10px] font-bold mt-1">Profile</span>
        </a>
      </nav>
    </div>
  );
}
