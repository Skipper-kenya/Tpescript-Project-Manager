const express = require("express");
const { port, connectMysql } = require("./database/config");
require("dotenv").config();
const cors = require("cors");
const crudRouter = require("./routes/crud");

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    methods: ["POST", "PUT", "DELETE", "GET"],
  })
);

app.use("/api", crudRouter);

connectMysql(() => {
  app.listen(port, () => {
    console.log(`listening on port ${port}`);
  });
});
