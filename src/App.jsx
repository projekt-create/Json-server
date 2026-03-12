import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProductCard from './components/ProductCard';
import ProductFormModal from './components/ProductFormModal';
import ProductDetail from './components/ProductDetail';
import NotFound from './components/NotFound';
import toast, { Toaster } from 'react-hot-toast';

function App() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

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

  const handleAddProduct = () => {
    setEditingProduct(null);
    setIsModalOpen(true);
  };

  const handleEditProduct = (product) => {
    setEditingProduct(product);
    setIsModalOpen(true);
  };

  const handleDeleteProduct = (id) => {
    toast((t) => (
      <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 min-w-[300px]">
        <p className="font-bold text-slate-900 dark:text-white mb-4 text-lg">
          Delete Product?
        </p>
        <p className="text-slate-600 dark:text-slate-400 mb-6 font-medium">
          Are you sure you want to remove this item? This action cannot be undone.
        </p>
        <div className="flex justify-end gap-3">
          <button
            onClick={() => toast.dismiss(t.id)}
            className="px-4 py-2 rounded-xl font-bold text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-700/50 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={async () => {
              toast.dismiss(t.id);
              try {
                const res = await fetch(`http://localhost:5000/products/${id}`, {
                  method: 'DELETE'
                });

                if (res.ok) {
                  setProducts(products.filter(p => p.id !== id));
                  toast.success("Product deleted successfully!", {
                    style: {
                      borderRadius: '12px',
                      background: '#333',
                      color: '#fff',
                    },
                  });
                } else {
                  toast.error("Failed to delete product.");
                }
              } catch (err) {
                toast.error("Error deleting product.");
              }
            }}
            className="px-5 py-2 bg-red-500 text-white rounded-xl font-bold hover:bg-red-600 transition shadow-lg shadow-red-500/30"
          >
            Delete
          </button>
        </div>
      </div>
    ), {
      duration: 6000,
      position: 'top-center',
      style: {
        background: 'transparent',
        boxShadow: 'none',
        border: 'none',
        padding: 0,
      },
    });
  };

  const handleSubmitProduct = async (formData) => {
    try {
      const isEditing = !!editingProduct;
      const url = isEditing 
        ? `http://localhost:5000/products/${editingProduct.id}` 
        : `http://localhost:5000/products`;
      
      const method = isEditing ? 'PUT' : 'POST';
      
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const savedProduct = await response.json();
        
        if (isEditing) {
          setProducts(products.map(p => p.id === savedProduct.id ? savedProduct : p));
          toast.success("Product updated!");
        } else {
          setProducts([...products, savedProduct]);
          toast.success("Product added!");
        }
        
        setIsModalOpen(false);
      } else {
        toast.error("Failed to save product.");
      }
    } catch (error) {
      toast.error("Error saving product.");
    }
  };

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans transition-colors duration-300 dark:bg-slate-900 overflow-x-hidden">
      
      <Navbar />

      <div className="flex-grow flex flex-col">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/shop" element={
            <main id="shop" className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
              {/* Centralized Header Section */}
              <div className="text-center mb-16 relative">
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-40 bg-indigo-500/10 blur-[100px] rounded-full"></div>
                 
                 <span className="inline-block py-1 px-3 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-wider mb-4 border border-indigo-100 dark:border-indigo-800">
                    Our Collection
                 </span>
                 
                 <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-8 tracking-tight">
                    Explore <span className="text-indigo-500">Premium</span> Products
                 </h2>

                 <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                    {/* Category Filters - Centered */}
                    <div className="flex items-center space-x-2 overflow-x-auto p-1 hide-scrollbar bg-slate-100/50 dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-700">
                       {categories.map((cat) => (
                          <button
                             key={cat.id || cat.name}
                             onClick={() => setActiveCategory(cat.name)}
                             className={`whitespace-nowrap px-6 py-2 rounded-xl font-bold text-sm transition-all duration-300 ${
                                activeCategory === cat.name
                                   ? 'bg-white dark:bg-slate-700 text-indigo-500 shadow-md scale-105'
                                   : 'text-slate-500 dark:text-slate-400 hover:text-indigo-500 dark:hover:text-indigo-400'
                             }`}
                          >
                             {cat.name}
                          </button>
                       ))}
                    </div>

                    <button 
                       onClick={handleAddProduct}
                       className="flex items-center gap-2 px-6 py-3 rounded-2xl font-black text-sm transition-all duration-300 shadow-lg bg-indigo-500 text-white hover:bg-indigo-600 hover:scale-105 hover:shadow-indigo-500/40"
                    >
                       <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
                       <span>Add Product</span>
                    </button>
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
                    <ProductCard 
                      key={product.id} 
                      product={product} 
                      onEdit={() => handleEditProduct(product)}
                      onDelete={() => handleDeleteProduct(product.id)}
                    />
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
          } />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      <Footer />

      <ProductFormModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubmitProduct}
        product={editingProduct}
        // Exclude "All" from categories if we fetch it manually, otherwise use the actual ones from db
        categories={categories.filter(c => c.name !== 'All')}
      />
      <Toaster position="bottom-right" />
      
    </div>
  );
}

export default App;
