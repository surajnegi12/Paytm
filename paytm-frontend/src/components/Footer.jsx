import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white/30 backdrop-blur-lg border-t border-gray-200/50 py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
      
          <div>
            <Link to="/dashboard">
              <span className="text-2xl font-bold text-indigo-600 ">
                PayTM App
              </span>
            </Link>
            <p className="mt-2 text-sm text-gray-600">
              Secure. Fast. Trusted.
            </p>
          </div>

       
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  to="/dashboard"
                  className="text-gray-600 hover:text-indigo-600 transition-colors duration-300"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  to="/checkbalance"
                  className="text-gray-600 hover:text-indigo-600 transition-colors duration-300"
                >
                  Check Balance
                </Link>
              </li>
              <li>
                <Link
                  to="/history"
                  className="text-gray-600 hover:text-indigo-600 transition-colors duration-300"
                >
                  Transaction History
                </Link>
              </li>
            </ul>
          </div>

          
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Connect</h3>
            <div className="mt-4 flex justify-center md:justify-start space-x-4">
              <a
                href="#"
                className="text-gray-600 hover:text-indigo-600 transition-transform duration-300 transform hover:scale-110"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-indigo-600 transition-transform duration-300 transform hover:scale-110"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-indigo-600 transition-transform duration-300 transform hover:scale-110"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
            <p className="mt-4 text-sm text-gray-600">
              Contact: support@paytmapp.com
            </p>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} PayTM App. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;