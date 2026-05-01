/*
  Warnings:

  - A unique constraint covering the columns `[nombre,id_grupo]` on the table `Fincas` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id_grupo,ibm]` on the table `Fincas` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Fincas_nombre_id_grupo_ibm_key";

-- CreateIndex
CREATE UNIQUE INDEX "Fincas_nombre_id_grupo_key" ON "Fincas"("nombre", "id_grupo");

-- CreateIndex
CREATE UNIQUE INDEX "Fincas_id_grupo_ibm_key" ON "Fincas"("id_grupo", "ibm");
