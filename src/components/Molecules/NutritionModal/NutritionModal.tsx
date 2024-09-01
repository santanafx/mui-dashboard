import { zodResolver } from '@hookform/resolvers/zod';
import { Button, ModalClose, Typography } from '@mui/joy';
import { Controller, useForm } from 'react-hook-form';
import * as z from 'zod';

import {
  addFood,
  editFood,
} from '../../../Services/CardTable/CardTable.service';
import {
  FoodModalProps,
  NutritionModalProps,
} from './NutritionModal.interface';
import {
  DivButtons,
  DivForm,
  DivFormButtons,
  InputNutrition,
  TypographyError,
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
      <DivFormButtons>
        <DivForm>
          <Typography>Name</Typography>
          <Controller
            control={control}
            name="name"
            render={({ field, fieldState: { error } }) => (
              <div>
                <InputNutrition placeholder="Name" type="text" {...field} />
                {error && <TypographyError>{error.message}</TypographyError>}
              </div>
            )}
          />
          <Typography>Calories</Typography>
          <Controller
            control={control}
            name="calories"
            render={({ field, fieldState: { error } }) => (
              <div>
                <InputNutrition
                  placeholder="Calories"
                  type="number"
                  {...field}
                />
                {error && <TypographyError>{error.message}</TypographyError>}
              </div>
            )}
          />
          <Typography>Fat</Typography>
          <Controller
            control={control}
            name="fat"
            render={({ field, fieldState: { error } }) => (
              <div>
                <InputNutrition placeholder="Fat" type="number" {...field} />
                {error && <TypographyError>{error.message}</TypographyError>}
              </div>
            )}
          />
          <Typography>Carbs</Typography>
          <Controller
            control={control}
            name="carbs"
            render={({ field, fieldState: { error } }) => (
              <div>
                <InputNutrition placeholder="Carbs" type="number" {...field} />
                {error && <TypographyError>{error.message}</TypographyError>}
              </div>
            )}
          />
          <Typography>Protein</Typography>
          <Controller
            control={control}
            name="protein"
            render={({ field, fieldState: { error } }) => (
              <div>
                <InputNutrition
                  placeholder="Protein"
                  type="number"
                  {...field}
                />
                {error && <TypographyError>{error.message}</TypographyError>}
              </div>
            )}
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
