import {
  ListItem,
  ListItemButton,
  ListItemContent,
  Typography,
} from '@mui/joy';

import { ListItemSideBarProps } from './ListItemSideBar.interface';

export const ListItemSideBar = ({ text, icon }: ListItemSideBarProps) => {
  return (
    <ListItem>
      <ListItemButton>
        {icon}
        <ListItemContent>
          <Typography level="title-sm">{text}</Typography>
        </ListItemContent>
      </ListItemButton>
    </ListItem>
  );
};
