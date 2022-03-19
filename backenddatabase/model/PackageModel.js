let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let packageModelSchema = new Schema({
  name:String,
  type: String,
  status: String,
  image: Array,
  quatity: Number,
  rate: Number,
  rate_vote: Number,
  content: Array,
  new_price: Number,
  old_price: Number,
  information: Array,
  id:Number,
  comment: Array,
},{
  collection: 'packages'
})
module.exports = mongoose.model('package', packageModelSchema);
