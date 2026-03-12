import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const ProductCard = ({ product, onEdit, onDelete }) => {
  return (
    <div className="group bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-slate-100 dark:border-slate-700/50 flex flex-col relative text-left">
      <Link to={`/product/${product.id}`} className="relative h-72 overflow-hidden bg-slate-100 dark:bg-slate-700 p-4 block">
        <div className="absolute inset-0 bg-slate-200/50 dark:bg-slate-700/50 animate-pulse group-hover:hidden"></div>
        <img 
          src={product.image} 
          alt={product.name} 
          className="relative z-10 w-full h-full object-cover rounded-2xl group-hover:scale-110 transition-transform duration-700 ease-in-out"
          loading="lazy"
        />
      </Link>
      
      <div className="absolute top-6 left-6 z-20 bg-white/90 backdrop-blur-sm dark:bg-slate-800/90 px-3 py-1 rounded-full text-xs font-bold text-slate-800 dark:text-slate-200 shadow-sm border border-slate-200 dark:border-slate-600">
        {product.category}
      </div>
      
      <div className="absolute top-6 right-6 z-30 flex gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
        {onEdit && (
          <button 
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); onEdit(); }}
            className="p-2 bg-white/90 backdrop-blur-md rounded-full text-blue-500 hover:bg-blue-500 hover:text-white shadow-sm transition-colors"
            title="Edit Product"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
          </button>
        )}
        {onDelete && (
          <button 
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); onDelete(); }}
            className="p-2 bg-white/90 backdrop-blur-md rounded-full text-red-500 hover:bg-red-500 hover:text-white shadow-sm transition-colors"
            title="Delete Product"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
          </button>
        )}
      </div>
      
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <Link to={`/product/${product.id}`}>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 line-clamp-2 leading-snug group-hover:text-indigo-500 transition-colors">
              {product.name}
            </h3>
          </Link>
          <div className="flex items-center space-x-1 mb-4">
            {[1,2,3,4,5].map(star => (
              <svg key={star} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            ))}
            <span className="text-xs text-slate-500 ml-2">(124)</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between border-t border-slate-100 dark:border-slate-700/50 pt-4 mt-2">
          <span className="text-2xl font-black text-slate-900 dark:text-white">
            ${product.price ? product.price.toFixed(2) : '0.00'}
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
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
};

export default ProductCard;
