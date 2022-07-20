import { Box, Button, Container, Grid } from "@material-ui/core";
import React, { useContext } from "react";
import { Context } from "../index";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

function Login() {
  const { auth } = useContext(Context);
  const login = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const user = await auth.signInWithPopup(provider);
    console.log(user);
  };
  return (
    <Container
      style={{
        width: "100%",
      }}
    >
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        style={{ height: window.innerHeight - 50 }}
      >
        <Grid
          style={{ width: 400, background: "lightgray", height: 100 }}
          container
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Box p={5}>
            <Button onClick={login} variant="outlined">
              sign in with google
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Login;
