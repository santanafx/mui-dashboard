import { Button, ModalClose, Typography } from '@mui/joy';

import { deleteFood } from '../../../Services/CardTable/CardTable.service';
import { DeleteNutritionModalProps } from './DeleteNutritionModal.interface';
import {
  DivButtons,
  DivContainer,
  DivTypography,
} from './DeleteNutritionModal.styles';

export const DeleteNutritionModal = ({
  open,
  setOpen,
  selectTableItem,
}: DeleteNutritionModalProps) => {
  const { name } = selectTableItem;

  const handleDeleteItem = () => {
    deleteFood(selectTableItem.id!);
    setOpen(!open);
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
          Delete item
        </Typography>
      </DivTypography>
      <DivContainer>
        <Typography>{`Are you sure you want to delete ${name}?`}</Typography>
        <DivButtons>
          <Button variant="soft" onClick={() => setOpen(!open)}>
            Cancel
          </Button>
          <Button onClick={() => handleDeleteItem()}>Yes</Button>
        </DivButtons>
      </DivContainer>
    </>
  );
};
