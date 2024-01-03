const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const projectSchema = new Schema({
  title: { type: String, required: true },
  year: { type: Number, required: true },
  type: { type: String, required: true },
  location: { type: String, required: true },
  status: { type: String, required: true },
  area: { type: Number, required: true },
  dimensions: { type: String, required: true },
});


module.exports = mongoose.model('Project', projectSchema);