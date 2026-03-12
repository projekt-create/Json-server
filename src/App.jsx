import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProductCard from './components/ProductCard';

function App() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [productsRes, categoriesRes] = await Promise.all([
          fetch('http://localhost:5000/products'),
          fetch('http://localhost:5000/categories')
        ]);

        if (!productsRes.ok || !categoriesRes.ok) {
          throw new Error('Failed to fetch data');
        }

        const productsData = await productsRes.json();
        const categoriesData = await categoriesRes.json();

        setProducts(productsData);
        setCategories(categoriesData);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans transition-colors duration-300 dark:bg-slate-900 overflow-x-hidden">
      
      <Navbar />
      <Hero />

      <main id="shop" className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 md:mb-0">
            Featured Products
          </h2>
          
          <div className="flex items-center space-x-2 overflow-x-auto pb-4 md:pb-0 hide-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.name)}
                className={`whitespace-nowrap px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-200 shadow-sm ${
                  activeCategory === cat.name
                    ? 'bg-indigo-500 text-white shadow-indigo-500/30 ring-2 ring-indigo-500 ring-offset-2 dark:ring-offset-slate-900 scale-105'
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {loading && (
          <div className="flex justify-center items-center py-32">
            <div className="relative w-20 h-20">
              <div className="absolute top-0 left-0 w-full h-full border-4 border-indigo-200 dark:border-indigo-900 rounded-full"></div>
              <div className="absolute top-0 left-0 w-full h-full border-4 border-indigo-500 rounded-full border-t-transparent animate-spin"></div>
            </div>
          </div>
        )}

        {error && (
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-2xl p-8 max-w-2xl mx-auto text-center transform hover:scale-105 transition-transform duration-300">
            <svg className="w-16 h-16 text-red-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <h3 className="text-2xl font-bold text-red-600 dark:text-red-400 mb-2">Oops! Cannot load products</h3>
            <p className="text-red-500 dark:text-red-300">{error}</p>
            <button onClick={() => window.location.reload()} className="mt-6 px-6 py-2 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-100 font-semibold rounded-lg hover:bg-red-200 dark:hover:bg-red-800 transition-colors">Try again</button>
          </div>
        )}

        {!loading && !error && (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
        
        {!loading && !error && filteredProducts.length === 0 && (
          <div className="text-center py-24">
            <h3 className="text-2xl font-bold text-slate-700 dark:text-slate-300">No products found for this category.</h3>
            <button onClick={() => setActiveCategory('All')} className="mt-4 text-indigo-500 font-semibold hover:underline">View all products</button>
          </div>
        )}
      </main>

      <About />
      <Contact />
      <Footer />
      
    </div>
  );
}

export default App;
