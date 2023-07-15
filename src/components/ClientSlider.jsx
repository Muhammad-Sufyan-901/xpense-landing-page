import React from "react";

function ClientSlider({ message, image, name, position }) {
  return (
    <div className="w-full mx-auto lg:max-w-[300px] xl:max-w-[350px] h-[250px] rounded-[12px] border border-grey py-6 px-[30px]">
      <div className="mb-[30px]">{message}</div>
      <div className="flex gap-x-[10px]">
        <img src={image} alt="Clients Avatar" />
        <div className="font-bold">{name}</div>
        <div className="text-light">{position}</div>
      </div>
    </div>
  );
}

export default ClientSlider;
