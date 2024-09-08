import { Input, Typography } from '@mui/joy';
import { styled } from '@mui/system';

import { dividerColors } from '../../Theme';

export const DivContainer = styled('div')(() => ({
  margin: '25vh auto',
  width: '30%',
  border: `1px solid ${dividerColors}`,
  borderRadius: '10px',
  padding: '20px',
}));

export const DivTitle = styled('div')(() => ({
  margin: '0 auto',
  width: '100%',
  marginBottom: '20px',
}));

export const DivFormButtons = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
}));

export const DivForm = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  flex: 0.7,
}));

export const InputForm = styled(Input)(() => ({
  marginBottom: '40px',
}));

export const TypographyError = styled(Typography)(() => ({
  color: 'red',
}));

export const DivButtons = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '10px',
  flex: 0.3,
}));
