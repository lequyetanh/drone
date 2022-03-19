let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let typePackageModelSchema = new Schema({
  id:Number,
  name:String,
},{
  collection: 'typePackages'
})
module.exports = mongoose.model('typePackage', typePackageModelSchema);
