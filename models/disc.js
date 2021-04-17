const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const discSchema = new Schema({
    title: {
        type: String, 
        required: true
    },
    brand: {
        type: String, 
        required: true
    },
    discType: {
        type: String,
        required: true
    },
    speed: Number,
    glide: Number, 
    turn: Number,
    fade: Number,
    reviews: [String]
}, {
    timestamps: true
});

module.exports = mongoose.model('Disc', discSchema);