import { FoodTableProps } from '../CardTable/CardTable.interface';

export interface NutritionModalProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  foodTable: FoodTableProps[];
  setFoodTable: React.Dispatch<React.SetStateAction<FoodTableProps[]>>;
}

export interface FoodModalProps {
  name: string;
  calories: string;
  fat: string;
  carbs: string;
  protein: string;
}
