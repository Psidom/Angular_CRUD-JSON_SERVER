var mongoose = require('mongoose');
var CloneSchema = new mongoose.Schema({
  nome: String,
  idade: String,
  data: { type: Date, default: Date.now },
  atributo1: String,
  atributo2: String,
  atributo3: String,
  atributo4: String,
  atributo5: String,
});
module.exports = mongoose.model('Clone', CloneSchema);
