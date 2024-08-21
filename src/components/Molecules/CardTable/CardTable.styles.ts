import { styled } from '@mui/system';

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
