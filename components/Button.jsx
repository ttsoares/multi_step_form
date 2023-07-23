export default function CustomButton({ children, classes, btnType, click }) {
  return (
    <button
      onClick={click}
      type={btnType}
      className={` bg-marine_blue hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-24 px-4 py-2.5 mr-2 mb-2  focus:outline-none ${classes}`}
    >
      {children}
    </button>
  );
}
