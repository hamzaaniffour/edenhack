"use client";
import React, { useEffect, useState } from "react";
import { CgSandClock } from "react-icons/cg";
import { IoCheckmark } from "react-icons/io5";
import styles from "./ProgressBrr.module.css";
import { Typewriter } from "react-simple-typewriter";
import LoadingIcons from "react-loading-icons";

interface ProgressBrrProps {
  onComplete: () => void;
}

const Proccessing: React.FC<ProgressBrrProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const totalTime = 40;
  const intervalTime = (totalTime * 1000) / 100;

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const nextProgress = prevProgress + 1;
        if (nextProgress === 100) {
          onComplete();
        }
        return nextProgress <= 100 ? nextProgress : prevProgress;
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, [intervalTime, onComplete]);
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
          <div className="min-w-9 min-h-9 inline-flex justify-center items-center text-xs align-middle">
            <span className="size-9 flex justify-center items-center flex-shrink-0 bg-zinc-800 font-medium text-zinc-500 rounded-full">
              <CgSandClock className="text-xl text-zinc-500" />
            </span>
            <span className="ms-2 block text-sm font-medium text-zinc-100">
              Vérification
            </span>
          </div>
          <div className="w-full h-px flex-1 bg-gray-200 group-last:hidden dark:bg-neutral-700" />
        </li>
      </ul>
      <div className="mt-5 bg-zinc-800 rounded-md p-4" id="hamza">
        <div className="pb-3 mb-5 border-b-[1px] border-zinc-700">
          <h3 className="text-zinc-100 font-semibold text-[19px] mb-2">
            Ce processus peut prendre quelques minutes. ####
          </h3>
        </div>
        <div className="bg-zinc-900 p-4 rounded">
          <div className="flex justify-start items-center gap-2 mb-3">
            <span className="h-3 w-3 bg-red-400 rounded-full"></span>
            <span className="h-3 w-3 bg-amber-400 rounded-full"></span>
            <span className="h-3 w-3 bg-green-400 rounded-full"></span>
          </div>
          {/* {profilePicUrl && (
            <div className="flex justify-center mb-5">
              <img
                src={profilePicUrl}
                alt="Profile"
                className="rounded-full w-24 h-24"
              />
            </div>
          )} */}
          <div
            className="flex justify-center mb-8 text-zinc-200 font-semibold text-sm"
            id="thisusername"
          >
            Cristiano Ronaldo
          </div>
          <div className="flex justify-center items-center mb-6">
            <LoadingIcons.Bars width={45} height={45} fill="#fffc00" />
          </div>
          <div className="flex justify-center items-center mb-10">
            <p className="text-[#7bbb29] font-semibold text-sm">
              <Typewriter
                words={[
                  "Etablir la connexion et attaquer...",
                  "Obtention des donnees du serveur...",
                  "Recherche dans la base de données...",
                  "Obtention de donnees...",
                  "Copie de dennees depuis Snapchat...",
                  "Obtention de toutes les donnees a telecharger sur le serveur...",
                  "Fin du processus.",
                ]}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={45}
                deleteSpeed={35}
                delaySpeed={1000}
              />
            </p>
          </div>
          <div className={styles.progressBar}>
            <div className={`${styles.progressContainer} bg-zinc-900`}>
              <span
                className={`${styles.progressText} absolute font-bold text-zinc-100 flex justify-center items-center`}
                style={{ left: `${progress}%` }}
              >
                {progress}%
              </span>
              <div
                className={styles.progressBarFill}
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proccessing;
