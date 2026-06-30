/*
  Warnings:

  - A unique constraint covering the columns `[fecha,id_grupo]` on the table `Compras` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Compras_fecha_id_grupo_key" ON "Compras"("fecha", "id_grupo");
