import React from "react";

type Props = {
  title: string;
};

function Exhibit({ title }: Props) {
  return (
    <div className="flex group h-36 md:h-96 w-32 md:w-40 justify-center items-center transition-all duration-700 cursor-pointer">
      <div
        className={`flex group-hover:items-start justify-center items-center  w-44 h-36 md:h-60 bg-black group-hover:transform-none group-hover:-mt-36   transition-all duration-500 skew-y-12 group-hover:z-30 group-hover:animate-none tracking-widest relative overflow-hidden`}
      >
        <div className="w-72 animate-glow group-hover:animate-none group-hover:hidden h-[0.5px] bg-gradient-to-r from-black via-white to-black absolute -rotate-45" />
        <h1 className=" tracking-widest text-center text-xl group-hover:mt-2 font-light">
          {title}
        </h1>
        <div className="absolute top-64 group-hover:top-2 md:group-hover:top-10 group-hover:w-64 group-hover:h-64 w-0 h-0 rounded-full bg-gradient-to-b from-slate-800  to-black transition-all duration-500 flex justify-center items-center">
          <h2 className="text-lg group-hover:-mt-8"> 90% </h2>
        </div>
      </div>
    </div>
  );
}

export default Exhibit;
