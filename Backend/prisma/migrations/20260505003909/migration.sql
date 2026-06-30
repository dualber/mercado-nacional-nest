-- AlterTable
ALTER TABLE "Clientes" ADD COLUMN     "correo" TEXT;

-- AlterTable
ALTER TABLE "Fincas" ALTER COLUMN "contacto" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Grupos" ALTER COLUMN "contacto" DROP NOT NULL,
ALTER COLUMN "correo" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Personas" ALTER COLUMN "correo" DROP NOT NULL;
