import React from 'react';
import { Link } from 'react-router-dom';
import { Heading } from '../components/Heading';
import { SubHeading } from '../components/SubHeading';
import { Button } from '../components/Button';

export const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-200 to-slate-300 flex flex-col items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-lg text-center">
        <Heading label="PayTM App" />
        <SubHeading label="Your all-in-one solution for secure, fast, and easy financial transactions." />
        
        <div className="mt-8 space-y-6">
          <div className="space-y-4">
            <Link to="/signin">
              <Button 
                label="Sign In" 
                className="transition-transform transform hover:scale-105" 
              />
            </Link>
            <Link to="/signup">
              <Button 
                label="Sign Up" 
                className="transition-transform transform hover:scale-105 bg-green-500 hover:bg-green-600" 
              />
            </Link>
          </div>
          
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-800">Why Choose PayTM App?</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li className="flex items-center justify-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Secure money transfers
              </li>
              <li className="flex items-center justify-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Instant balance checking
              </li>
              <li className="flex items-center justify-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Detailed transaction history
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 text-sm text-gray-500">
          Join millions of users managing their finances effortlessly.
        </div>
      </div>
      
      <footer className="mt-8 text-gray-600 text-sm">
        © 2025 PayTM App. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;