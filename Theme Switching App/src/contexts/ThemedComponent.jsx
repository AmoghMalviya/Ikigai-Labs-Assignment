import React from "react";
import { useThemeContext } from "./ThemeContext";

const ThemeComponent = () => {
  const { theme } = useThemeContext();

  return (
    <div className={`p-4 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-yellow-200 text-black'} rounded-lg mt-4 border border-solid border-black  max-w-xs`}>
      <div className="max-w-xs mx-auto overflow-hidden rounded shadow-lg">
       
        <img className="w-full rounded-xl h-32 object-contain" src="data:image/jpeg;base64,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" alt="Product" />

        <div className="px-6 py-4">
          
          <div className="font-bold text-l mb-2">Intel Core i9-11900K Desktop Processor</div>

          <p className={`text-${theme === 'dark' ? 'white' : 'black'} text-sm` }>
          1, 8 Cores up to 5.3 GHz Unlocked LGA1200 (500 Series & Select 400 Series Chipset) 125W 
              </p>
        </div>

        <div className={`px-4 py-6 text-${theme === 'dark' ? 'white' : 'black'} text-sm` }>
          
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Rs. 34,699</span>

          
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">4.6 stars</span>
        </div>
      </div>
    </div>
  );
};

export default ThemeComponent;
