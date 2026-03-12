const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-100 dark:bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute inset-0 bg-indigo-500 rounded-3xl transform translate-x-4 translate-y-4 opacity-50 dark:opacity-20"></div>
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80" alt="Team collaborating" className="relative rounded-3xl shadow-2xl object-cover h-[400px] w-full" />
            </div>
          </div>
          <div className="lg:w-1/2">
            <span className="text-indigo-500 font-bold tracking-wider uppercase text-sm mb-4 block">Our Story</span>
            <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-6">
              Passionate about premium tech.
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              We started TechStore with a simple idea: bringing the most innovative and high-quality electronics directly to creators and professionals. No gimmicks, just pure performance and stunning design.
            </p>
            <div className="grid grid-cols-2 gap-8 mt-10">
              <div>
                <h4 className="text-4xl font-black text-slate-900 dark:text-white mb-2">10k+</h4>
                <p className="text-sm font-semibold text-slate-500">Happy Customers</p>
              </div>
              <div>
                <h4 className="text-4xl font-black text-slate-900 dark:text-white mb-2">24/7</h4>
                <p className="text-sm font-semibold text-slate-500">Expert Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
