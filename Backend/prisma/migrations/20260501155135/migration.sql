/*
  Warnings:

  - You are about to drop the column `anio` on the `Recogidas` table. All the data in the column will be lost.
  - You are about to drop the column `dia` on the `Recogidas` table. All the data in the column will be lost.
  - You are about to drop the column `mes` on the `Recogidas` table. All the data in the column will be lost.
  - You are about to drop the column `semana` on the `Recogidas` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Recogidas" DROP COLUMN "anio",
DROP COLUMN "dia",
DROP COLUMN "mes",
DROP COLUMN "semana";
