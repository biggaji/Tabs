// if(process.env.NODE_ENV==="development") {
	require("dotenv").config();
// }
const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");
const indexRouter = require("./routes/index");

const app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));
app.engine("hbs", exphbs({defaultLayout: "main", extname: "hbs"}));

app.set("view engine", "hbs");

app.use("/", indexRouter);

app.use((req,res,next) => {
	res.render("404", {pageTitle: "Page not found"});
});


const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
	console.log("server running on port ", PORT);
});