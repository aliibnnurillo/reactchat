import { Container, Grid } from "@material-ui/core";
import React from "react";

function Loader() {
  return (
    <Container>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        style={{ height: window.innerHeight - 50 }}
      >
        <div className="lds-hourglass"></div>
      </Grid>
    </Container>
  );
}

export default Loader;
