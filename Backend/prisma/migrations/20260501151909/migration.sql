/*
  Warnings:

  - Added the required column `pago_total` to the `Compras` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Compras" ADD COLUMN     "pago_total" DOUBLE PRECISION NOT NULL;
