import type { IrrigationModel } from "./api.irrigation";

export interface IrrigationHistoryModel {
  id: string;
  irrigations: IrrigationModel[];
}
