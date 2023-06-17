class SitesController {
  // [GET] / => home page
  home(req, res) {
    res.render('home');
  }
  // [GET] /search page
  search(req, res) {
    res.render('search');
  }
}

module.exports = new SitesController();
