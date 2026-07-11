import {
  useQuery,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import toast from "react-hot-toast";

/**
 * Genera los hooks de React Query (listar/crear/editar/eliminar)
 * para un recurso dado, reutilizable en cualquier módulo.
 *
 * Ejemplo de uso dentro de una página:
 *
 *   const { useList, useCreate, useUpdate, useRemove } = useResource("clientes", clientesApi);
 *   const { data: clientes, isLoading } = useList();
 *   const crear = useCreate();
 *   crear.mutate({ nombre: "Juan" });
 *
 * @param {string} key - nombre único del recurso, ej: "clientes"
 * @param {object} api - objeto generado por createResourceApi()
 */
export function useResource(key, api) {
  const queryClient = useQueryClient();

  const invalidate = () =>
    queryClient.invalidateQueries({ queryKey: [key] });

  const useList = (params) =>
    useQuery({
      queryKey: [key, "list", params],
      queryFn: () => api.list(params),
    });

  const useOne = (id) =>
    useQuery({
      queryKey: [key, "detail", id],
      queryFn: () => api.getOne(id),
      enabled: !!id,
    });

  const useCreate = () =>
    useMutation({
      mutationFn: (data) => api.create(data),
      onSuccess: () => {
        invalidate();
        toast.success("Creado correctamente");
      },
      onError: (err) => toast.error(err.message),
    });

  const useUpdate = () =>
    useMutation({
      mutationFn: ({ id, data }) => api.update(id, data),
      onSuccess: () => {
        invalidate();
        toast.success("Actualizado correctamente");
      },
      onError: (err) => toast.error(err.message),
    });

  const useRemove = () =>
    useMutation({
      mutationFn: (id) => api.remove(id),
      onSuccess: () => {
        invalidate();
        toast.success("Eliminado correctamente");
      },
      onError: (err) => toast.error(err.message),
    });

  return { useList, useOne, useCreate, useUpdate, useRemove };
}
