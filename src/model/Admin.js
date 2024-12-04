const mongoose = require('mongoose');

const AdmSchema extends AbstractUser = new mongoose.Schema({
  isAdmin: boolean
});

module.exports = mongoose.model('Adm', AdmSchema);
