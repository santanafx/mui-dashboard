import { styled } from '@mui/system';

export const DivContainer = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
}));

export const DivAdminContainer = styled('div')(() => ({
  flex: 0.15,
}));

export const DivConfigurationsContainer = styled('div')(() => ({
  flex: 0.15,
}));

export const DivLogoutContainer = styled('div')(() => ({
  flex: 0.6,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
}));
