// A GET Route to `/survey` which should display the survey page.
//* A default, catch-all route that leads to `home.html` which displays the home page.

// module.exports = function(app) {
//   app.get('/survey', function(req, res){
//     res.send(req.path);
//   })
// }
const path = require("path")
const router = require('express').Router()

router.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

router.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

module.exports = router;