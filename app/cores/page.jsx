"use client";
import { Radio } from "@material-tailwind/react";

const Page = () => {
  return (
    <div className="flex bg-black w-screen h-screen">
      <div className="flez flex-col mr-80 text-yellow-500">
        <div className="m-4 h-20 w-32 bg-marine_blue">Marine blue</div>
        <div className="m-4 h-20 w-32 bg-purplish_blue">Purplish blue</div>
        <div className="text-black m-4 h-20 w-32 bg-pastel_blue">
          Pastel blue
        </div>
        <div className="text-black m-4 h-20 w-32 bg-light_blue">Light blue</div>
        <div className="text-white m-4 h-20 w-32 bg-strawberry_red">
          Strawberry
        </div>
      </div>
      <div className="flez flex-col text-black">
        <div className="m-4 h-20 w-32 bg-cool_gray">Cool gray</div>
        <div className="m-4 h-20 w-32 bg-light_gray">Light gray</div>
        <div className="m-4 h-20 w-32 bg-magnolia">Magnolia</div>
        <div className="m-4 h-20 w-32 bg-alabaster">Alabaster</div>
      </div>
      <div className="flex justify-start">
        <Radio className="m-0 p-0" id="html" name="type" />
        <Radio className="m-0 p-0" id="react" name="type" defaultChecked />
      </div>
    </div>
  );
};

export default Page;
