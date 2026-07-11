import { createResourceApi } from "./resource";

// Ajusta "/ventas" si tu backend usa otra ruta base.
const ventasApi = createResourceApi("/ventas");

export default ventasApi;
