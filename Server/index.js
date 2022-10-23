//const express = require("express");
import express, { json } from "express";
//const getTokenUri = require("./apps/tokenUri");
import getTokenUri from "./apps/tokenUri.js";
const app = express();
app.use(express.json());

app.get("/", function (req, res) {
  res.send("Hello World");
});

//@ Get the token uri from IPFS
app.post("/tokenuri", (req, res) => {
  const dataAddr = req.body.data;
  getTokenUri(dataAddr).then(
    (e) => {
      res.send(e);
    },
    (err) => {
      console.log(err);
    }
  );
});

app.listen(3000);
