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
    speed: {
        type: Number,
        required: true
    },
    glide: {
        type: Number,
        required: true
    },
    turn: {
        type: Number,
        required: true
    },
    fade: {
        type: Number,
        required: true
    },
    reviews: [String]
}, {
    timestamps: true
});

module.exports = mongoose.model('Disc', discSchema);