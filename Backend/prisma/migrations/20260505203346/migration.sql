/*
  Warnings:

  - You are about to drop the column `descipcion` on the `Vehiculos` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Vehiculos" DROP COLUMN "descipcion",
ADD COLUMN     "descripcion" TEXT;
