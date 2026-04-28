/*
  Warnings:

  - You are about to drop the `Communal` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Communal";

-- CreateTable
CREATE TABLE "Comunales" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Comunales_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Grupos" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "tipo_cuenta" TEXT NOT NULL,
    "numero_cuenta" INTEGER NOT NULL,

    CONSTRAINT "Grupos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Fincas" (
    "id" TEXT NOT NULL,
    "ibm" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "id_grupo" TEXT NOT NULL,
    "id_comunales" TEXT NOT NULL,

    CONSTRAINT "Fincas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Compras" (
    "id" TEXT NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL,
    "cantidad_total" DOUBLE PRECISION NOT NULL,
    "id_grupo" TEXT NOT NULL,

    CONSTRAINT "Compras_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DetalleCompras" (
    "id" TEXT NOT NULL,
    "cantidad" DOUBLE PRECISION NOT NULL,
    "subtotal" DECIMAL(10,2) NOT NULL,
    "precio" DECIMAL(10,2) NOT NULL,
    "id_productos" TEXT NOT NULL,
    "id_compra" TEXT NOT NULL,

    CONSTRAINT "DetalleCompras_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Productos" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "peso_kilo" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Productos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DetalleRecogidas" (
    "id" TEXT NOT NULL,
    "id_finca" TEXT NOT NULL,
    "cantidad" DOUBLE PRECISION NOT NULL,
    "id_recogida" TEXT NOT NULL,
    "id_producto" TEXT NOT NULL,

    CONSTRAINT "DetalleRecogidas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Recogidas" (
    "id" TEXT NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL,
    "anio" INTEGER NOT NULL,
    "mes" INTEGER NOT NULL,
    "semana" INTEGER NOT NULL,
    "dia" INTEGER NOT NULL,
    "placa_vehiculo" TEXT NOT NULL,
    "cantidad_total" DOUBLE PRECISION NOT NULL,
    "id_persona" TEXT NOT NULL,

    CONSTRAINT "Recogidas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RecogidaCoteros" (
    "id_recogida" TEXT NOT NULL,
    "id_persona" TEXT NOT NULL,

    CONSTRAINT "RecogidaCoteros_pkey" PRIMARY KEY ("id_recogida","id_persona")
);

-- CreateTable
CREATE TABLE "Personas" (
    "id" TEXT NOT NULL,
    "cedula" TEXT NOT NULL,
    "nombres" TEXT NOT NULL,
    "apellidos" TEXT NOT NULL,
    "contacto" TEXT NOT NULL,
    "correo" TEXT NOT NULL,

    CONSTRAINT "Personas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Usuarios" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "id_persona" TEXT NOT NULL,

    CONSTRAINT "Usuarios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PersonaRoles" (
    "id_persona" TEXT NOT NULL,
    "id_rol" TEXT NOT NULL,

    CONSTRAINT "PersonaRoles_pkey" PRIMARY KEY ("id_persona","id_rol")
);

-- CreateTable
CREATE TABLE "Roles" (
    "id_rol" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "Roles_pkey" PRIMARY KEY ("id_rol")
);

-- CreateTable
CREATE TABLE "Vehiculos" (
    "placa" TEXT NOT NULL,
    "marca" TEXT NOT NULL,
    "descipcion" TEXT NOT NULL,
    "capacidad" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Vehiculos_pkey" PRIMARY KEY ("placa")
);

-- CreateTable
CREATE TABLE "DetalleVentas" (
    "id" TEXT NOT NULL,
    "cantidad" DOUBLE PRECISION NOT NULL,
    "precio" DECIMAL(10,2) NOT NULL,
    "subtotal" DECIMAL(10,2) NOT NULL,
    "id_producto" TEXT NOT NULL,
    "id_venta" TEXT NOT NULL,

    CONSTRAINT "DetalleVentas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ventas" (
    "id" TEXT NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL,
    "cantidad_total" DOUBLE PRECISION NOT NULL,
    "id_cliente" TEXT NOT NULL,

    CONSTRAINT "Ventas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Clientes" (
    "id" TEXT NOT NULL,
    "cedula" TEXT NOT NULL,
    "nombres" TEXT NOT NULL,
    "apellidos" TEXT NOT NULL,
    "contacto" TEXT NOT NULL,
    "tipo_cuenta" TEXT NOT NULL,
    "numero_cuenta" TEXT NOT NULL,
    "ciudad" TEXT NOT NULL,

    CONSTRAINT "Clientes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Personas_cedula_key" ON "Personas"("cedula");

-- CreateIndex
CREATE UNIQUE INDEX "Personas_correo_key" ON "Personas"("correo");

-- CreateIndex
CREATE UNIQUE INDEX "Usuarios_username_key" ON "Usuarios"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Clientes_cedula_key" ON "Clientes"("cedula");

-- AddForeignKey
ALTER TABLE "Fincas" ADD CONSTRAINT "Fincas_id_grupo_fkey" FOREIGN KEY ("id_grupo") REFERENCES "Grupos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Fincas" ADD CONSTRAINT "Fincas_id_comunales_fkey" FOREIGN KEY ("id_comunales") REFERENCES "Comunales"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Compras" ADD CONSTRAINT "Compras_id_grupo_fkey" FOREIGN KEY ("id_grupo") REFERENCES "Grupos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DetalleCompras" ADD CONSTRAINT "DetalleCompras_id_productos_fkey" FOREIGN KEY ("id_productos") REFERENCES "Productos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DetalleCompras" ADD CONSTRAINT "DetalleCompras_id_compra_fkey" FOREIGN KEY ("id_compra") REFERENCES "Compras"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DetalleRecogidas" ADD CONSTRAINT "DetalleRecogidas_id_finca_fkey" FOREIGN KEY ("id_finca") REFERENCES "Fincas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DetalleRecogidas" ADD CONSTRAINT "DetalleRecogidas_id_recogida_fkey" FOREIGN KEY ("id_recogida") REFERENCES "Recogidas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DetalleRecogidas" ADD CONSTRAINT "DetalleRecogidas_id_producto_fkey" FOREIGN KEY ("id_producto") REFERENCES "Productos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Recogidas" ADD CONSTRAINT "Recogidas_id_persona_fkey" FOREIGN KEY ("id_persona") REFERENCES "Personas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Recogidas" ADD CONSTRAINT "Recogidas_placa_vehiculo_fkey" FOREIGN KEY ("placa_vehiculo") REFERENCES "Vehiculos"("placa") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RecogidaCoteros" ADD CONSTRAINT "RecogidaCoteros_id_recogida_fkey" FOREIGN KEY ("id_recogida") REFERENCES "Recogidas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RecogidaCoteros" ADD CONSTRAINT "RecogidaCoteros_id_persona_fkey" FOREIGN KEY ("id_persona") REFERENCES "Personas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Usuarios" ADD CONSTRAINT "Usuarios_id_persona_fkey" FOREIGN KEY ("id_persona") REFERENCES "Personas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PersonaRoles" ADD CONSTRAINT "PersonaRoles_id_persona_fkey" FOREIGN KEY ("id_persona") REFERENCES "Personas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PersonaRoles" ADD CONSTRAINT "PersonaRoles_id_rol_fkey" FOREIGN KEY ("id_rol") REFERENCES "Roles"("id_rol") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DetalleVentas" ADD CONSTRAINT "DetalleVentas_id_producto_fkey" FOREIGN KEY ("id_producto") REFERENCES "Productos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DetalleVentas" ADD CONSTRAINT "DetalleVentas_id_venta_fkey" FOREIGN KEY ("id_venta") REFERENCES "Ventas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ventas" ADD CONSTRAINT "Ventas_id_cliente_fkey" FOREIGN KEY ("id_cliente") REFERENCES "Clientes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
