import { styled } from '@mui/system';

import { dividerColors } from '../../../Theme';

export const DivTemplateContainer = styled('div')(() => ({
  display: 'flex',
}));

export const DivHeaderContainer = styled('div')(() => ({
  margin: '0 auto',
  width: '100%',
  borderBottom: `1px solid ${dividerColors}`,
}));

export const DivSidebarContainer = styled('div')(() => ({
  width: '200px',
  minWidth: '150px',
  height: '100vh',
  borderRight: `1px solid ${dividerColors}`,
}));
