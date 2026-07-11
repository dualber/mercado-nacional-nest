import axios from "axios";

/**
 * Instancia central de axios.
 * Todas las llamadas al backend deben pasar por aquí (nunca uses
 * axios directamente en un componente), así:
 *  - cambiamos la URL base en un solo lugar (.env)
 *  - agregamos el token de auth en un solo lugar, el día que exista
 *  - manejamos errores de forma consistente en toda la app
 */
const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Cuando el backend tenga autenticación (JWT), solo hay que
// descomentar esto y guardar el token en localStorage al hacer login:
//
// apiClient.interceptors.request.use((config) => {
//   const token = localStorage.getItem("token");
//   if (token) config.headers.Authorization = `Bearer ${token}`;
//   return config;
// });

// Manejo centralizado de errores de respuesta.
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const message =
      error.response?.data?.message ||
      error.response?.data?.detail ||
      error.message ||
      "Ocurrió un error inesperado";
    return Promise.reject({ ...error, message });
  }
);

export default apiClient;
