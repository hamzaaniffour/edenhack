"use client";
import React, { useState } from "react";
import Logo from "@/public/assets/logo.svg";
import Image from "next/image";
import CheckBox from "./Inputs/Checkbox";
import Banner from "@/public/assets/EN_1.Android.Monitoring.App_300x250.png";
import Link from "next/link";
import Choosing from "./Steps/Choosing";
import Proccessing from "./Steps/Proccessing";
import Validation from "./Steps/Validation";
import Sidebar from "./Sidebar/Sidebar";

const aff_link =
  "https://track.mspy.click/aff_c?offer_id=2&aff_id=10682&url_id=63";

const MultiStepForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({ username: "", email: "" });

  // Simple validation check
  const validateStep1 = () => {
    let valid = true;
    let usernameError = "";
    let emailError = "";

    if (!formData.username) {
      usernameError = "Le nom d'utilisateur est requis";
      valid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      emailError = "Format d'email non valide";
      valid = false;
    }

    setErrors({
      username: usernameError,
      email: emailError,
    });
    return valid;
  };

  const handleProgressComplete = () => {};

  const handleSubmitStep1 = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep1()) {
      setStep(2);
    }
  };

  const handleStep2Submit = () => {
    setStep(3);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(4);
    }, 40000);
  };

  return (
    <div className="lg:flex gap-6">
      <div className="lg:w-8/12">
        <div className="p-5 bg-zinc-950 shadow-lg rounded-md mb-8 lg:mb-6">
          {step === 1 && (
            <form onSubmit={handleSubmitStep1}>
              <div className="flex justify-center items-center">
                <Image
                  src={Logo}
                  alt="Logo"
                  width={55}
                  height={55}
                  className="mb-8"
                />
              </div>
              <div className="w-100 mb-4">
                <div className="relative h-14 w-full">
                  <input
                    className="peer h-full w-full rounded-md border-2 border-zinc-800 bg-zinc-950 px-3 py-3 font-sans text-sm font-medium text-zinc-200 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-zinc-800 placeholder-shown:border-t-zinc-800 focus:border-2 focus:border-[#fffc00] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-zinc-700"
                    placeholder=" "
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={(e) =>
                      setFormData({ ...formData, username: e.target.value })
                    }
                  />
                  <label
                    style={{
                      color: errors.email ? "rgb(255 0 0 / 74%)" : "",
                    }}
                    className="before:content[' '] after:content[' '] text-zinc-300 pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-medium leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-transparent before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-transparent after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.65] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#fffc00] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-[#fffc00] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-[#fffc00] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
                  >
                    Nom d&#39;utilisateur
                  </label>
                </div>
                {errors.username && (
                  <p className="text-red-500 text-sm mt-1">{errors.username}</p>
                )}
              </div>
              <div className="w-100 mb-2">
                <div className="relative h-14 w-full">
                  <input
                    className="peer h-full w-full rounded-md border-2 border-zinc-800 bg-zinc-950 px-3 py-3 font-sans text-sm font-medium text-zinc-200 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-zinc-800 placeholder-shown:border-t-zinc-800 focus:border-2 focus:border-[#fffc00] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-zinc-700"
                    placeholder=" "
                    type="text"
                    name="first_name"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                  <label
                    style={{
                      color: errors.email ? "rgb(255 0 0 / 74%)" : "",
                    }}
                    className="before:content[' '] after:content[' '] text-zinc-300 pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-medium leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-transparent before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-transparent after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.65] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#fffc00] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-[#fffc00] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-[#fffc00] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
                  >
                    Votre adresse électronique
                  </label>
                </div>
                {errors.username && (
                  <p className="text-red-500 text-sm mt-1">{errors.username}</p>
                )}
              </div>
              <div className="flex items-center">
                <CheckBox />
              </div>
              <button
                type="submit"
                className="w-full bg-[#fffc00] mt-3 text-zinc-900 py-3 font-semibold text-lg px-8 rounded duration-400 hover:bg-zinc-800 transition-all hover:text-[#fffc00]"
              >
                Obtenir le mot de passe
              </button>
            </form>
          )}

          {step === 2 && (
            <div>
              <Choosing />
              <button
                onClick={handleStep2Submit}
                className="w-full capitalize bg-[#fffc00] mt-5 text-zinc-900 py-3 font-semibold text-lg px-8 rounded duration-400 hover:bg-zinc-800 transition-all hover:text-[#fffc00]"
              >
                Étape suivante
              </button>
            </div>
          )}

          {step === 3 && loading && (
            <div>
              <Proccessing
                onComplete={handleProgressComplete}
                username={formData.username}
              />
            </div>
          )}

          {step === 4 && <Validation />}
        </div>
      </div>
      <div className="lg:w-4/12">
        <div className="w-full">
          <Link href={aff_link} target="_blank">
            <Image
              src={Banner}
              alt="mSpy"
              className="w-full"
              width={0}
              height={0}
            />
          </Link>
        </div>
        <Sidebar />
      </div>
    </div>
  );
};

export default MultiStepForm;
