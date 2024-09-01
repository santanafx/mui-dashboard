export interface NutritionModalProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface FoodModalProps {
  name: string;
  calories: string;
  fat: string;
  carbs: string;
  protein: string;
}
