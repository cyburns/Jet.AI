import React from "react";

const AiCompate = () => {
  return (
    <div className="flex items-center flex-row font-semi text-lg ">
      <h3>Ask OpenAI to Compare Selected Jets By</h3>
      <select className="border bg-black mx-2 py-2 px-3 text-white rounded-lg">
        <option value="">Select Attribute</option>
        <option value="topSpeed">Top Speed</option>
        <option value="fuelEfficiency">Fuel Efficiency</option>
        <option value="maximumSeats">Maximum Seats</option>
      </select>
      <button className="bg-[#1b77f3] py-2 px-5 rounded-lg text-white">
        Compare
      </button>
    </div>
  );
};

export default AiCompate;
