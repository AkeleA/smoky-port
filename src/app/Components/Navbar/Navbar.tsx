"use client";

import React, { useState } from "react";
import { Fira_Code } from "next/font/google";
import LanguageSwitcher from "../Language Switcher/Lang";

const fira = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira",
});

const Navbar: React.FC = () => {
  /*const [currentLanguage, setCurrentLanguage] = useState("en");
  const [languageOptions, setLanguageOptions] = useState([
    { value: "EN", label: "English" },
    { value: "FR", label: "French" },
    { value: "ES", label: "Spanish" },
  ]);

  const handleLanguageChange = (selectedLanguage: string) => {
    setCurrentLanguage(selectedLanguage);
    // Perform any necessary actions when language changes
  };

  const currentLanguageOption = languageOptions.find(
    (option) => option.value === currentLanguage
  );*/

  return (
    <div className="flex flex-row justify-between items-end pt-8 pr-0 pb-2 gap-100 absolute w-210 h-15 left-44 top-0 bg-gray-900">
      <div className="flex flex-row gap-2 justify-between">
        <h2 className="font-mono text-white">AKELEOJO</h2>
      </div>
      <div className="flex flex-row items-start p-0 h-5 w-443 flex-none order-1 flex-grow-0 gap-8 font-mono">
        <a className="flex flex-row items-start p-0 w-12 h-5 flex-none order-none flex-grow-0">
          <i className="w-2 h-5 not-italic font-medium text-base leading-5 text-purple-400 flex-none order-none flex-grow-0">
            #
          </i>
          <span className="w-10 h-5 not-italic font-medium text-base leading-5 text-white flex-none order-1 flex-grow-0 cursor-pointer">
            home
          </span>
        </a>
        <a className="flex flex-row items-start p-0 w-16 h-5 flex-none order-1 flex-grow-0 hover:white cursor-pointer">
          <i className="w-2 h-5 not-italic font-medium text-base leading-5 text-purple-400 flex-none order-none flex-grow-0">
            #
          </i>
          <span className="w-12 h-5 not-italic font-normal text-base leading-5 text-gray-500 flex-none order-1 flex-grow-0">
            works
          </span>
        </a>
        <a className="flex flex-row items-start p-0 w-20 h-5 flex-none order-2 flex-grow-0 cursor-pointer">
          <i className="w-2 h-5 not-italic font-normal text-base leading-5 text-purple-400 flex-none order-none flex-grow-0">
            #
          </i>
          <span className="w-20 h-5 not-italic font-normal text-base leading-5 text-gray-500 flex-none order-1 flex-grow-0">
            about-me
          </span>
        </a>
        <a className="flex flex-row items-start p-0 w-20 h-5 flex-none order-3 flex-grow-0 cursor-pointer">
          <i className="w-2 h-5 not-italic font-normal text-base leading-5 text-purple-400 flex-none order-none flex-grow-0">
            #
          </i>
          <span className="w-20 h-5 not-italic font-normal text-base leading-5 text-gray-500 flex-none order-1 flex-grow-0">
            contacts
          </span>
        </a>
      </div>
      {/*<select
        className="appearance-none absolute right-0 back border-none bg-opacity-100 flex-none order-1 flex-grow-0 z-10"
        value={currentLanguage}
        onChange={(e) => handleLanguageChange(e.target.value)}
      >
        {languageOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.value}
          </option>
        ))}
        </select>*/}
    </div>
  );
};

export default Navbar;
