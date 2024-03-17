
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "JetTable";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Jet" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "wingspan" REAL NOT NULL,
    "engines" INTEGER NOT NULL,
    "year" INTEGER NOT NULL
);
