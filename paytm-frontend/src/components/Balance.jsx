import React from 'react';
import { Link } from 'react-router-dom';

export const Balance = () => {
  return (
    <div className="relative bg-white/30 backdrop-blur-lg rounded-3xl shadow-2xl p-8 transform transition-all hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(79,70,229,0.5)] border border-indigo-200/50">
      <div className="flex items-center space-x-6">
        <div className="flex-shrink-0 relative group">
          <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-full flex items-center justify-center transition-transform group-hover:scale-110 duration-300">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-gray-900">Check Balance</h3>
          <p className="text-sm text-gray-700 mt-2">View your account balance instantly with a single click.</p>
        </div>
      </div>
      <Link to="/checkbalance">
        <button className="mt-6 w-full bg-indigo-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-md">
          View Balance
        </button>
      </Link>
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-100/20 to-transparent rounded-3xl -z-10"></div>
    </div>
  );
};