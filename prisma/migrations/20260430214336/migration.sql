/*
  Warnings:

  - A unique constraint covering the columns `[nombre,id_grupo]` on the table `Fincas` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Fincas_nombre_id_grupo_key" ON "Fincas"("nombre", "id_grupo");
