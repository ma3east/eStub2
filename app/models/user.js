var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({
  name: String,
  dob: Date,
  email: { type: String, required: true, unique: true }
});

var User = mongoose.model('User', UserSchema);

module.exports = User;