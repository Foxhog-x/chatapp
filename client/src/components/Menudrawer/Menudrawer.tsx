import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Avatar, IconButton } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import GroupIcon from "@mui/icons-material/Group";
import CampaignIcon from "@mui/icons-material/Campaign";
import ContactsIcon from "@mui/icons-material/Contacts";
import CallIcon from "@mui/icons-material/Call";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import DarkModeIcon from "@mui/icons-material/DarkMode";
interface MenuDrawerProps {
  open: boolean;
  setOpen: (value: boolean) => void;
}
export default function Menudrawer({ open, setOpen }: MenuDrawerProps) {
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <Box
        sx={{
          margin: 1,
          padding: 2,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            position: "relative",
          }}
        >
          <Avatar />
          <IconButton style={{ position: "absolute", top: -8, right: 0 }}>
            <img src="brightness.png" alt="lightmode" width={20} height={20} />
          </IconButton>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>-admin</span>
            <span>Set Emoji Sticker</span>
          </div>
          <div>
            <IconButton>
              <KeyboardArrowUpIcon />
            </IconButton>
          </div>
        </div>
      </Box>
      <Divider />
      <List>
        {[
          "New Group",
          "New Channel",
          "Contacts",
          "Calls",
          "Saved Messages",
          "Settings",
          "Night Mode",
        ].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index === 0 ? (
                  <GroupIcon />
                ) : index === 1 ? (
                  <CampaignIcon />
                ) : index === 2 ? (
                  <ContactsIcon />
                ) : index === 3 ? (
                  <CallIcon />
                ) : index === 4 ? (
                  <BookmarkBorderIcon />
                ) : index === 5 ? (
                  <SettingsSuggestIcon />
                ) : index === 6 ? (
                  <DarkModeIcon />
                ) : (
                  ""
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
