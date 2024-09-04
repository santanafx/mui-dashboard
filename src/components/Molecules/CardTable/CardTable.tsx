import { useEffect, useState } from 'react';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import { Button, Typography } from '@mui/joy';

import { getFoodTable } from '../../../Services/CardTable/CardTable.service.js';
import { NutritionModal } from '../../Organisms/NutritionModal/NutritionModal.js';
import { DeleteNutritionModal } from '../DeleteNutritionModal/DeleteNutritionModal.js';
import { FoodTableProps } from './CardTable.interface';
import {
  DivCardTable,
  DivContainer,
  DividerCardTable,
  DivTitle,
  ModalCardTable,
  SheetCardTable,
  TableCardTable,
} from './CardTable.styles';

export const CardTable = () => {
  const [openAddModal, setopenAddModal] = useState<boolean>(false);
  const [openEditModal, setOpenEditModal] = useState<boolean>(false);
  const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);
  const [foodTable, setFoodTable] = useState<FoodTableProps[]>([]);
  const [selectTableItem, setSelectTableItem] = useState<FoodTableProps>();

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
        <DividerCardTable />
        <Button
          startDecorator={<AddRoundedIcon />}
          onClick={() => setopenAddModal(true)}
        >
          Add items
        </Button>
        <TableCardTable>
          <caption>Nutrition of your favorite menus.</caption>
          <thead>
            <tr>
              <th>Name</th>
              <th>Calories</th>
              <th>Fat&nbsp;(g)</th>
              <th>Carbs&nbsp;(g)</th>
              <th>Protein&nbsp;(g)</th>
              <th>Actions</th>
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
                  <DivCardTable>
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
                  </DivCardTable>
                </td>
              </tr>
            ))}
          </tbody>
        </TableCardTable>
      </DivContainer>
      <ModalCardTable
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={openAddModal}
        onClose={() => setopenAddModal(false)}
      >
        <SheetCardTable variant="soft">
          <NutritionModal open={openAddModal} setOpen={setopenAddModal} />
        </SheetCardTable>
      </ModalCardTable>
      <ModalCardTable
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={openEditModal}
        onClose={() => setOpenEditModal(false)}
      >
        <SheetCardTable variant="soft">
          {selectTableItem && (
            <NutritionModal
              open={openEditModal}
              setOpen={setOpenEditModal}
              selectTableItem={selectTableItem}
            />
          )}
        </SheetCardTable>
      </ModalCardTable>
      <ModalCardTable
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={openDeleteModal}
        onClose={() => setOpenDeleteModal(false)}
      >
        <SheetCardTable variant="soft">
          {selectTableItem && (
            <DeleteNutritionModal
              open={openDeleteModal}
              setOpen={setOpenDeleteModal}
              selectTableItem={selectTableItem}
            />
          )}
        </SheetCardTable>
      </ModalCardTable>
    </>
  );
};
