import express from "express";
import "dotenv/config";
import chats from "./data/data.js";

const app = express();

app.get("/", (req, res) => {
  res.send(`Server is Up`);
});
app.get("/api/chats", (req, res) => {
  res.send(chats);
});
app.get("/api/chats/:id", (req, res) => {
  const singleChat = chats.find((c) => c._id === req.params.id);
  res.send(singleChat);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server Started on ${PORT}`));
