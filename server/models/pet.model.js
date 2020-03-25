const mongoose = require('mongoose');
const PetSchema = new mongoose.Schema({
    name: {type: String, required:[true, "name is required"], minlength:[3, "must be at least 3 chars"]},
    type: {type: String, required:[true, "type is required"], minlength:[3, "must be at least 3 chars"]} ,
    skills: [String],
    likes: Number,
    description: {type: String, required:[true, "description is required"], minlength:[3, "must be at least 3 chars"]},
}, { timestamps: true });
module.exports.Pet = mongoose.model('Pet', PetSchema);