import React, { useState } from "react";

const CardComponent = () => {
  const [position, setPosition] = useState({ x: 49, y: 49 });

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const { left, top, width, height } = card.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setPosition({ x, y });
  };

  return (
    <div className="flex  justify-center items-center ">
      <div
        className="w-full h-full     rounded-lg p-6 cursor-pointer relative transform transition-all duration-300 ease-out"
        onMouseMove={handleMouseMove}
        style={{
          transform: `perspective(1000px) rotateX(${
            (position.y - 50) / 2
          }deg) rotateY(${(position.x - 50) / 2}deg)  `,
        }}
      >
        <div className="font-bold text-6xl">
          Turn Your Documents into Editable
          <br /> <span className="text-teal-500">Text in Seconds!</span>
        </div>
        <div className=" font-semibold text-xl  text-slate-800 ">
          'Upload images or PDFs and let Textura extract all the text you need.{" "}
          <span className="underline text-teal-600">
            Easy, fast, and accurate!
          </span>
          '
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
