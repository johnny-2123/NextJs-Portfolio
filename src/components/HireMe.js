import React from "react";
import Link from "next/link";
import { CircularText } from "./Icons";

const HireMe = () => {
  return (
    <div className="fixed left-4 bottom-4 flex items-center jusify-center overflow-hidden md:right-8 md:left-auto md:top-0 md:bottom-auto md:absolute z-50">
      <div className="w-48 h-auto flex items-center justify-center relative md:w-24">
        <CircularText className={`fill-dark animate-spin spin-slow`} />
        <Link
          href="mailto:johnnyavila2021@u.northwestern.edu"
          className={`flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border border-solid border-dark w-20 h-20 rounded-full font-semibold hover:bg-light hover:text-dark hover:border-2 md:w-12 md:h-12 md:text-[10px]`}
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
