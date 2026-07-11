import { createResourceApi } from "./resource";

// Ajusta "/productos" si tu backend usa otra ruta base.
const productosApi = createResourceApi("/productos");

export default productosApi;
