/*
  Warnings:

  - A unique constraint covering the columns `[id_producto,id_venta]` on the table `DetalleVentas` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "DetalleVentas_id_producto_id_venta_key" ON "DetalleVentas"("id_producto", "id_venta");
