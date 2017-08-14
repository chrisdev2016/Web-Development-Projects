const mongoose = require("mongoose"),
      Schema = mongoose.Schema;
      ObjectId = Schema.Types.ObjectId;

const carSchema = new Schema({
   
    make:String,
    model:String,
    year:Number,
    dealership_id:{type:ObjectId, ref: "Dealership"}

});

const carModel = mongoose.model('Car', carSchema);

module.exports = {
    model: carModel,
    schema: carSchema
};

