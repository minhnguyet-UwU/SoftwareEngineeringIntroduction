const contractsRouter = require('./contracts');
const sitesRouter = require('./sites');

function route(app) {
  app.use('/contracts', contractsRouter);

  app.get('/', sitesRouter);
}

module.exports = route;
