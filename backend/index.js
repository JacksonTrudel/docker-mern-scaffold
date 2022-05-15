const express = require("express");

const cors = require("cors");
const helmet = require("helmet"); // for security
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // parse incoming requests with JSON payloads

app.listen(5001, () => console.log("server listening on port 5001 ..."));

// import routes
const getItems = require("./routes/getItems");

// Add routes
app.get("/api/items", getItems);
