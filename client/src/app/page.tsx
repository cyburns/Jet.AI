import Table from "./components/Table";
import { getAllJets } from "../../pages/api/jetQuery";

export default async function Home() {
  const jetData = (await getAllJets()) || [];

  return (
    <main className="flex flex-col items-center pt-16">
      <div className="w-full">
        <Table jetData={jetData} />
      </div>
    </main>
  );
}
