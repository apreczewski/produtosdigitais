import React from "react";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";



export const Section03 = () => {
  const features = [
    {
      icon: CheckBadgeIcon,
      text: "Homens",
    },
    {
      icon: CheckBadgeIcon,
      text: "mulher",
    },
    {
      icon: CheckBadgeIcon,
      text: "Para quem não quer gastar com nutricionista",
    },
    {
      icon: CheckBadgeIcon,
      text: "Para quem não pode continuar com o personal training",
    },

    ,
    ,

  ]

  return (
    <div className="p-4 bg-white shadow rounded w-full">
      <h2 className="text-2xl text-neutral-900 font-bold mb-2">
        As 101 dicas para perder peso diariamente e para:
      </h2>
      <ul className="list-disc pl-5 justify-start ">
        {features.map((item, index) => (
          <li key={index} className="mb-2 flex justify-start items-center text-gray-700 text-xl text-left">
            <CheckBadgeIcon className="h-10 w-10 mr-2 text-blue-500" /> {item?.text}
          </li>
        ))}
      </ul>
    </div>
  );
};
