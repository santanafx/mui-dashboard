import { Drawer, IconButton } from '@mui/joy';
import { styled } from '@mui/system';

export const DivHeadbarContainer = styled('div')(() => ({
  margin: '0 auto',
  width: '95%',
  height: '130px',
  backgroundColor: 'transparent',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}));

export const DivLogoIconMenu = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  maxWidth: '210px',
}));

export const DivLogoContainer = styled('div')(() => ({
  flex: 0.2,
}));

export const IconHeadButton = styled(IconButton)(() => ({
  minHeight: '5px',
}));

export const DrawerSidebar = styled(Drawer)(() => ({
  '--Drawer-horizontalSize': '200px',
}));

export const DivSearch = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

export const DivAvatar = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '10px',
}));

export const DivUserData = styled('div')(() => ({}));
