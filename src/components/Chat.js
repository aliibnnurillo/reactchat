import { Container, Grid, TextField, Button, Avatar } from "@material-ui/core";
import React, { useContext, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Context } from "..";
import { useCollectionData } from "react-firebase-hooks/firestore";
import firebase from "firebase/compat/app";
import Loader from "./Loader";

function Chat() {
  const { auth, firestore } = useContext(Context);
  const [user] = useAuthState(auth);
  const [value, setValue] = useState("");
  const [messages, loading] = useCollectionData(
    firestore.collection("message").orderBy("createdAt") || []
  );

  console.log("Message: ", messages);

  const sendMessage = async () => {
    firestore.collection("message").add({
      uid: user.uid,
      displayName: user.displayName,
      photoURL: user.photoURL,
      text: value,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setValue("");
  };
  if (loading) {
    return <Loader />;
  }
  return (
    <Container>
      <Grid
        container
        style={{ height: window.innerHeight - 50 }}
        justifyContent={"center"}
      >
        <div
          style={{
            width: "80%",
            height: "60vh",
            border: "1px solid gray",
            overflowX: "auto",
            marginTop: "10px",
            background: " linear-gradient(45deg,#e1442e,#39249a",
          }}
        >
          {(messages || []).map((message) => (
            <div
              style={{
                margin: 10,
                backgroundColor:
                  user.uid === message.uid
                    ? "rgba(255,255,255, 0.7)"
                    : "rgba(228,83,167, 0.549)",
                marginLeft: user.uid === message.uid ? "auto" : "10px",
                width: "40%",
                padding: 5,
                borderRadius: "10px",
              }}
            >
              <Grid
                container
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Avatar src={message.photoURL} />
                <div>{message.displayName}</div>
              </Grid>
              <div style={{ marginTop: "5px" }}>{message.text}</div>
            </div>
          ))}
        </div>
        <Grid
          container
          direction="column"
          alignItems="flex-end"
          style={{ width: "80%" }}
        >
          <TextField
            value={value}
            fullWidth
            variant="outlined"
            placeholder="Message"
            onChange={(e) => setValue(e.target.value)}
            style={{ background: "lightgray" }}
          />
          <Button
            variant="outlined"
            style={{ background: "green", marginTop: "5px" }}
            onClick={sendMessage}
          >
            Send Message
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Chat;
