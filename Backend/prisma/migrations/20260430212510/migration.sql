/*
  Warnings:

  - A unique constraint covering the columns `[nombre]` on the table `Comunales` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Comunales_nombre_key" ON "Comunales"("nombre");
