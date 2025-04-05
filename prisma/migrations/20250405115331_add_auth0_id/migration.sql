/*
  Warnings:

  - A unique constraint covering the columns `[auth0Id]` on the table `Middleman` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Middleman" ADD COLUMN     "auth0Id" TEXT,
ALTER COLUMN "password" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Middleman_auth0Id_key" ON "Middleman"("auth0Id");
