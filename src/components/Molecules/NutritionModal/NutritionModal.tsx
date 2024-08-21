import { Button, ModalClose, Typography } from '@mui/joy';
import { Controller, useForm } from 'react-hook-form';

import {
  FoodModalProps,
  NutritionModalProps,
} from './NutritionModal.interface';
import { DivButtons, DivForm, InputNutrition } from './NutritionModal.style';

export const NutritionModal = ({
  open,
  setOpen,
  foodTable,
  setFoodTable,
}: NutritionModalProps) => {
  const { handleSubmit, control } = useForm({
    defaultValues: {
      name: '',
      calories: '',
      fat: '',
      carbs: '',
      protein: '',
    },
  });

  const handleNutritionForm = (data: FoodModalProps) => {
    const { name, calories, fat, carbs, protein } = data;
    setFoodTable([
      ...foodTable,
      {
        name: name,
        calories: Number(calories),
        fat: Number(fat),
        carbs: Number(carbs),
        protein: Number(protein),
      },
    ]);
    setOpen(false);
  };

  return (
    <>
      <ModalClose variant="plain" sx={{ m: 1 }} />
      <Typography
        component="h2"
        id="modal-title"
        level="h4"
        textColor="inherit"
        fontWeight="lg"
        mb={1}
      >
        Add item
      </Typography>
      <DivForm>
        <Typography>Name</Typography>
        <Controller
          control={control}
          name="name"
          render={({ field }) => (
            <InputNutrition placeholder="Name" type="text" {...field} />
          )}
        />
        Calories
        <Controller
          control={control}
          name="calories"
          render={({ field }) => (
            <InputNutrition placeholder="Calories" type="number" {...field} />
          )}
        />
        <Typography>Fat</Typography>
        <Controller
          control={control}
          name="fat"
          render={({ field }) => (
            <InputNutrition placeholder="Fat" type="number" {...field} />
          )}
        />
        <Typography>Carbs</Typography>
        <Controller
          control={control}
          name="carbs"
          render={({ field }) => (
            <InputNutrition placeholder="Carbs" type="number" {...field} />
          )}
        />
        <Typography>Protein</Typography>
        <Controller
          control={control}
          name="protein"
          render={({ field }) => (
            <InputNutrition placeholder="Protein" type="number" {...field} />
          )}
        />
      </DivForm>
      <DivButtons>
        <Button variant="soft" onClick={() => setOpen(!open)}>
          Cancel
        </Button>
        <Button onClick={handleSubmit(handleNutritionForm)}>Save</Button>
      </DivButtons>
    </>
  );
};
