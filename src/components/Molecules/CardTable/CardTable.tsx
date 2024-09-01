import { useState } from 'react';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import { Button, Divider, Modal, Sheet, Table, Typography } from '@mui/joy';

import { NutritionModal } from '../NutritionModal/NutritionModal';
import { FoodTableProps } from './CardTable.interface';
import { DivContainer, DivTitle } from './CardTable.styles';

export const CardTable = () => {
  const [openAddModal, setopenAddModal] = useState<boolean>(false);
  const [openEditModal, setOpenEditModal] = useState<boolean>(false);
  const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);
  const [foodTable, setFoodTable] = useState<FoodTableProps[]>([]);
  const [selectTableItem, setSelectTableItem] = useState<FoodTableProps>();

  //TODO refatorar para deixar mais profissional
  useEffect(() => {
    const response = getFoodTable();
    response.then((data) => {
      if (data) {
        const foodTableData: FoodTableProps[] = data.map((item) => ({
          name: item.name,
          calories: item.calories,
          fat: item.fat,
          carbs: item.carbs,
          protein: item.protein,
          id: item.id,
        }));
        setFoodTable(foodTableData);
      }
    });
  }, [
    openAddModal === false &&
      openDeleteModal === false &&
      openEditModal == false,
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
              <tr key={`${food.id}`} onClick={() => setSelectTableItem(food)}>
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
