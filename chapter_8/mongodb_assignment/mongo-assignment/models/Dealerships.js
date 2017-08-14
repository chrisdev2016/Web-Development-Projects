const mongoose = require("mongoose"),
      Schema = mongoose.Schema;

const dealershipSchema = new Schema({
   
    make:String,
    city:String,
    province:String,
    postal_code:String,
    street:String,
    reviews:[]

});

const dealershipModel = mongoose.model('Dealership', dealershipSchema);

module.exports = {
    model: dealershipModel,
    schema: dealershipSchema
};


