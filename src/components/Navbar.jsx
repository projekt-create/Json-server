const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center cursor-pointer group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300 shadow-lg">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            </div>
            <span className="ml-3 text-2xl font-black text-slate-900 dark:text-white tracking-tight">Tech<span className="text-indigo-500">Store</span></span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#" className="flex items-center text-slate-600 hover:text-indigo-500 dark:text-slate-300 dark:hover:text-indigo-400 font-medium transition-colors">Home</a>
            <a href="#shop" className="flex items-center text-slate-600 hover:text-indigo-500 dark:text-slate-300 dark:hover:text-indigo-400 font-medium transition-colors">Shop</a>
            <a href="#about" className="flex items-center text-slate-600 hover:text-indigo-500 dark:text-slate-300 dark:hover:text-indigo-400 font-medium transition-colors">About Us</a>
            <a href="#contact" className="flex items-center text-slate-600 hover:text-indigo-500 dark:text-slate-300 dark:hover:text-indigo-400 font-medium transition-colors">Contact</a>
          </div>
          <div className="flex items-center">
            <button className="relative p-2 text-slate-600 hover:text-indigo-500 dark:text-slate-300 transition-colors">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-red-500 rounded-full">3</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
