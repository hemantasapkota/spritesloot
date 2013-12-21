var mongoose = require('mongoose'),
    _ = require('underscore'),
    SlootCollection = mongoose.model('SlootCollection'),
    fs = require('fs'),
    unzip = require('unzip');
 
    exports.all = function(req, res) {
      SlootCollection.find({"developerId" : "laex.pearl@gmail.com"}, function(err, docs) {
        res.send(docs);
      });
    };

    exports.find = function(req, res, developerId, collectionTitle) {
      //Find collection based on developer ID and Collection Title.
    };

    exports.create = function(req, res) {
      var col = new SlootCollection(req.body);

      SlootCollection.find({"developerId" : col.developerId, "collectionTitle" : col.collectionTitle}, function(err, docs) {

        if (docs.length > 0) {
          SlootCollection.remove({"developerId" : col.developerId, "collectionTitle" : col.collectionTitle}, function(err, rm) {
          });
        }

        //Save
        col.save(function(err){
          if (err) {
            return res.send({'errror' : 'Could not create collection.'});
          } else {
            res.send(col._id);
          }
        });

      });
    };

    exports.upload = function(req, res) {
        res.send(200);
        var zipFile = req.params.item + '.zip';
        /* After upload is complete, unzip the file */
        fs.createReadStream(req.files[zipFile].path).pipe(unzip.Extract({ path: 'public/' + req.params.item }));
        /* Remove the tmp zip file */
        fs.unlink(req.files[zipFile].path, function(err) {
          if (err) {
            console.log(err);
          }
        });
      };
