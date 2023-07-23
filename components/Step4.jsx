"use client";

import { Modal } from "flowbite-react";

import CustomButton from "./Button";
import { useState } from "react";

import { useAtom } from "jotai";

import { userAddOns } from "../app/page"; //[true, false, true]
import { userPlan } from "../app/page"; //<String>: Arcade, Advanced, Pro
import { userBilling } from "../app/page"; //<String>: monthly, yearly
import { userValue } from "../app/page"; // <Number>: 9/90, 12/120, 15/150

import { addOnsList } from "./Step3";
import Step2 from "./Step2";

//--------------------------------
const Step4 = ({ next, back }) => {
  const [openModal, setOpenModal] = useState();
  const props = { openModal, setOpenModal };

  const [selectedAddOns] = useAtom(userAddOns);
  const [plan] = useAtom(userPlan);
  const [billing] = useAtom(userBilling);
  const [value] = useAtom(userValue);

  let total = value;
  function totalFinal(addOnValue) {
    total = total + addOnValue;
  }

  return (
    <>
      <div className="absolute rounded-lg top-16 h-fit left-3 mt-5 md:mt-0 w-11/12 md:static md:w-full flex md:justify-start bg-white ">
        {/*  */}
        <div className="flex flex-col md:justify-center w-full mt-5 md:mr-5 ml-2 md:ml-12 text-marine_blue ">
          {/*  */}
          <h1 className="text-xl mb-3 md:text-3xl font-bold md:mt-3">
            Finishing up
          </h1>
          <p className="text-xs md:text-base text-cool_gray mb-7">
            Double-check everithing looks OK before confirming.
          </p>

          <div className="flex flex-col w-11/12 justify-center bg-slate-100 space-y-5 p-4">
            <div className="flex justify-between md:ml-5 md:mr-5">
              <h1 className="font-bold text-sm mdtext-xl">
                {plan} {billing === "monthly" ? " (Monthly)" : " (Yearly)"}
                <h2
                  className="text-blue-600 underline font-normal text-sm md:text-base hover:cursor-pointer"
                  onClick={() => props.setOpenModal("default")}
                >
                  Change
                </h2>
              </h1>

              <h2 className="text-sm mdtext-xl font-bold ">{`$${value}/${
                billing === "monthly" ? "mo" : "yr"
              }`}</h2>
            </div>

            {/* cards */}
            {addOnsList.map(
              (addOn, index) =>
                selectedAddOns[index] && (
                  <div
                    key={index}
                    className="flex text-cool_gray text-sm md:text-base justify-between w-full md:w-11/12 md:ml-5"
                  >
                    <p>{addOn.type}</p>
                    <p>
                      +${addOn.price}
                      {billing === "monthly" ? "/mo" : "/yr"}
                    </p>
                    {totalFinal(addOn.price)}
                  </div>
                )
            )}
          </div>

          <div className="flex w-full mb-5 md:w-11/12 justify-between ml-3 md:ml-8 pt-8 md:mb-6 pr-11 md:pr-16">
            <h1 className="text-cool_gray">
              Total {billing === "monthly" ? "(per month)" : "(per year)"}
            </h1>
            <h2 className="md:text-2xl font-bold text-blue-600">
              {billing === "monthly" ? "+" : ""}${total}
              {billing === "monthly" ? "/mo" : "/yr"}
            </h2>
          </div>

          <div className="flex w-[110%] md:w-full bg-white justify-between absolute -left-3 -bottom-32 md:mt-5 md:static">
            <CustomButton
              classes="mt-1 bg-white hover:text-white text-blue-950"
              click={back}
            >
              Go Back
            </CustomButton>
            <CustomButton click={next} classes="mt-1 text-blue-100">
              Next Step
            </CustomButton>
          </div>
        </div>
      </div>
      {/*  */}
      <Modal
        show={props.openModal === "default"}
        onClose={() => props.setOpenModal(undefined)}
      >
        <Modal.Body>
          <Step2
            next={() => props.setOpenModal(undefined)}
            back={() => props.setOpenModal(undefined)}
          />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Step4;
