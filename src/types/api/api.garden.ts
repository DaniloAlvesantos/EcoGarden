import type { DefaultResponse } from "./api.default";

interface GardenModel {
  number: number;
  name: string;
  cep: string;
  tamanho_m2: number;
  id: string;
  userId: string;
  lat: number;
  lng: number;
  img_url: string;
  createdAt: Date;
  owner: {
    name: string;
    email: string;
  };
}

export interface GardenResponse {
  garden: GardenModel;
  location: {
    city: string;
    state: string;
    street: string;
  };
}

export type Garden = DefaultResponse<GardenResponse>;
export type Gardens = DefaultResponse<GardenResponse[]>;
