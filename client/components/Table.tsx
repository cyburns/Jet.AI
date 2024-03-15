"use client";

import { useState } from "react";
import TableRow from "./TableRow";
import { ArrowUpward, ArrowDownward } from "@mui/icons-material";

interface JetData {
  id: string;
  name: string;
  windspan: number;
  engines: number;
  year: number;
}

interface Props {
  jetData: JetData[];
}

export default function Table({ jetData }: Props) {
  const [isSortWingspanUp, setSortWingspanUp] = useState(false);

  const sortedJetData = jetData.sort((a, b) => {
    if (isSortWingspanUp) {
      return a.windspan - b.windspan;
    } else {
      return b.windspan - a.windspan;
    }
  });

  return (
    <div className="w-full mx-auto">
      <div className="z-10 max-w-5xl w-full font-mono text-sm lg:flex ont-bold">
        <h1 className="fixed left-0 top-0  border-b border-gray-300 pb-6 pt-8 backdrop-blur-2xl bg-white lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 text-black text-5xl ont-bold">
          Top 10 Charter Jets
        </h1>
      </div>
      {/* TABLE */}
      <div className="flex items-center justify-center">
        <table className="min-w-full divide-y divide-gray-200 h-screen">
          <thead className="bg-gray-200 text-black rounded-xl f">
            <tr className="m-10 h-10 border border-black">
              <th scope="col border border-black">Select</th>
              <th scope="col">Name</th>
              <th scope="col">
                Wingspan (ft)
                <span onClick={() => setSortWingspanUp(!isSortWingspanUp)}>
                  {isSortWingspanUp ? <ArrowUpward /> : <ArrowDownward />}
                </span>
              </th>
              <th scope="col">Number of Engines</th>
              <th scope="col">Manufacturing Year</th>
            </tr>
          </thead>
          <tbody className="border-b border-neutral-200">
            {sortedJetData.map((jet, i) => (
              <TableRow
                key={i}
                id={+jet.id}
                name={jet.name}
                engines={jet.engines}
                wingspan={jet.windspan}
                year={jet.year}
              />
            ))}
          </tbody>
        </table>
      </div>
      {/* AI comp */}
      <div className="mt-10">
        <h3 className="">Ask OpenAI to Compare Selected Jets By</h3>
        <menu></menu>
      </div>
    </div>
  );
}
