/*
  Warnings:

  - The primary key for the `RecogidaCoteros` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[id_recogida,id_persona]` on the table `RecogidaCoteros` will be added. If there are existing duplicate values, this will fail.
  - The required column `id` was added to the `RecogidaCoteros` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE "RecogidaCoteros" DROP CONSTRAINT "RecogidaCoteros_pkey",
ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "RecogidaCoteros_pkey" PRIMARY KEY ("id");

-- CreateIndex
CREATE UNIQUE INDEX "RecogidaCoteros_id_recogida_id_persona_key" ON "RecogidaCoteros"("id_recogida", "id_persona");
