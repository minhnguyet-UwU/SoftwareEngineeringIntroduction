const express = require("express");
const route = require("./routes/index.js");
const path = require("path");
// const users = require("../api/Users.js"); // add a middleware Users
// include express-handlebars to load avalable FrontEnd interface
const exphbs = require("express-handlebars");
const hbs = exphbs.create();
const db = require('./config/db');
// connect to db
db.connect();
const app = express();
// static images
app.use(express.static(path.join(__dirname, "resources", "views")));
// Thiết lập view engine
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "resources", "views"));

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

// route init for app
route(app);
const PORT = 8080;
app.listen(PORT, () => console.log(`Server started on port :${PORT}`));
