import { Input, Typography } from '@mui/joy';
import { styled } from '@mui/system';

export const DivTypography = styled('div')(() => ({
  margin: '20px',
}));

export const DivFormButtons = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  margin: '20px',
}));

export const DivForm = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  flex: 0.7,
}));

export const DivButtons = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  gap: '10px',
  flex: 0.3,
}));

export const InputNutrition = styled(Input)(() => ({
  marginBottom: '20px',
}));

export const TypographyError = styled(Typography)(() => ({
  color: 'red',
}));
