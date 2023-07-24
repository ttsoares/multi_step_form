"use client";
import { useState } from "react";

import { atom } from "jotai";

export const userName = atom("");
export const userEmail = atom("");
export const userPhone = atom("");
export const userPlan = atom("Arcade"); //____<String>: Arcade/Advance/Pro
export const userBilling = atom("monthly"); //_<String>:monthly/yearly
export const userValue = atom(12); //___<Number>: 9/90, 12/120, 15/150
export const userAddOns = atom([null, null, null]); //__Array:<Boolean>
export const userConfirm = atom(false);

import Step1 from "/components/Step1.jsx";
import Step2 from "/components/Step2.jsx";
import Step3 from "/components/Step3.jsx";
import Step4 from "/components/Step4.jsx";
import Step5 from "/components/Step5.jsx";

export default function Home() {
  const [step, setStep] = useState(1);

  function next() {
    setStep((prev) => prev + 1);
  }

  function back() {
    setStep((prev) => prev - 1);
  }

  return (
    <main className=" flex h-full w-full md:justify-center md:items-center bg-light_blue">
      <div className="bg-white flex flex-col w-full items-start justify-start md:flex-row md:items-center  md:w-1/2 rounded-lg">
        {/*------------ */}
        <div className="flex flex-col md:flex-row h-44 w-full bg-bg-menu-mob bg-cover bg-no-repeat md:bg-auto md:h-[575px] md:w-[280px] md:bg-bg-menu-dsk md:ml-3 md:mt-2">
          {/* ----------------- */}
          <div className=" mt-5 md:mt-10 flex justify-center items-center md:justify-start md:items-start md:ml-10 md:flex-col text-white">
            {/* ----------------------- */}
            <div className="flex mb-6">
              <div
                className={`flex mr-4 text-sm md:text-base h-7 w-7 md:h-10 md:w-10 rounded-full items-center justify-center 
                ${
                  step === 1
                    ? "bg-light_blue text-marine_blue"
                    : "bg-transparent border-2 border-white rounded-full"
                }
                `}
              >
                <h1>1</h1>
              </div>

              <div className="hidden md:block">
                <h2 className="text-cool_gray text-sm">STEP 1</h2>
                <h3 className="font-bold text-white">YOUR INFO</h3>
              </div>
            </div>

            <div className="flex mb-6">
              <div
                className={`flex mr-4 text-sm md:text-base h-7 w-7 md:h-10 md:w-10 rounded-full items-center justify-center 
                ${
                  step === 2
                    ? "bg-light_blue text-marine_blue"
                    : "bg-transparent border-2 border-white rounded-full"
                }
                `}
              >
                <h1>2</h1>
              </div>
              <div className="hidden md:block">
                <h2 className="text-cool_gray text-sm">STEP 2</h2>
                <h3 className="font-bold text-white">SELECT PLAN</h3>
              </div>
            </div>

            <div className="flex mb-6">
              <div
                className={`flex mr-4 text-sm md:text-base h-7 w-7 md:h-10 md:w-10 rounded-full items-center justify-center 
                ${
                  step === 3
                    ? "bg-light_blue text-marine_blue"
                    : "bg-transparent border-2 border-white rounded-full"
                }
                `}
              >
                <h1>3</h1>
              </div>
              <div className="hidden md:block">
                <h2 className="text-cool_gray text-sm">STEP 3</h2>
                <h3 className="font-bold text-white">ADD-ONS</h3>
              </div>
            </div>

            <div className="flex mb-6">
              <div
                className={`flex mr-4 text-sm md:text-base h-7 w-7 md:h-10 md:w-10 rounded-full items-center justify-center 
                ${
                  step === 4 || step === 5
                    ? "bg-light_blue text-marine_blue"
                    : "bg-transparent border-2 border-white rounded-full"
                }
                `}
              >
                <h1>4</h1>
              </div>
              <div className="hidden md:block">
                <h2 className="text-cool_gray text-sm">STEP 4</h2>
                <h3 className="font-bold text-white">SUMMARY</h3>
              </div>
            </div>
          </div>
        </div>
        {/* +++++++++++++++ */}
        <div className="flex flex-col w-full h-full bg-blue-200 md:h-2/3 md:w-2/3">
          {step === 1 && <Step1 next={next} />}
          {step === 2 && <Step2 next={next} back={back} />}
          {step === 3 && <Step3 next={next} back={back} />}
          {step === 4 && <Step4 next={next} back={back} />}
          {step === 5 && <Step5 />}
        </div>
      </div>
    </main>
  );
}
