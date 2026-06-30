/*
  Warnings:

  - You are about to drop the column `id_comunales` on the `Fincas` table. All the data in the column will be lost.
  - Added the required column `id_comunal` to the `Fincas` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Fincas" DROP CONSTRAINT "Fincas_id_comunales_fkey";

-- AlterTable
ALTER TABLE "Fincas" DROP COLUMN "id_comunales",
ADD COLUMN     "id_comunal" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Fincas" ADD CONSTRAINT "Fincas_id_comunal_fkey" FOREIGN KEY ("id_comunal") REFERENCES "Comunales"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
