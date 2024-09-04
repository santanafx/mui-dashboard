import { Input, Typography } from '@mui/joy';
import { styled } from '@mui/system';

import { errorColor } from '../../../Theme';

export const InputFormData = styled(Input)(() => ({
  marginBottom: '20px',
}));

export const TypographyError = styled(Typography)(() => ({
  color: errorColor,
}));
