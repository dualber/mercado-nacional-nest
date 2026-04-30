import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { ComunalesModule } from './comunales/comunales.module';
import { GruposModule } from './grupos/grupos.module';
import { FincasModule } from './fincas/fincas.module';
import { ComprasModule } from './compras/compras.module';
import { DetalleComprasModule } from './detalle-compras/detalle-compras.module';
import { ProductosModule } from './productos/productos.module';
import { DetalleRecogidasModule } from './detalle-recogidas/detalle-recogidas.module';
import { RecogidasModule } from './recogidas/recogidas.module';
import { RecogidaCoterosModule } from './recogida-coteros/recogida-coteros.module';
import { PersonasModule } from './personas/personas.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { PersonaRolesModule } from './persona-roles/persona-roles.module';
import { RolesModule } from './roles/roles.module';
import { VehiculosModule } from './vehiculos/vehiculos.module';
import { DetalleVentasModule } from './detalle-ventas/detalle-ventas.module';
import { VentasModule } from './ventas/ventas.module';
import { ClientesModule } from './clientes/clientes.module';



@Module({
  imports: [PrismaModule, ComunalesModule, GruposModule, FincasModule, ComprasModule, DetalleComprasModule, ProductosModule, DetalleRecogidasModule, RecogidasModule, RecogidaCoterosModule, PersonasModule, UsuariosModule, PersonaRolesModule, RolesModule, VehiculosModule, DetalleVentasModule, VentasModule, ClientesModule],
  controllers: [],
  providers: [],

})
export class AppModule {}
