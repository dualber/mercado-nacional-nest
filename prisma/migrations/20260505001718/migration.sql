/*
  Warnings:

  - A unique constraint covering the columns `[correo]` on the table `Grupos` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `zona` to the `Comunales` table without a default value. This is not possible if the table is not empty.
  - Added the required column `contacto` to the `Fincas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `contacto` to the `Grupos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `correo` to the `Grupos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Comunales" ADD COLUMN     "zona" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Fincas" ADD COLUMN     "contacto" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Grupos" ADD COLUMN     "contacto" TEXT NOT NULL,
ADD COLUMN     "correo" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Grupos_correo_key" ON "Grupos"("correo");
