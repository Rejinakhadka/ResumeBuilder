import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

const Navbar = () => {
  return (
    <AppBar position="static"sx={{ backgroundColor: "#689EB8" }}>
      <Toolbar>
        <Typography variant="h6">Resume Builder</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
