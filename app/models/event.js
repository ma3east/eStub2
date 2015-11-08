var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var EventSchema = new mongoose.Schema({
  name: String,
  date: Date,
  venue: String,
  city: String,
  price: Number,
  accompanied_by: String,
  url: String,
  file_upload: String,
  description: String,
  rating: Number,
  share: Boolean
});

var Event = mongoose.model('Event', EventSchema);

module.exports = Event;