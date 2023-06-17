const express = require("express");
const path = require("path");
const users = require('./api/Users.js'); // add a middleware Users
// include express-handlebars to load avalable FrontEnd interface
const exphbs = require("express-handlebars");
const hbs = exphbs.create();

const app = express();

// Thiết lập view engine
app.engine("handlebars", hbs.engine);
app.set("pages view engine", "handlebars");


// Get all users
app.get("/api/users", (req, res) => res.json(users));
 
// Set static folder of pages' folder
app.use(express.static(path.join(__dirname, "pages")));

// Cấu hình đường dẫn tới các file của các pages
// app.set('pages', path.join(__dirname, 'pages'));
// app.get('/', (req,res)=>{
//     res.render('index.html');
// });
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server started on port :${PORT}`));
