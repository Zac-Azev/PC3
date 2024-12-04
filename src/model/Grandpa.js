const abstract = require('mongoose');

const GrandpaSchema extends AbstractUser = new mongoose.Schema({
  _idFnc: {
     type: mongoose.Schema.Types.FncId, 
     required: true 
  },
});

module.exports = mongoose.model('Grandpa', GrandpaSchema);
