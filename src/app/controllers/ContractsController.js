class ContractsController {
  // [GET] /contracts
  index(req, res) {
    res.render('contracts');
  }
  // [GET] /contracts/:id
  showID(req, res) {
    res.send('naninnaninnaninniai');
  }
}

module.exports = new ContractsController();
