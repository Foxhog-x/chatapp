import React from "react";
import { styled } from "@mui/system";

import styles from "./Sidebar.module.css";
import { Box, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import QuestionAnswerRoundedIcon from "@mui/icons-material/QuestionAnswerRounded";

interface Sidebar_Props {
  children: React.ReactNode;
  open: boolean;
  setOpen: (value: boolean) => void;
}
export const Sidebar = ({ children, open, setOpen }: Sidebar_Props) => {
  const StyledBox = styled(Box)({
    "& .MuiIconButton-root": {
      width: 48,
      height: 48,
      padding: 0,
      display: "flex",
      flexDirection: "column",
      fontSize: 12,
    },
  });
  return (
    <div className={styles.sidebar_container}>
      {open ? (
        children
      ) : (
        <StyledBox sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
          <IconButton onClick={() => setOpen(!open)}>
            <MenuIcon />
          </IconButton>
          <IconButton>
            <QuestionAnswerRoundedIcon />
            <small>All chats</small>
          </IconButton>
          <IconButton>
            <QuestionAnswerRoundedIcon />
            <small>Users</small>
          </IconButton>
          <IconButton>
            <QuestionAnswerRoundedIcon />
            <small>Groups</small>
          </IconButton>
          <IconButton>
            <QuestionAnswerRoundedIcon />
            <small>SuperGroups</small>
          </IconButton>
        </StyledBox>
      )}
    </div>
  );
};
