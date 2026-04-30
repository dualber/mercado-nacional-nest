/*
  Warnings:

  - You are about to alter the column `cantidad_total` on the `Compras` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `cantidad` on the `DetalleCompras` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `cantidad` on the `DetalleRecogidas` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.

*/
-- AlterTable
ALTER TABLE "Compras" ALTER COLUMN "cantidad_total" SET DATA TYPE INTEGER;

-- AlterTable
ALTER TABLE "DetalleCompras" ALTER COLUMN "cantidad" SET DATA TYPE INTEGER;

-- AlterTable
ALTER TABLE "DetalleRecogidas" ALTER COLUMN "cantidad" SET DATA TYPE INTEGER;
