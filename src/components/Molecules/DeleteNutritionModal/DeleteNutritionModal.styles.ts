import { styled } from '@mui/system';

export const DivContainer = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
}));

export const DivButtons = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  gap: '10px',
  flex: 0.3,
  marginTop: '20px',
}));
