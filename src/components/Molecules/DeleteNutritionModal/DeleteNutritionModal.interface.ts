import { FoodModalProps } from '../../Organisms/NutritionModal/NutritionModal.interface';

export interface DeleteNutritionModalProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectTableItem: FoodModalProps;
}
