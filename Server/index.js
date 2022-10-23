//const express = require("express");
import express, { json } from "express";
//const getTokenUri = require("./apps/tokenUri");
import getTokenUri from "./apps/tokenUri.js";
const app = express();
app.use(express.json());
app.listen(3000);

app.get("/", function (req, res) {
  res.send("Hello World");
});

//@ Image 정보를 받아, uri 형식으로 전달
app.post("/tokenuri", (req, res) => {
  const dataAddr = req.body.data;
  const stopdata = { network: 1, preload: 2, ipns: 3, repo: 4, mfsPreload: 5 };
  const test = getTokenUri(dataAddr)
    .then((e) => {
      res.send(e);
    })
    .catch((err) => {
      console.error(err);
    });
});
// 저장 따로 전송 따로 ?
//@ Data 저장 ??
app.post("/getthedata", (req, res) => {
  //console.log(req.body.data);

  res.send(req.body.data);
});

//@ Data 전송
app.get("/senddata", (req, res) => {
  res.send("data를 받으세요 ");
});
