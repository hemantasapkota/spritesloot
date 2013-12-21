module.exports = function(app) {

  require('../models/slootCollection');

  //REST API
  //Based on guidelines from http://restful-api-design.readthedocs.org/en/latest/urls.html
  app.get('/api', function(req, res) {
    res.send('Sloot API v1.0 is running');
  });

  //Sloot Content
  var slootCollectionCtrl = require('../controllers/slootCollectionCtrl.js');

  app.get('/api/slootContent', slootCollectionCtrl.all);
  app.post('/api/slootContent', slootCollectionCtrl.create);
  app.put('/api/slootContent/:item', slootCollectionCtrl.upload);
}
