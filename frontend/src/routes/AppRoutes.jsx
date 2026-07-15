import { Routes, Route } from "react-router-dom";
import AppLayout from "../components/layout/AppLayout";
import Dashboard from "../pages/Dashboard";
import ClientesPage from "../pages/clientes/ClientesPage";
import ProductosPage from "../pages/productos/ProductosPage";
import GruposPage from "../pages/grupos/GruposPage";
import VentasPage from "../pages/ventas/VentasPage";
import RecogidasPage from "../pages/recogidas/RecogidasPage";
import FincasPage from '../pages/fincas/FincasPage'
import ComunalesPage from '../pages/comunales/ComunalesPage'
import NotFound from "../pages/NotFound";
import VehiculosPage from "../pages/vehiculos/VehiculosPage";

/**
 * Todas las rutas viven aquí. Para agregar un módulo nuevo:
 *   1. Crear la carpeta en src/pages/<modulo>
 *   2. Crear src/api/<modulo>.js (createResourceApi("/<modulo>"))
 *   3. Agregar el <Route> aquí abajo
 *   4. Agregar el link en src/components/layout/Sidebar.jsx
 */
export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/clientes" element={<ClientesPage />} />
        <Route path="/productos" element={<ProductosPage />} />
        <Route path="/grupos" element={<GruposPage />} />
        <Route path="/ventas" element={<VentasPage />} />
        <Route path="/recogidas" element={<RecogidasPage />} />
        <Route path="/fincas" element={<FincasPage/>} />
        <Route path="*" element={<NotFound />} />
        <Route path="/comunales" element={<ComunalesPage/>}></Route>
        <Route path="/vehiculos" element={<VehiculosPage/>}></Route>
      </Route>
    </Routes>
  );
}
