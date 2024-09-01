import { FoodModalProps } from '../NutritionModal/NutritionModal.interface';

export interface DeleteNutritionModalProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectTableItem: FoodModalProps;
}
