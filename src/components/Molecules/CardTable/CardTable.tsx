import { useState } from 'react';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import { Button, Divider, Modal, Sheet, Table, Typography } from '@mui/joy';

import { NutritionModal } from '../NutritionModal/NutritionModal';
import { FoodTableProps } from './CardTable.interface';
import { DivContainer, DivTitle } from './CardTable.styles';

export const CardTable = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [foodTable, setFoodTable] = useState<FoodTableProps[]>([
    {
      name: 'Frozen yoghurt',
      calories: 159,
      fat: 6.0,
      carbs: 24,
      protein: 4.0,
    },
    {
      name: 'Ice cream sandwich',
      calories: 237,
      fat: 9.0,
      carbs: 37,
      protein: 4.3,
    },
    { name: 'Eclair', calories: 262, fat: 16.0, carbs: 24, protein: 6.0 },
    { name: 'Cupcake', calories: 305, fat: 3.7, carbs: 67, protein: 4.3 },
    {
      name: 'Gingerbread',
      calories: 356,
      fat: 16.0,
      carbs: 49,
      protein: 3.9,
    },
  ]);

  return (
    <>
      <DivContainer>
        <DivTitle>
          <Typography level="h1">Nutrition table</Typography>
        </DivTitle>
        <Divider sx={{ marginBottom: '20px' }} />
        <Button
          startDecorator={<AddRoundedIcon />}
          onClick={() => setOpen(true)}
        >
          Add items
        </Button>
        <Table
          stripe="odd"
          hoverRow
          sx={{
            captionSide: 'top',
            '& tbody': { bgcolor: 'background.surface' },
          }}
        >
          <caption>Nutrition of your favorite menus.</caption>
          <thead>
            <tr>
              <th>Name</th>
              <th>Calories</th>
              <th>Fat&nbsp;(g)</th>
              <th>Carbs&nbsp;(g)</th>
              <th>Protein&nbsp;(g)</th>
            </tr>
          </thead>
          <tbody>
            {foodTable.map((food) => (
              <tr key={food.name}>
                <td>{food.name}</td>
                <td>{food.calories}</td>
                <td>{food.fat}</td>
                <td>{food.carbs}</td>
                <td>{food.protein}</td>
                <td>
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <Button
                      size="sm"
                      variant="plain"
                      color="neutral"
                      onClick={() => setOpenEditModal(true)}
                    >
                      Edit
                    </Button>
                    <Button
                      size="sm"
                      variant="soft"
                      color="danger"
                      onClick={() => setOpenDeleteModal(true)}
                    >
                      Delete
                    </Button>
                  </Box>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </DivContainer>
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={() => setOpen(false)}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Sheet
          variant="soft"
          sx={{
            maxWidth: 500,
            minWidth: 450,
            borderRadius: 'md',
            p: 3,
            boxShadow: 'lg',
          }}
        >
          {selectTableItem && (
            <NutritionModal
              open={openEditModal}
              setOpen={setOpenEditModal}
              selectTableItem={selectTableItem}
            />
          )}
        </Sheet>
      </Modal>
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={openDeleteModal}
        onClose={() => setOpenDeleteModal(false)}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Sheet
          variant="soft"
          sx={{
            maxWidth: 500,
            minWidth: 450,
            borderRadius: 'md',
            p: 3,
            boxShadow: 'lg',
          }}
        >
          {selectTableItem && (
            <DeleteNutritionModal
              open={openDeleteModal}
              setOpen={setOpenDeleteModal}
              selectTableItem={selectTableItem}
            />
          )}
        </Sheet>
      </Modal>
    </>
  );
};
