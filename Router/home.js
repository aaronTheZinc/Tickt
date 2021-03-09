const Express = require("express");
const router = Express.Router();
const data = require("../Content/content");
router.get("/home", async (req, res) => {
  const page_src = new data({
      page:'home',
      type:'web'
  }).homePage();


  res.json( page_src);

});




router.get("/", (req, res) => {
  res.send("hi");
});
module.exports = router;
