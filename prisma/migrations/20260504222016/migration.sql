/*
  Warnings:

  - A unique constraint covering the columns `[nit]` on the table `Grupos` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[nit,nombre]` on the table `Grupos` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `nit` to the `Grupos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Grupos" ADD COLUMN     "nit" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Grupos_nit_key" ON "Grupos"("nit");

-- CreateIndex
CREATE UNIQUE INDEX "Grupos_nit_nombre_key" ON "Grupos"("nit", "nombre");
