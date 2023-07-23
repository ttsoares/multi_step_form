"use client";

import { useForm } from "react-hook-form";

import CustomButton from "./Button";

import { useAtom } from "jotai";
import { userName, userEmail, userPhone } from "../app/page";

//------------------------------
const Step1 = ({ next }) => {
  const [name, setName] = useAtom(userName);
  const [email, setEmail] = useAtom(userEmail);
  const [phone, setPhone] = useAtom(userPhone);

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  function saveNext(data) {
    setName(data.name);
    setEmail(data.email);
    setPhone(data.phone);
    next();
  }

  return (
    <div className="absolute rounded-lg top-16 h-[435px] left-3 mt-5 md:mt-0 w-11/12 md:static md:w-full flex md:justify-start bg-white">
      {/*  */}
      <div className="flex flex-col md:justify-center w-full mt-5 mr-5 ml-5 text-marine_blue">
        {/*  */}
        <h1 className="text-xl mb-3 md:text-3xl font-bold md:mt-3">
          Personal Info
        </h1>
        <p className="text-sm text-cool_gray mb-6">
          Please provide your name, email address and phone number.
        </p>

        <form onSubmit={handleSubmit(saveNext)} className="flex flex-col">
          <label>Name</label>
          <input
            type="text"
            className={`border-2 p-1 md:p-2 rounded-lg border-gray-300 ${
              errors.name && "border-red-600"
            }`}
            defaultValue={name}
            placeholder="e.g. Stephen King"
            {...register("name", { required: true })}
          />
          {errors.name && (
            <span className=" text-red-600 flex justify-end items-end">
              This field is required
            </span>
          )}
          <div className="h-3 md:h-10 w-full"></div>
          <label>Email Address</label>
          <input
            className={`border-2 p-1 md:p-2 rounded-lg border-gray-300 ${
              errors.email && "border-red-600"
            }`}
            defaultValue={email}
            placeholder="e.g. stphenking@loren.com"
            {...register("email", {
              pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i,
            })}
          />
          {errors.email && (
            <span className="text-red-600 flex justify-end items-end">
              Invalid e-mail format
            </span>
          )}
          <div className="h-3 md:h-10 w-full"></div>
          <label>Phone Number</label>
          <input
            type="text"
            className={`border-2 p-1 md:p-2 rounded-lg border-gray-300 ${
              errors.phone && "border-red-600"
            }`}
            defaultValue={phone}
            placeholder="e.g. +1 234 567 890"
            {...register("phone", { required: true })}
          />
          {errors.phone && (
            <span className="text-red-600  flex justify-end items-end">
              This field is required
            </span>
          )}
          <div className="flex w-full justify-end">
            <CustomButton
              classes="mt-20 mb-5 w-25 text-alabaster absolute -bottom-48 right-1 md:mt-5 md:static"
              btnType="submit"
            >
              Next Step
            </CustomButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Step1;
