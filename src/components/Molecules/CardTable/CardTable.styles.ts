import { Divider, Modal, Sheet, Table } from '@mui/joy';
import { style, styled } from '@mui/system';

import { dividerColors } from '../../../Theme';

export const DivContainer = styled('div')(() => ({
  margin: '0 auto',
  width: '100%',
  border: `1px solid ${dividerColors}`,
  borderRadius: '10px',
  padding: '20px',
}));

export const DivTitle = styled('div')(() => ({
  margin: '0 auto',
  width: '100%',
  marginBottom: '20px',
}));

export const DividerCardTable = styled(Divider)(() => ({
  marginBottom: '20px',
}));

export const TableCardTable = styled(Table)(() => ({
  captionSide: 'top',
  '& tbody': {
    bgcolor: 'background.surface',
  },
}));

export const DivCardTable = styled('div')(() => ({
  display: 'flex',
  gap: 1,
}));

export const ModalCardTable = styled(Modal)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

export const SheetCardTable = styled(Sheet)(() => ({
  maxWidth: 500,
  minWidth: 450,
  borderRadius: 'md',
  p: 3,
  boxShadow: 'lg',
}));
