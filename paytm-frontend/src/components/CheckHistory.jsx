import React from 'react';
import { Link } from 'react-router-dom';

function CheckHistory() {
  return (
    <div className="relative bg-white/30 backdrop-blur-lg rounded-3xl shadow-2xl p-8 transform transition-all hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(34,197,94,0.5)] border border-green-200/50">
      <div className="flex items-center space-x-6">
        <div className="flex-shrink-0 relative group">
          <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center transition-transform group-hover:scale-110 duration-300">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-gray-900">Transaction History</h3>
          <p className="text-sm text-gray-700 mt-2">Review all your past transactions effortlessly.</p>
        </div>
      </div>
      <Link to="/history">
        <button className="mt-6 w-full bg-green-500 text-white px-6 py-3 rounded-xl font-medium hover:bg-green-600 transition-all duration-300 transform hover:scale-105 shadow-md">
          View History
        </button>
      </Link>
      <div className="absolute inset-0 bg-gradient-to-r from-green-100/20 to-transparent rounded-3xl -z-10"></div>
    </div>
  );
}

export default CheckHistory;