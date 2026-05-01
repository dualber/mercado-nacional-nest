/*
  Warnings:

  - A unique constraint covering the columns `[nombre,id_grupo,ibm]` on the table `Fincas` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Fincas_nombre_id_grupo_key";

-- CreateIndex
CREATE UNIQUE INDEX "Fincas_nombre_id_grupo_ibm_key" ON "Fincas"("nombre", "id_grupo", "ibm");
