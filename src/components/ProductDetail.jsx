import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:5000/products/${id}`);
        if (!response.ok) throw new Error('Product not found');
        const data = await response.json();
        setProduct(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) return (
    <div className="flex-grow flex items-center justify-center p-20">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-indigo-500"></div>
    </div>
  );

  if (error || !product) return (
    <div className="flex-grow flex flex-col items-center justify-center p-20">
      <h2 className="text-2xl font-bold text-red-500 mb-4">{error || 'Product not found'}</h2>
      <Link to="/shop" className="text-indigo-500 font-semibold hover:underline">Back to Shop</Link>
    </div>
  );

  return (
    <div className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
      <Link to="/shop" className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-indigo-500 mb-8 font-medium transition-colors">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
        Back to Products
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
        <div className="relative group">
          <div className="absolute -inset-4 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="relative aspect-square rounded-[2rem] overflow-hidden bg-white dark:bg-slate-800 shadow-xl border border-slate-100 dark:border-slate-700">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-sm font-bold w-fit mb-6">
            {product.category}
          </span>
          <h1 className="text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-6 leading-tight">
            {product.name}
          </h1>
          <div className="flex items-center gap-1 mb-8">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg key={star} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            ))}
            <span className="text-slate-500 dark:text-slate-400 text-sm font-medium ml-2">(4.8 Customer Rating)</span>
          </div>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
            Experience the next level of technology with our {product.name}. Designed for peak performance and built to last, it's the perfect addition to your tech arsenal.
          </p>
          <div className="flex items-center gap-8 mb-10">
            <div>
              <span className="block text-slate-500 dark:text-slate-400 text-sm font-bold uppercase tracking-wider mb-1">Price</span>
              <span className="text-4xl font-black text-slate-900 dark:text-white">${product.price.toFixed(2)}</span>
            </div>
          </div>
          <div className="flex gap-4">
            <button className="flex-grow bg-indigo-500 hover:bg-indigo-600 text-white py-4 px-8 rounded-2xl font-black text-lg transition-all transform hover:-translate-y-1 shadow-lg shadow-indigo-500/30 flex items-center justify-center gap-3">
              Add to Cart
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
            </button>
            <button className="p-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl text-slate-400 hover:text-red-500 transition-colors shadow-sm">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
