var 
mongoose = require('mongoose'),
_ = require('underscore');
Schema = mongoose.Schema;

var PreSignupSchema = new Schema({
  email: String,
  isIndieGameDev: Boolean,
  prefGameFramework: String
});

mongoose.model('PreSignup', PreSignupSchema);
