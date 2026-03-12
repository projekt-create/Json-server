import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex-grow flex items-center justify-center p-4">
      <div className="text-center max-w-lg w-full">
        <div className="relative mb-8">
          <h1 className="text-9xl font-black text-slate-200 dark:text-slate-800 animate-pulse">404</h1>
          <p className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-slate-900 dark:text-white mt-4">
            Page Not Found
          </p>
        </div>
        <p className="text-slate-600 dark:text-slate-400 mb-8 text-lg">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-3 rounded-2xl font-bold transition-all transform hover:-translate-y-1 shadow-lg shadow-indigo-500/30"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
