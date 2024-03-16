/*
  Warnings:

  - You are about to drop the `JetTable` table. If the table is not empty, all the data it contains will be lost.

*/
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
