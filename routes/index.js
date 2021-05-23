const { Router } = require("express");

const router = Router();

router.get('/', (req,res) => {
	res.render("index", {pageTitle: "Homepage"});
});

router.get('/about', (req,res) => {
	res.render("about", {pageTitle: "About me"});
});

router.get('/contact', (req,res) => {
	res.render("contact", {pageTitle: "Contact"});
});

router.post('/contact', (req,res) => {
	// 
});
module.exports = router;