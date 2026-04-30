/*
  Warnings:

  - A unique constraint covering the columns `[id_producto,id_compra]` on the table `DetalleCompras` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "DetalleCompras_id_producto_id_compra_key" ON "DetalleCompras"("id_producto", "id_compra");
