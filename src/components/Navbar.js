import React from "react";
import { useContext } from "react";
import { AppBar, Toolbar, Button, Grid } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { LOGIN_ROUTE } from "../util/Const";
import { useAuthState } from "react-firebase-hooks/auth";
import { Context } from "..";

function Navbar() {
  const { auth } = useContext(Context);
  const [user] = useAuthState(auth);
  return (
    <>
      <AppBar
        style={{ background: "linear-gradient(-45deg, #39249a, #e14e42)" }}
        position="static"
      >
        <Toolbar variant="dense">
          <h3>Nurillo Kimsanboyev</h3>
          <Grid container justifyContent={"flex-end"}>
            {user ? (
              <Button onClick={() => auth.signOut()} variant="outlined">
                Exit
              </Button>
            ) : (
              <NavLink to={LOGIN_ROUTE}>
                <Button variant="outlined">Login</Button>
              </NavLink>
            )}
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
