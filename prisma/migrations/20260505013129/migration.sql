/*
  Warnings:

  - Made the column `contacto` on table `Fincas` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Clientes" ALTER COLUMN "contacto" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Fincas" ALTER COLUMN "contacto" SET NOT NULL,
ALTER COLUMN "contacto" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Grupos" ALTER COLUMN "contacto" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Personas" ALTER COLUMN "contacto" SET DATA TYPE TEXT;
