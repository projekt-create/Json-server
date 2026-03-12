import PropTypes from 'prop-types';

const ProductCard = ({ product }) => {
  return (
    <div className="group bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-slate-100 dark:border-slate-700/50 flex flex-col">
      <div className="relative h-72 overflow-hidden bg-slate-100 dark:bg-slate-700 p-4">
        <div className="absolute inset-0 bg-slate-200/50 dark:bg-slate-700/50 animate-pulse group-hover:hidden"></div>
        <img 
          src={product.image} 
          alt={product.name} 
          className="relative z-10 w-full h-full object-cover rounded-2xl group-hover:scale-110 transition-transform duration-700 ease-in-out"
          loading="lazy"
        />
        <div className="absolute top-6 left-6 z-20 bg-white/90 backdrop-blur-sm dark:bg-slate-800/90 px-3 py-1 rounded-full text-xs font-bold text-slate-800 dark:text-slate-200 shadow-sm border border-slate-200 dark:border-slate-600">
          {product.category}
        </div>
        <button className="absolute top-6 right-6 z-20 p-2 bg-white/80 backdrop-blur-md rounded-full text-slate-400 hover:text-red-500 hover:bg-white transition-all duration-300 shadow-sm opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
        </button>
      </div>
      
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 line-clamp-2 leading-snug group-hover:text-indigo-500 transition-colors">
            {product.name}
          </h3>
          <div className="flex items-center space-x-1 mb-4">
            {[1,2,3,4,5].map(star => (
              <svg key={star} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            ))}
            <span className="text-xs text-slate-500 ml-2">(124)</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between border-t border-slate-100 dark:border-slate-700/50 pt-4 mt-2">
          <span className="text-2xl font-black text-slate-900 dark:text-white">
            ${product.price.toFixed(2)}
          </span>
          <button className="bg-slate-100 hover:bg-slate-900 text-slate-900 hover:text-white dark:bg-slate-700 dark:text-white dark:hover:bg-indigo-600 px-4 py-2.5 rounded-xl font-bold transition-all duration-300 flex items-center gap-2 group/btn">
            <span>Add</span>
            <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
          </button>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductCard;
