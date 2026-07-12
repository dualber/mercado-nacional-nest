import apiClient from "./client";

/**
 * Crea las funciones CRUD estándar para un recurso REST.
 * Asume el patrón típico:
 *   GET    /recurso        -> list
 *   GET    /recurso/:id    -> getOne
 *   POST   /recurso        -> create
 *   PUT    /recurso/:id    -> update
 *   DELETE /recurso/:id    -> remove
 *
 * Si algún endpoint de tu backend no sigue este patrón (por ejemplo,
 * usa PATCH en vez de PUT, o una ruta anidada), no pasa nada:
 * se sobreescribe el método puntual en el archivo del módulo
 * (ver src/api/clientes.js como ejemplo).
 *
 * @param {string} basePath - ej: "/clientes"
 */
export function createResourceApi(basePath) {
  return {
    list: (params) => apiClient.get(basePath, { params }).then((r) => r.data),

    getOne: (id) => apiClient.get(`${basePath}/${id}`).then((r) => r.data),

    create: (data) => apiClient.post(basePath, data).then((r) => r.data),

    update: (id, data) =>
      apiClient.patch(`${basePath}/${id}`, data).then((r) => r.data),

    remove: (id) => apiClient.delete(`${basePath}/${id}`).then((r) => r.data),
  };
}
