const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-slate-900 pt-16 pb-32">
      <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 dark:bg-yellow-900 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 dark:bg-pink-900 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <span className="inline-block py-1 px-3 rounded-full bg-indigo-50 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-300 text-sm font-semibold mb-6 shadow-sm border border-indigo-100 dark:border-indigo-800">
          Unleash the Future
        </span>
        <h1 className="text-6xl md:text-8xl font-extrabold text-slate-900 dark:text-white mb-8 tracking-tighter">
          Elevate Your <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 drop-shadow-sm">Digital Lifestyle</span>
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
          Discover the latest and most premium tech gadgets, curated specially for modern creators and professionals.
        </p>
        <div className="flex justify-center gap-4">
          <a href="#shop" className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-xl hover:shadow-indigo-500/25">
            Start Shopping
          </a>
          <button className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-50 dark:hover:bg-slate-700 hover:scale-105 transition-all duration-300 shadow-sm">
            View Offers
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
