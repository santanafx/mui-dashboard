export interface NutritionModalProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectTableItem?: FoodModalProps;
}

export interface FoodModalProps {
  id?: string;
  name: string;
  calories: string;
  fat: string;
  carbs: string;
  protein: string;
}
