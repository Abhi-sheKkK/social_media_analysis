import React from "react";

const Card = ({ imgSrc, title, description }) => {
  return (
    <div className="p-6 bg-white shadow-lg rounded-xl hover:shadow-xl transition transform hover:scale-105 w-72 h-96 flex flex-col">
      <div className="w-full h-48 bg-gray-100 rounded-md overflow-hidden">
        <img
          src={imgSrc}
          alt={title}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex flex-col items-center justify-center flex-grow mt-4">
        <h4 className="text-xl font-bold text-purple1 text-center">{title}</h4>
        <p className="mt-2 text-gray-600 text-center">{description}</p>
      </div>
    </div>
  );
};

export default Card;
