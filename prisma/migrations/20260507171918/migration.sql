/*
  Warnings:

  - You are about to drop the column `id_persona` on the `Recogidas` table. All the data in the column will be lost.
  - Added the required column `id_persona` to the `Vehiculos` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Recogidas" DROP CONSTRAINT "Recogidas_id_persona_fkey";

-- AlterTable
ALTER TABLE "Recogidas" DROP COLUMN "id_persona";

-- AlterTable
ALTER TABLE "Vehiculos" ADD COLUMN     "id_persona" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Vehiculos" ADD CONSTRAINT "Vehiculos_id_persona_fkey" FOREIGN KEY ("id_persona") REFERENCES "Personas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
