import React from "react";

const CheckBox = () => {
  return (
    <div className="inline-flex items-center mt-2">
      <label
        className="relative flex items-center p-3 pl-0 rounded-full cursor-pointer mr-[-6px]"
        htmlFor="link"
      >
        <input
          type="checkbox"
          className="before:content[''] peer relative h-4 w-4 cursor-pointer appearance-none rounded-full border-2 border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-zinc-100 checked:bg-green-500 checked:before:bg-green-500 hover:before:opacity-10"
          id="aagree"
        />
        <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-[95%] peer-checked:opacity-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3.5 w-3.5"
            viewBox="0 0 20 20"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth={1}
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </label>
      <label
        className="mt-px font-light text-blue-100 cursor-pointer select-none"
        htmlFor="link"
      >
        <label htmlFor="aagree" className="flex text-sm antialiased font-medium leading-relaxed text-blue-gray-900">J&#39;accepte les termes et conditions d&#39;edenhack.</label>
      </label>
    </div>
  );
};

export default CheckBox;
