"use client";

import CustomButton from "./Button";

import { useForm } from "react-hook-form";

export const addOnsList = [
  {
    type: "Online service",
    description: "Access to multiplayer games",
    price: 1,
    name: "oService",
  },
  {
    type: "Large storage",
    description: "Extra 1TB of cloud save",
    price: 2,
    name: "lStorage",
  },
  {
    type: "Customizable profile",
    description: "Custom themes in your profile",
    price: 2,
    name: "cProfile",
  },
];

import { useAtom } from "jotai";
import { userAddOns, userBilling } from "../app/page";

//---------------------------------------
const Step3 = ({ next, back }) => {
  const { register, handleSubmit, control, watch } = useForm();

  const [addOns, setAddOns] = useAtom(userAddOns);
  const [billing] = useAtom(userBilling);

  const saveNext = (data) => {
    const arrayAddOns = [data.oService, data.lStorage, data.cProfile];
    setAddOns(arrayAddOns);
    next();
  };

  const choices = watch(["oService", "lStorage", "cProfile"]);

  return (
    <div className="absolute rounded-lg top-16 h-fit left-3 mt-5 md:mt-0 w-11/12 md:static md:w-full flex md:justify-start bg-white">
      {/*  */}
      <div className="flex flex-col md:justify-center w-full mt-5 md:mr-5 ml-2 md:ml-12 text-marine_blu">
        {/*  */}
        <h1 className="text-xl mb-3 md:text-3xl font-bold md:mt-3">
          Pick add-ons
        </h1>
        <p className="text-xs md:text-base text-cool_gray mb-7">
          Add-ons help enhance your gaming experience
        </p>

        <form
          className="flex flex-col justify-center w-full text-xs md:text-base"
          onSubmit={handleSubmit(saveNext)}
        >
          {addOnsList.map((addOn, index) => (
            <div
              key={index}
              className={`flex md:flex-row md:justify-between md:p-2  border-2 mb-3 
              ${choices[index] ? "border-black" : "border-gray-200"}  
              w-full rounded-lg text-sm md:text-base h-14 md:h-16`}
            >
              <div className="flex">
                <input
                  {...register(addOn.name)}
                  defaultChecked={addOns[index] !== null && addOns[index]}
                  type="checkbox"
                  name={`${addOn.name}`}
                  className="mt-4 md:mt-3 ml-2"
                />

                <div className="flex-col">
                  <label htmlFor={`${addOn.name}`} className="ml-3 font-bold ">
                    {addOn.type}
                  </label>
                  <h1 className="text-gray-400 ml-3">{addOn.description}</h1>
                </div>
              </div>

              <p className="absolute right-2 items-center md:static md:justify-end md:items-end">
                {addOn.price * (billing === "monthly" ? 1 : 10)}
                {billing === "monthly" ? "/mo" : "/yr"}
              </p>
            </div>
          ))}

          <div className="flex w-[110%] md:w-full bg-white justify-between absolute -left-3 -bottom-32 md:mt-5 md:static">
            <CustomButton
              classes="mt-1 bg-white hover:text-white text-blue-950"
              click={back}
            >
              Go Back
            </CustomButton>
            <CustomButton type="submit" classes="mt-1 text-blue-100">
              Next Step
            </CustomButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Step3;
