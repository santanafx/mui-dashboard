import { useState } from 'react';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { Avatar, IconButton, Input, Typography } from '@mui/joy';

import { Logo } from '../Logo/Logo';
import { Sidebar } from '../Sidebar/Sidebar';
import {
  DivAvatar,
  DivHeadbarContainer,
  DivLogoContainer,
  DivLogoIconMenu,
  DivSearch,
  DivUserData,
  DrawerSidebar,
  IconHeadButton,
} from './Headbar.styles';

export const Headbar = () => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const [searchInput, setSearchInput] = useState<string>('');

  return (
    <>
      <DivHeadbarContainer>
        <DivLogoIconMenu>
          <DivLogoContainer>
            <Logo />
          </DivLogoContainer>

          <IconHeadButton
            size="md"
            variant="plain"
            color="neutral"
            onClick={() => setOpenDrawer(true)}
          >
            <MenuRoundedIcon />
          </IconHeadButton>
        </DivLogoIconMenu>
        <DivSearch>
          <Input
            size="sm"
            variant="outlined"
            placeholder="Search info…"
            startDecorator={<SearchRoundedIcon color="primary" />}
            endDecorator={
              <IconButton variant="outlined">
                <Typography level="title-sm" textColor="text.icon">
                  CTRL + F
                </Typography>
              </IconButton>
            }
            onChange={(event) => setSearchInput(event.target.value)}
          />
        </DivSearch>
        <DivAvatar>
          <Avatar
            src="https://picsum.photos/id/237/200/300"
            srcSet="https://picsum.photos/id/237/200/300"
            sx={{ borderRadius: '50%' }}
          />
          <DivUserData>
            <Typography>Users Name</Typography>
            <Typography fontSize="sm">Front end developer</Typography>
          </DivUserData>
        </DivAvatar>
      </DivHeadbarContainer>
      <DrawerSidebar open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <Sidebar />
      </DrawerSidebar>
    </>
  );
};
