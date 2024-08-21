import { Input } from '@mui/joy';
import { styled } from '@mui/system';

export const DivForm = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}));

export const DivButtons = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  gap: '10px',
}));

export const InputNutrition = styled(Input)(() => ({
  marginBottom: '20px',
}));
