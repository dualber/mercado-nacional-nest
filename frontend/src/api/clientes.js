import { createResourceApi } from "./resource";

// Ajusta "/clientes" si tu backend usa otra ruta base.
const clientesApi = createResourceApi("/clientes");

export default clientesApi;
