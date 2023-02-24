import React from "react";

type Props = {
  directionLeft?: boolean;
};

function SkillCircle({ directionLeft }: Props) {
  return (
    <div
      className="group relative flex cursor-pointer mt-12 hover:scale-110 transition-all
    duration-500 hover:animate-bounce"
    >
      <div className="h-24 w-24 bg-red-200 rounded-full"></div>
    </div>
  );
}

export default SkillCircle;
