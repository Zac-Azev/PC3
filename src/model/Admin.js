const mongoose = require('mongoose');

const AdmSchema extends AbstractUser = new mongoose.Schema({
  isAdmin: Boolean
});

module.exports = mongoose.model('Adm', AdmSchema);
