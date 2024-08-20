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

import {
  DivAdminContainer,
  DivConfigurationsContainer,
  DivContainer,
  DivLogoutContainer,
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
                <Typography level="title-sm" sx={{ userSelect: 'none' }}>
                  Users
                </Typography>
              </ListItemContent>
              <KeyboardArrowDownIcon
                sx={{ transform: openUserList ? 'rotate(180deg)' : 'none' }}
              />
            </ListItemButton>

            {openUserList && (
              <List sx={{ gap: 0.5, border: 'none' }}>
                <ListItem sx={{ mt: 0.5, fontSize: '0.82rem' }}>
                  <ListItemButton
                    role="menuitem"
                    component="a"
                    href="/joy-ui/getting-started/templates/profile-dashboard/"
                  >
                    My profile
                  </ListItemButton>
                </ListItem>
                <ListItem sx={{ fontSize: '0.82rem' }}>
                  <ListItemButton>Create a new user</ListItemButton>
                </ListItem>
                <ListItem sx={{ fontSize: '0.82rem' }}>
                  <ListItemButton>Roles & permission</ListItemButton>
                </ListItem>
              </List>
            )}
          </ListItem>

          <ListItem>
            <ListItemButton>
              <HomeRoundedIcon />
              <ListItemContent>
                <Typography level="title-sm">Home</Typography>
              </ListItemContent>
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton>
              <DashboardRoundedIcon />
              <ListItemContent>
                <Typography level="title-sm">Dashboard</Typography>
              </ListItemContent>
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton>
              <ShoppingCartRoundedIcon />
              <ListItemContent>
                <Typography level="title-sm">Orders</Typography>
              </ListItemContent>
            </ListItemButton>
          </ListItem>
        </List>
      </DivAdminContainer>

      <Divider />
      <DivConfigurationsContainer>
        <List>
          <ListSubheader>CONFIGURATIONS</ListSubheader>
          <ListItem>
            <ListItemButton>
              <AccountTreeRoundedIcon />
              <ListItemContent>
                <Typography level="title-sm">Projects</Typography>
              </ListItemContent>
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton>
              <SettingsEthernetRoundedIcon />
              <ListItemContent>
                <Typography level="title-sm">Settings</Typography>
              </ListItemContent>
            </ListItemButton>
          </ListItem>
        </List>
      </DivConfigurationsContainer>

      <Divider />
      <DivLogoutContainer>
        <ListItem sx={{ marginLeft: '20px' }}>
          <ListItemButton>
            <LogoutRoundedIcon sx={{ fontSize: '2rem', marginRight: '10px' }} />
            <ListItemContent>
              <Typography level="title-sm">Logout</Typography>
            </ListItemContent>
          </ListItemButton>
        </ListItem>
      </DivLogoutContainer>
    </DivContainer>
  );
};
