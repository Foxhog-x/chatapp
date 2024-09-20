import React from "react";
import styles from "./Telegramchat.module.css";
import MenuIcon from "@mui/icons-material/Menu";

import Menudrawer from "../Menudrawer/Menudrawer";
import Sidebar from "../Sidebar";
import { Avatar } from "@mui/material";
import ChatList from "../Chatlist/Chatlist";

export const Telegramchat: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <div style={{ display: "flex" }}>
        <Sidebar open={open} setOpen={setOpen}>
          <Menudrawer open={open} setOpen={setOpen} />
        </Sidebar>
        <div style={{ display: "flex", flexGrow: 1 }}>
          <div
            style={{
              flex: 0.3,
              border: "1px solid black",
              minWidth: "300px",
              maxWidth: "30%",
              boxSizing: "border-box",
            }}
          >
            <div>
              <div
                style={{
                  padding: 4,
                  paddingLeft: 5,
                  borderBottom: "1px solid black",
                }}
              >
                <h3>Users</h3>
              </div>
            </div>
            <ChatList />
          </div>
          <div
            style={{
              flex: 0.7,

              border: "1px solid black",
              boxSizing: "border-box",
            }}
          >
            <div
              style={{
                paddingLeft: 10,
                minHeight: 20,
                borderBottom: "1px solid black",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: 13,
                  justifyContent: "space-between",
                }}
              >
                <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                  <Avatar />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <span>Trading Skills</span>
                    <span>subscriber</span>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: 20,
                  }}
                >
                  <span>search</span>
                  <MenuIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
