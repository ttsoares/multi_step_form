const Toggler = ({ state, setState }) => {
  function toggle() {
    setState(!state);
  }

  return (
    <div className="border-2 border-blue-600 rounded-full relative flex justify-center items-center w-12 h-6 m-auto bg-black">
      <div
        className={` ${
          state ? "block" : "hidden"
        } rounded-full absolute top-0 left-0 w-5 h-5 bg-white`}
      ></div>

      <div
        onClick={toggle}
        className={`  ${
          state ? " block" : "hidden"
        }   rounded-full absolute top-0 left-6 w-5 h-5 bg-black`}
      ></div>

      <div
        onClick={toggle}
        className={` ${
          state ? "hidden" : "block"
        }  rounded-full absolute top-0 left-0 w-5 h-5 bg-black`}
      ></div>

      <div
        className={` ${
          state ? "hidden" : "block"
        } rounded-full absolute top-0 left-6 w-5 h-5 bg-white`}
      ></div>
    </div>
  );
};
export default Toggler;
