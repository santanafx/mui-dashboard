import { styled } from '@mui/system';

export const DivTypography = styled('div')(() => ({
  margin: '20px',
}));

export const DivContainer = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  margin: '20px',
}));

export const DivButtons = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  gap: '10px',
  flex: 0.3,
  marginTop: '20px',
}));
