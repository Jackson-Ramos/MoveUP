/*
  Warnings:

  - You are about to drop the column `goals` on the `Student` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "StudentProfile" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "goals" TEXT NOT NULL,
    "trainingTime" TEXT NOT NULL,
    "trainingDays" INTEGER NOT NULL,
    "preferredLocation" TEXT NOT NULL,
    "currentWeight" REAL NOT NULL,
    "currentHeight" REAL NOT NULL,
    "birthDate" DATETIME NOT NULL,
    "gender" TEXT NOT NULL,
    "experience" TEXT NOT NULL,
    "limitations" TEXT,
    "medications" TEXT,
    "hasTrainerBefore" BOOLEAN NOT NULL,
    "motivation" TEXT NOT NULL,
    CONSTRAINT "StudentProfile_id_fkey" FOREIGN KEY ("id") REFERENCES "Student" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Student" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "trainerId" TEXT NOT NULL,
    CONSTRAINT "Student_id_fkey" FOREIGN KEY ("id") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Student_trainerId_fkey" FOREIGN KEY ("trainerId") REFERENCES "Trainer" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Student" ("id", "trainerId") SELECT "id", "trainerId" FROM "Student";
DROP TABLE "Student";
ALTER TABLE "new_Student" RENAME TO "Student";
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true
);
INSERT INTO "new_User" ("active", "createdAt", "email", "id", "name", "password", "role", "updatedAt") SELECT "active", "createdAt", "email", "id", "name", "password", "role", "updatedAt" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
