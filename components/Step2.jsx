"use client";

import { useState } from "react";
import Toggler from "./Toggler";
import { useAtom } from "jotai";
import { userPlan, userBilling, userValue } from "../app/page";

import CustomButton from "./Button";

import Image from "next/image";

const plans = [
  {
    icon: "/images/icon-arcade.svg",
    type: "Arcade",
    value: "9",
    choosed: false, // only for CSS
  },
  {
    icon: "/images/icon-advanced.svg",
    type: "Advanced",
    value: "12",
    choosed: false, // only for CSS
  },
  {
    icon: "/images/icon-pro.svg",
    type: "Pro",
    value: "15",
    choosed: false, // only for CSS
  },
];

//---------------------------------------
const Step2 = ({ next, back }) => {
  const [plan, setPlan] = useAtom(userPlan); // String
  const [billing, setBilling] = useAtom(userBilling); //String
  const [value, setValue] = useAtom(userValue); //Number

  const [checked, setChecked] = useState(
    billing === "" || billing === "monthly"
  );

  const [choosedPlan, setChoosedPlan] = useState(null);

  const saveNext = () => {
    // TODO não pode avançar sem escolher um plano

    setPlan(plans[choosedPlan].type);
    setBilling(checked ? "monthly" : "yearly");
    const correctValue = checked
      ? Number(plans[choosedPlan].value) //monthly
      : Number(plans[choosedPlan].value * 10); // yearly
    setValue(correctValue);

    if (choosedPlan !== null) {
      next();
    }
  };

  function handleChangePlan(planIndex) {
    setChoosedPlan(planIndex);
    // only for CSS --> border
    plans[0].choosed = false;
    plans[1].choosed = false;
    plans[2].choosed = false;
    plans[planIndex].choosed = true;
  }

  return (
    <div className="absolute rounded-lg top-16 h-fit left-3 mt-5 md:mt-0 w-11/12 md:static md:w-full flex md:justify-start bg-white">
      {/*  */}
      <div className="flex flex-col md:justify-center w-full mt-5 mr-5 ml-5 text-marine_blu">
        {/*  */}
        <h1 className="text-xl mb-3 md:text-3xl font-bold md:mt-3">
          Select your plan
        </h1>
        <p className="text-sm text-cool_gray mb-6">
          You have the option of monthly or yearly billing.
        </p>
        <div className="flex flex-col md:flex-row">
          {/* Cards */}
          {plans.map((card, index) => (
            <div
              className={`w-full md:w-1/3 flex md:flex-col  mb-3  md:m-2 p-2 bg-white border border-gray-300 rounded-lg shadow hover:bg-slate-200 ${
                card.choosed ? "border-4 border-black" : ""
              }`}
              key={index}
              onClick={() => handleChangePlan(index)}
            >
              <div className="h-3 md:h-10 md:mb-10">
                <Image src={card.icon} width={60} height={60} alt="Logo1" />
              </div>

              <div className="flex flex-col ml-1 ">
                <h5 className="text-base mt-0 md:text-2xl font-bold text-gray-900 ">
                  {card.type}
                </h5>

                <p className=" text-sm md:text-base font-normal text-gray-700 dark:text-gray-400">
                  {/* Yealy = monthly * 10 */}
                  {`$${Number(card.value) * (checked ? 1 : 10)}/${
                    checked ? "mo" : "yr"
                  }`}
                </p>
                <p className={`${!checked ? "block" : "hidden"}`}>
                  2 months free
                </p>
              </div>
            </div>
          ))}
        </div>

        <form className="w-[97%]  bg-slate-200  p-3 mt-4 mb-5 md:ml-2 flex justify-center items-center">
          <div className="flex w-44">
            <p>Monthtly</p>
            {/*  */}
            <Toggler state={checked} setState={setChecked} />
            {/*  */}
            <p>Yearly</p>
          </div>
        </form>

        <div className="flex w-[110%] md:w-full bg-white justify-between absolute -left-3 -bottom-24 md:mt-5 md:static">
          <CustomButton
            classes="mt-1 bg-white hover:text-white text-blue-950"
            click={back}
          >
            Go Back
          </CustomButton>
          <CustomButton classes="mt-1 text-blue-100" click={saveNext}>
            Next Step
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default Step2;
