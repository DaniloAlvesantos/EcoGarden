import { EcoGardenApi } from "../lib/ecoGarden";
import type { AxiosPromise } from "axios";
import type { Garden } from "../types/api/api.garden";
import { useQuery } from "@tanstack/react-query";

const getGardenById = async (id: string): AxiosPromise<Garden> => {
  const response = await EcoGardenApi.get<Garden>(`/garden/${id}`);
  return response;
};

export const useGetGarden = (id: string) => {
  const query = useQuery({
    queryKey: ["garden", id],
    queryFn: () => getGardenById(id),
    enabled: !!id,
    staleTime: 1000 * 60 * 30,
  });

  const response = query.data;

  if (!response) return;

  const data = response.data.data;

  return {
    ...query,
    data,
  };
};
