import { PlanListData } from "./product.model";

export type HomeProps = {}

export type HomeState = {
  data: PlanListData[],
  total: number,
  isLoading: boolean
}
