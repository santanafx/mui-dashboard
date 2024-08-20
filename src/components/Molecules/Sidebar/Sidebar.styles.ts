import { styled } from '@mui/system';

import { dividerColors } from '../../../Theme';

export const DivContainer = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  width: '200px',
  borderRight: `1px solid ${dividerColors}`,
}));

export const DivAdminContainer = styled('div')(() => ({
  flex: 0.15,
}));

export const DivConfigurationsContainer = styled('div')(() => ({
  flex: 0.15,
}));

export const DivLogoutContainer = styled('div')(() => ({
  flex: 0.65,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
}));
