import React, { useState } from "react";
import { CgSandClock } from "react-icons/cg";
import { IoCheckmark } from "react-icons/io5";
import { LiaSmsSolid } from "react-icons/lia";
import { LuPhoneCall } from "react-icons/lu";
import {
  MdOutlineNotificationsActive,
  MdOutlineVideoLibrary,
} from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { TbPhotoSquareRounded } from "react-icons/tb";

const Choosing = () => {
  // State to handle the checked state of each checkbox
  const [checkedOptions, setCheckedOptions] = useState({
    photos: false,
    videos: false,
    messages: false,
    notifications: false,
    calls: false,
    password: true, // initially checked as per your example
  });

  // Handler for checkbox change
  const handleCheckboxChange = (option: keyof typeof checkedOptions) => {
    setCheckedOptions((prevState) => ({
      ...prevState,
      [option]: !prevState[option],
    }));
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
          <div className="min-w-9 min-h-9 inline-flex justify-center items-center text-xs align-middle">
            <span className="size-9 flex justify-center items-center flex-shrink-0 bg-zinc-800 font-medium text-zinc-500 rounded-full">
              <CgSandClock className="text-xl text-zinc-500" />
            </span>
            <span className="ms-2 block text-sm font-medium text-zinc-100">
              Traitement
            </span>
          </div>
          <div className="w-full h-[2px] relative top-[2px] flex-1 bg-gray-200 group-last:hidden" />
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
        <div className="pb-5 mb-5 border-b-[1px] border-zinc-700">
          <h3 className="text-zinc-100 font-semibold text-[19px] mb-2">
            Que voudriez-vous pirater?
          </h3>
          <p className="text-zinc-100 font-semibold text-[16px] mb-1">
            Selectionnez votre option de piratage ci-dessous puis cliquez sur le
            bouton &#39;{" "}
            <span className="text-[#7bbb29] capitalize">Étape suivante</span> &#39;.
          </p>
        </div>
        <div className="bg-zinc-900 p-4 rounded">
          <div className="flex justify-start items-center gap-2 mb-3">
            <span className="h-3 w-3 bg-red-400 rounded-full"></span>
            <span className="h-3 w-3 bg-amber-400 rounded-full"></span>
            <span className="h-3 w-3 bg-green-400 rounded-full"></span>
          </div>
          <h4 className="text-zinc-100 font-semibold text-[14px]">
            Veuillez choisir ce que vous voulez obtenir apres le piratage!
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-4">
            {/* Photos */}
            <div className="rounded bg-zinc-800 py-4">
              <div className="flex justify-center items-center flex-col">
                <TbPhotoSquareRounded className="text-zinc-100 text-3xl mb-2" />
                <p className="text-zinc-100 font-semibold text-[14px] text-center mb-4">
                  Photos
                </p>
                <label className="inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={checkedOptions.photos}
                    onChange={() => handleCheckboxChange("photos")}
                  />
                  <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-[#7bbb29] rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all !outline-none dark:border-gray-600 peer-checked:bg-[#7bbb29]" />
                </label>
              </div>
            </div>

            {/* Videos */}
            <div className="rounded bg-zinc-800 py-4">
              <div className="flex justify-center items-center flex-col">
                <MdOutlineVideoLibrary className="text-zinc-100 text-3xl mb-2" />
                <p className="text-zinc-100 font-semibold text-[14px] text-center mb-4">
                  Videos
                </p>
                <label className="inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={checkedOptions.videos}
                    onChange={() => handleCheckboxChange("videos")}
                  />
                  <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-[#7bbb29] rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all !outline-none dark:border-gray-600 peer-checked:bg-[#7bbb29]" />
                </label>
              </div>
            </div>

            {/* Messages */}
            <div className="rounded bg-zinc-800 py-4">
              <div className="flex justify-center items-center flex-col">
                <LiaSmsSolid className="text-zinc-100 text-3xl mb-2" />
                <p className="text-zinc-100 font-semibold text-[14px] text-center mb-4">
                  Messages
                </p>
                <label className="inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={checkedOptions.messages}
                    onChange={() => handleCheckboxChange("messages")}
                  />
                  <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-[#7bbb29] rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all !outline-none dark:border-gray-600 peer-checked:bg-[#7bbb29]" />
                </label>
              </div>
            </div>

            {/* Notifications */}
            <div className="rounded bg-zinc-800 py-4">
              <div className="flex justify-center items-center flex-col">
                <MdOutlineNotificationsActive className="text-zinc-100 text-3xl mb-2" />
                <p className="text-zinc-100 font-semibold text-[14px] text-center mb-4">
                  Notifications
                </p>
                <label className="inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={checkedOptions.notifications}
                    onChange={() => handleCheckboxChange("notifications")}
                  />
                  <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-[#7bbb29] rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all !outline-none dark:border-gray-600 peer-checked:bg-[#7bbb29]" />
                </label>
              </div>
            </div>

            {/* Calls */}
            <div className="rounded bg-zinc-800 py-4">
              <div className="flex justify-center items-center flex-col">
                <LuPhoneCall className="text-zinc-100 text-3xl mb-2" />
                <p className="text-zinc-100 font-semibold text-[14px] text-center mb-4">
                  Calls
                </p>
                <label className="inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={checkedOptions.calls}
                    onChange={() => handleCheckboxChange("calls")}
                  />
                  <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-[#7bbb29] rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all !outline-none dark:border-gray-600 peer-checked:bg-[#7bbb29]" />
                </label>
              </div>
            </div>

            {/* Password */}
            <div className="rounded bg-zinc-800 py-4">
              <div className="flex justify-center items-center flex-col">
                <RiLockPasswordLine className="text-zinc-100 text-3xl mb-2" />
                <p className="text-zinc-100 font-semibold text-[14px] text-center mb-4">
                  Password
                </p>
                <label className="inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={checkedOptions.password}
                    onChange={() => handleCheckboxChange("password")}
                  />
                  <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-[#7bbb29] rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all !outline-none dark:border-gray-600 peer-checked:bg-[#7bbb29]" />
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choosing;