import { List, ListItem, Typography } from '@mui/joy';
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

export const UserTypography = styled(Typography)(() => ({
  userSelect: 'none',
}));

export const UserList = styled(List)(() => ({
  gap: 0.5,
  border: 'none',
}));

export const UserListItem = styled(ListItem)(() => ({
  marginTop: 0.5,
  fontSize: '0.82rem',
}));

export const UserListItemFontSize = styled(ListItem)(() => ({
  fontSize: '0.82rem',
}));

export const LogOutListItem = styled(ListItem)(() => ({
  marginLeft: '20px',
}));
