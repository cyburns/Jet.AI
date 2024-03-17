"use client";

import React, { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";

interface Props {
  selectedJetNames: string[];
}

const AiCompare = ({ selectedJetNames }: Props) => {
  const [selectedAttribute, setSelectedAttribute] = useState("");
  const [comparisonResults, setComparisonResults] = useState([] as string[]);
  const [isLoading, setIsLoading] = useState(false);
  const isComparisonDisabled =
    selectedAttribute === "" || selectedJetNames.length < 2;
  const [isErrorWhileFetching, setIsErrorWhileLoading] = useState(false);

  const handleAttributeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedAttribute(e.target.value);
  };

  const handleComparison = async () => {
    setIsLoading(true);
    const prompt = `Return a number rank of these jets: ${selectedJetNames.join()} by their ${selectedAttribute} and an attribute value.`;

    try {
      const response = await fetch("/api/compareJets", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: prompt,
        }),
      });

      const { name } = await response.json();

      const jetNames = name.split("\n").map((item: string) => {
        const [rank, jetName, value] = item.split(". ");
        return { rank: parseInt(rank), name: jetName, value: value };
      });
      setComparisonResults(jetNames);
    } catch (error) {
      setIsErrorWhileLoading(true);
      console.error("OpenAI API Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div className="flex items-center flex-row font-semi text-lg">
        <h3>Ask OpenAI to Compare Selected Jets By</h3>
        <select
          className="border transition bg-black mx-2 h-11 px-3 text-white rounded-lg hover:bg-gray-700 hover:cursor-pointer"
          value={selectedAttribute}
          onChange={(e) => handleAttributeChange(e)}
        >
          <option value="">Select Attribute</option>
          <option value="speed">Top Speed</option>
          <option value="fuel">Fuel Efficiency</option>
          <option value="seats">Maximum Seats</option>
        </select>
        <button
          className={`bg-[#1b77f3] transition w-56 h-11 rounded-lg text-white ${
            isComparisonDisabled
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-[#5296f2] hover:cursor-pointer"
          }`}
          onClick={handleComparison}
          disabled={isComparisonDisabled}
        >
          {isLoading ? (
            <CircularProgress sx={{ color: "black", padding: "10px" }} />
          ) : (
            "Compare Selected Jets"
          )}
        </button>
      </div>
      <div
        className={`flex items-center justify-center mt-5 ${
          isErrorWhileFetching ? "visible" : "invisible"
        }`}
      >
        <h1 className="text-red-500">
          Error fetching comparison data. Please try again.
        </h1>
      </div>
      <div className="text-3xl mt-10">
        <h3>Comparison Results:</h3>
      </div>

      <div className="flex items-center justify-center mt-5">
        <table className="min-w-full">
          <thead className="bg-gray-600 text-black rounded-xl f">
            <tr className="m-10 h-10 border border-black text-white">
              <th scope="col">Rank</th>
              <th scope="col">Name</th>
              <th scope="col">Value</th>
            </tr>
          </thead>
          <tbody className="border-b border-neutral-200">
            {comparisonResults.map((result: any) => (
              <tr className="bg-white" key={result.rank}>
                <td>{result.rank}</td>
                <td>{result.name}</td>
                <td>{selectedAttribute}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AiCompare;
