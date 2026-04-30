/*
  Warnings:

  - You are about to drop the column `id_productos` on the `DetalleCompras` table. All the data in the column will be lost.
  - Added the required column `id_producto` to the `DetalleCompras` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "DetalleCompras" DROP CONSTRAINT "DetalleCompras_id_productos_fkey";

-- AlterTable
ALTER TABLE "DetalleCompras" DROP COLUMN "id_productos",
ADD COLUMN     "id_producto" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "DetalleCompras" ADD CONSTRAINT "DetalleCompras_id_producto_fkey" FOREIGN KEY ("id_producto") REFERENCES "Productos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
