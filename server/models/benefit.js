const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BenefitSchema = new Schema({
  name: { type: String },
  cost: { type: Number },
  description: { type: String }
});

mongoose.model('benefit', BenefitSchema);
