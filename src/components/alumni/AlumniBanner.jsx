import React from 'react';

export default function AlumniBanner() {
  return (
    <section className="relative w-full min-h-[480px] md:min-h-[550px] flex items-center justify-center overflow-hidden rounded-3xl my-8 border border-red-900/30 shadow-2xl">
      
      {/* ১. ব্যাকগ্রাউন্ড ইমেজ ও ডার্ক ওভারলে */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 hover:scale-105"
        style={{
          // আপনার পছন্দের ছবিটির URL এখানে বসিয়ে দিন
          backgroundImage: `url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1600&auto=format&fit=crop')`,
        }}
      >
        {/* ডার্ক গ্রেডিয়েন্ট ওভারলে যেন টেক্সট সহজে পড়া যায় */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-red-950/80" />
      </div>

      {/* ২. ব্যানার কন্টেন্ট */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-12 text-center flex flex-col items-center">
        
        {/* ব্যাজ / ট্যাগলাইন */}
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs md:text-sm font-semibold tracking-wider text-red-300 bg-red-950/80 border border-red-700/50 shadow-inner mb-6 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
          UE TRAINING NETWORK
        </span>

        {/* মেইন হেডিং */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white leading-tight tracking-tight max-w-4xl">
          Empowering the Next Generation of <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">Engineers & Leaders</span>
        </h1>

        {/* সাব-টাইটেল */}
        <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl font-normal leading-relaxed">
          Connect with industry experts, discover skilled professionals, and explore our growing global network of UE Training alumni.
        </p>

        {/* ৩. বাটন ও স্ট্যাটস (CTA Section) */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <button className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white font-bold text-sm md:text-base shadow-lg shadow-red-900/40 hover:shadow-red-900/60 transition-all duration-300 active:scale-95">
            Explore Alumni Profiles
          </button>
          
          <button className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm md:text-base border border-white/20 backdrop-blur-md transition-all duration-300 active:scale-95">
            Join Alumni Network
          </button>
        </div>

        {/* ৪. কুইক স্ট্যাটস (Quick Stats) */}
        <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-6 md:gap-12 text-center w-full max-w-3xl">
          <div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-white">500+</h3>
            <p className="text-xs md:text-sm text-gray-400 mt-1">Active Alumni</p>
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-white">50+</h3>
            <p className="text-xs md:text-sm text-gray-400 mt-1">Partner Companies</p>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <h3 className="text-2xl md:text-3xl font-extrabold text-white">95%</h3>
            <p className="text-xs md:text-sm text-gray-400 mt-1">Placement Rate</p>
          </div>
        </div>

      </div>
    </section>
  );
}