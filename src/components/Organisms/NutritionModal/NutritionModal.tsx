import { zodResolver } from '@hookform/resolvers/zod';
import { Button, ModalClose, Typography } from '@mui/joy';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import {
  addFood,
  editFood,
} from '../../../Services/CardTable/CardTable.service';
import { InputForm } from '../../Molecules/InputForm/InputForm';
import {
  FoodModalProps,
  NutritionModalProps,
} from './NutritionModal.interface';
import {
  DivButtons,
  DivForm,
  DivFormButtons,
  DivTypography,
} from './NutritionModal.style';

const nutritionSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  calories: z.string().min(1, { message: 'Calories is required' }),
  fat: z.string().min(1, { message: 'Fat is required' }),
  carbs: z.string().min(1, { message: 'Carbs is required' }),
  protein: z.string().min(1, { message: 'Protein is required' }),
});

type nutritionSchemaType = z.infer<typeof nutritionSchema>;

export const NutritionModal = ({
  open,
  setOpen,
  selectTableItem,
}: NutritionModalProps) => {
  const { handleSubmit, control } = useForm<nutritionSchemaType>({
    resolver: zodResolver(nutritionSchema),
    defaultValues: {
      name: selectTableItem ? selectTableItem.name : '',
      calories: selectTableItem ? selectTableItem.calories : '',
      fat: selectTableItem ? selectTableItem.fat : '',
      carbs: selectTableItem ? selectTableItem.carbs : '',
      protein: selectTableItem ? selectTableItem.protein : '',
    },
  });

  const isEditing = selectTableItem ? true : false;

  const handleNutritionForm = (data: FoodModalProps) => {
    const { name, calories, fat, carbs, protein } = data;

    if (selectTableItem && selectTableItem.id) {
      editFood(selectTableItem.id, {
        name: name,
        calories: calories.toString(),
        fat: fat.toString(),
        carbs: carbs.toString(),
        protein: protein.toString(),
      });
    } else {
      addFood({
        name: name,
        calories: calories.toString(),
        fat: fat.toString(),
        carbs: carbs.toString(),
        protein: protein.toString(),
      });
    }

    setOpen(false);
  };

  return (
    <>
      <ModalClose variant="plain" sx={{ m: 1 }} />
      <DivTypography>
        <Typography
          component="h2"
          id="modal-title"
          level="h4"
          textColor="inherit"
          fontWeight="lg"
          mb={1}
        >
          {isEditing ? 'Edit item' : 'Add item'}
        </Typography>
      </DivTypography>
      <DivFormButtons>
        <DivForm>
          <InputForm
            label={'Name'}
            control={control}
            name="name"
            placeholder="Name"
            type="text"
          />
          <InputForm
            label={'Calories'}
            control={control}
            name="calories"
            placeholder="Calories"
            type="number"
          />
          <InputForm
            label={'Fat'}
            control={control}
            name="fat"
            placeholder="Fat"
            type="number"
          />
          <InputForm
            label={'Carbs'}
            control={control}
            name="carbs"
            placeholder="Carbs"
            type="number"
          />
          <InputForm
            label={'Protein'}
            control={control}
            name="protein"
            placeholder="Protein"
            type="number"
          />
        </DivForm>
        <DivButtons>
          <Button variant="soft" onClick={() => setOpen(!open)}>
            Cancel
          </Button>
          <Button onClick={handleSubmit(handleNutritionForm)}>Save</Button>
        </DivButtons>
      </DivFormButtons>
    </>
  );
};
