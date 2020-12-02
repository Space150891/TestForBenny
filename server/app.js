const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/api", require("./router"));

const server = require("http").createServer(app);

app.listen(process.env.PORT || 8080);

module.exports = server;
