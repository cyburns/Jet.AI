"use client";

import { useState } from "react";
import TableRow from "./TableRow";
import { ArrowUpward, ArrowDownward } from "@mui/icons-material";
import AiCompare from "./AiCompare";

interface JetData {
  id: string;
  name: string;
  wingspan: number;
  engines: number;
  year: number;
}

interface Props {
  jetData: JetData[];
}

export default function Table({ jetData }: Props) {
  const [isSortWingspanUp, setSortWingspanUp] = useState(false);
  const [selectedJets, setSelectedJets] = useState<string[]>([]);
  const [selectedJetNames, setSelectedJetNames] = useState<string[]>([]);

  const sortedJetData = jetData.sort((a, b) => {
    if (isSortWingspanUp) {
      return a.wingspan - b.wingspan;
    } else {
      return b.wingspan - a.wingspan;
    }
  });

  const handleCheckboxChange = (id: string, name: string) => {
    if (selectedJets.includes(id)) {
      setSelectedJets(selectedJets.filter((jetId) => jetId !== id));
      setSelectedJetNames(
        selectedJetNames.filter((jetName) => jetName !== name)
      );
    } else {
      setSelectedJets([...selectedJets, id]);
      setSelectedJetNames([...selectedJetNames, name]);
    }
  };

  return (
    <div>
      <div className="z-10 max-w-5xl w-full font-mono text-sm lg:flex ont-bold">
        <h1 className="fixed left-0 top-0   pb-6 pt-8 backdrop-blur-2xl bg-gray-600 lg:static lg:w-auto  lg:rounded-xl lg:border lg:p-4 text-white text-3xl ont-bold mb-10 border border-black">
          Top 10 Charter Jets
        </h1>
      </div>
      {/* TABLE */}
      <div className="flex items-center justify-center">
        <table className="min-w-full">
          <thead className="bg-gray-600 text-black rounded-xl f">
            <tr className="m-10 h-10 border border-black text-white">
              <th scope="col border border-black">Select</th>
              <th scope="col">Name</th>
              <th scope="col">
                Wingspan (ft.)
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
                _id={jet.id}
                name={jet.name}
                engines={jet.engines}
                wingspan={jet.wingspan}
                year={jet.year}
                onCheckboxChange={handleCheckboxChange}
                isChecked={selectedJets.includes(jet.id)}
              />
            ))}
          </tbody>
        </table>
      </div>
      {/* AI compare */}
      <div className="mt-10 mb-96 w-full">
        <AiCompare
          selectedJetNames={selectedJetNames}
        />
      </div>
    </div>
  );
}
