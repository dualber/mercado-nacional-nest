/*
  Warnings:

  - A unique constraint covering the columns `[nombre]` on the table `Productos` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Productos_nombre_key" ON "Productos"("nombre");
