import React from "react";
import Grid from "@mui/material/Grid2";
import { Box, IconButton, Drawer } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../asstes/Ai-Logo.png";
import navButton from "../asstes/close button.png";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const SidebarContent = ({ handleNavigation }) => (
  <Box>
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "5px",
        backgroundColor: "#D7C7F4",
      }}
    >
      <Box
        sx={{
          width: "33px",
          height: "33px",
          overflow: "hidden",
          borderRadius: "50%",
          display: { xs: "none", sm: "none", md: "block" },
        }}
      >
        <img src={logo} alt="ai-logo" />
      </Box>
      <Box>
        New Chat
        <button style={{ backgroundColor: "#D7C7F4", border: 0 }}>
          <img src={navButton} alt="button" />
        </button>
      </Box>
    </Box>
    <Box>
      <Box sx={{display:"flex", justifyContent:"center", alignItems:"center", marginTop:"10px"}}>
        <span>
          <button onClick={handleNavigation} style={{backgroundColor:"#D7C7F4", border:0, height:"30px", borderRadius:"5px"}}>Past conversations</button>
        </span>
      </Box>
    </Box>
  </Box>
);

const Main = () => {
  //function to open and close sideBar
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDrawer = (state) => () => {
    setOpen(state);
  };

  //handleChat
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleNavigation=()=>{
    navigate("/history")
  }

  return (
    <>
      <Box margin={1}>
        <Grid container spacing={1}>
          {/* Burger Icon (Visible only on small screens) */}
          <Grid size={{ xs: 2, sm: 2, md: 0 }} sx={{ display: { md: "none" } }}>
            <IconButton onClick={toggleDrawer(true)} sx={{ margin: 1 }}>
              <MenuIcon fontSize="large" />
            </IconButton>
          </Grid>

          {/* Side bar */}
          <Grid
            size={{ xs: 0, sm: 0, md: 2 }}
            sx={{
              border: "1px solid red",
              height: "95vh",
              display: { xs: "none", sm: "none", md: "block" },
            }}
          >
            <Box>
              <SidebarContent handleNavigation={handleNavigation}/>
            </Box>
          </Grid>

          {/* Main component */}
          <Grid
            size={{ xs: 10, sm: 10, md: 10 }}
            sx={{ border: "1px solid black", height: "95vh", padding:"5px" , backgroundColor:"#D7C7F4"}}
          >
            <Box>
              <header ><h3 style={{color:"#9785BA", backgroundColor:"#D7C7F4", margin:0, padding:0}}>BOT AI</h3></header>

              {/* chat area */}
              <Box sx={{ height: "83vh" }}></Box>

              {/* Input box */}
              <Box sx={{ padding: "0 10px" }}>
                <form
                  style={{ display: "flex", justifyContent: "space-evenly" }}
                  action="submit"
                  onSubmit={(e) => handleSubmit(e)}
                >
                  <input
                    placeholder="Message Bot AI…"
                    style={{ width: "65vw", height: "30px" }}
                    type="text"
                    name=""
                    id=""
                  />
                  <button type="submit">Ask</button>
                  <button type="button">Save</button>
                </form>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Mobile Sidebar Drawer */}
        <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
          <Box width="250px" role="presentation" onClick={toggleDrawer(false)}>
            <SidebarContent handleNavigation={handleNavigation} />
          </Box>
        </Drawer>
      </Box>
    </>
  );
};

export default Main;
