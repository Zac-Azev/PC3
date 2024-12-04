const mongoose = require('mongoose');

const ActSchema = new mongoose.Schema(
        {
          toDo: String,
          timeToDO: Date,
          timeToStop: Date,
		      _idGrandpa: {
                 type: mongoose.Schema.Types.GrandpaId, 
                 required: true
              },
           },
         { timestamps: true }
);

module.exports = mongoose.model('Act', ActSchema);
