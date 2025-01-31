import React from "react";
import { useLocation, Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";
import logo from "../assets/Paris.png";
import SisenseLogo from "../assets/Sisense.png";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import PsychologyIcon from "@mui/icons-material/Psychology";
import AssessmentIcon from "@mui/icons-material/Assessment";

const drawerWidth = 240;

const NavDrawer: React.FC = () => {
  const location = useLocation();

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            Paris Olympics 2024
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Box>
          <Toolbar>
            <Box
              component="img"
              sx={{
                height: 200,
                width: "100%",
                objectFit: "contain",
              }}
              alt="Paris Logo"
              src={logo}
            />
          </Toolbar>
          <Divider />
          <List>
            {["Medals Overview", "Top Winners", "Ai Insights", "Self Service" ].map((text) => {
              const to = `/${text.toLowerCase().replace(" ", "")}`;
              const isActive = location.pathname === to;

              return (
                <ListItem key={text} disablePadding>
                  <ListItemButton
                    component={Link}
                    to={to}
                    sx={{
                      backgroundColor: isActive ? "#00b0ff" : "inherit",
                      "&:hover": {
                        backgroundColor: "#008aff",
                      },
                    }}
                  >
                    <ListItemIcon
                      sx={{ color: isActive ? "white" : "inherit" }}
                    >
                      {text === "Medals Overview" && <EmojiEventsIcon />}
                      {text === "Ai Insights" && <PsychologyIcon />}
                      {text === "Self Service" && <AssessmentIcon />}
                      {text === "Top Winners"&& <EmojiEventsIcon />}
                    </ListItemIcon>
                    <ListItemText
                      primary={text}
                      sx={{ color: isActive ? "white" : "inherit" }}
                    />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </Box>
        <Box p={2}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#00b0ff",
              color: "white",
              width: "100%",
              textTransform: "none",
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: "#008aff",
              },
            }}
            href="https://www.sisense.com/get/book-demo/"
            target="_blank"
          >
            Book Live Demo
          </Button>
          <Divider sx={{ my: 2 }} />
          <Box
            component="img"
            sx={{
              height: 100,
              width: "100%",
              objectFit: "contain",
            }}
            alt="Sisense Logo"
            src={SisenseLogo}
          />
        </Box>
      </Drawer>
    </Box>
  );
};

export default NavDrawer;
