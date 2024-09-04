import { useState } from 'react';
import AccountTreeRoundedIcon from '@mui/icons-material/AccountTreeRounded';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import GroupRoundedIcon from '@mui/icons-material/GroupRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import SettingsEthernetRoundedIcon from '@mui/icons-material/SettingsEthernetRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import { Divider, ListSubheader, Typography } from '@mui/joy';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import ListItemContent from '@mui/joy/ListItemContent';

import { ListItemSideBar } from '../ListItemSideBar/ListItemSideBar';
import {
  DivAdminContainer,
  DivConfigurationsContainer,
  DivContainer,
  DivLogoutContainer,
  LogOutListItem,
  UserList,
  UserListItem,
  UserListItemFontSize,
  UserTypography,
} from './Sidebar.styles';

export const Sidebar = () => {
  const [openUserList, setOpenUserList] = useState(false);

  return (
    <DivContainer>
      <DivAdminContainer>
        <List>
          <ListSubheader>ADMIN OPTIONS</ListSubheader>
          <ListItem nested>
            <ListItemButton
              onClick={() => setOpenUserList(!openUserList)}
              selected={openUserList}
            >
              <GroupRoundedIcon />
              <ListItemContent>
                <UserTypography level="title-sm">Users</UserTypography>
              </ListItemContent>
              <KeyboardArrowDownIcon
                sx={{ transform: openUserList ? 'rotate(180deg)' : 'none' }}
              />
            </ListItemButton>

            {openUserList && (
              <UserList>
                <UserListItem>
                  <ListItemButton
                    role="menuitem"
                    component="a"
                    href="/joy-ui/getting-started/templates/profile-dashboard/"
                  >
                    My profile
                  </ListItemButton>
                </UserListItem>
                <UserListItemFontSize>
                  <ListItemButton>Create a new user</ListItemButton>
                </UserListItemFontSize>
                <UserListItemFontSize>
                  <ListItemButton>Roles & permission</ListItemButton>
                </UserListItemFontSize>
              </UserList>
            )}
          </ListItem>
          <ListItemSideBar text="Home" icon={<HomeRoundedIcon />} />
          <ListItemSideBar text="Dashboard" icon={<DashboardRoundedIcon />} />
          <ListItemSideBar text="Orders" icon={<ShoppingCartRoundedIcon />} />
        </List>
      </DivAdminContainer>
      <Divider />
      <DivConfigurationsContainer>
        <List>
          <ListSubheader>CONFIGURATIONS</ListSubheader>
          <ListItemSideBar text="Projects" icon={<AccountTreeRoundedIcon />} />
          <ListItemSideBar
            text="Settings"
            icon={<SettingsEthernetRoundedIcon />}
          />
        </List>
      </DivConfigurationsContainer>
      <Divider />
      <DivLogoutContainer>
        <LogOutListItem>
          <ListItemButton>
            <LogoutRoundedIcon sx={{ fontSize: '2rem', marginRight: '10px' }} />
            <ListItemContent>
              <Typography level="title-sm">Logout</Typography>
            </ListItemContent>
          </ListItemButton>
        </LogOutListItem>
      </DivLogoutContainer>
    </DivContainer>
  );
};
