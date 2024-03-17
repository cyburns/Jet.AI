const csv = require("csv-parser");
const fs = require("fs");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  const jets = [];

  fs.createReadStream("./prisma/data/jet_facts.csv")
    .pipe(csv())
    .on("data", (row) => {
      jets.push({
        name: row.name,
        wingspan: parseFloat(row.wingspan),
        engines: parseInt(row.engines, 10),
        year: parseInt(row.year, 10),
      });
    })
    .on("end", async () => {
      for (let jet of jets) {
        await prisma.jet.create({
          data: jet,
        });
      }
    });
}

main()
  .catch((error) => {
    throw error;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
