var mongoose = require('mongoose'),
    _ = require('underscore'),
    PreSignup = mongoose.model('PreSignup');

    exports.all = function(req, res) {
      PreSignup.find({}, 'isGameDev gameFrameworks', function(err, ups) {
        res.send(ups);
      });
    };

    exports.preSignup = function(req, res) {
      var newSignup = new PreSignup(req.body);

      PreSignup.find({'email' : req.body.email}, function(err, rec) {
        if (rec.length > 0) {
          return res.send({'error' : 'Already subscribed'});
        }

        newSignup.save(function(err) {
          if (err) {
            return res.send({'error' : 'Coulnd not complete signup'});
          } else {
            res.send(200);
          }
        });
     })
    };
