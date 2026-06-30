/*
  Warnings:

  - The `contacto` column on the `Clientes` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `contacto` column on the `Fincas` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `contacto` column on the `Grupos` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `contacto` column on the `Personas` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Clientes" DROP COLUMN "contacto",
ADD COLUMN     "contacto" INTEGER;

-- AlterTable
ALTER TABLE "Fincas" DROP COLUMN "contacto",
ADD COLUMN     "contacto" INTEGER;

-- AlterTable
ALTER TABLE "Grupos" DROP COLUMN "contacto",
ADD COLUMN     "contacto" INTEGER;

-- AlterTable
ALTER TABLE "Personas" DROP COLUMN "contacto",
ADD COLUMN     "contacto" INTEGER;
