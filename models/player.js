const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const playerSchema = new Schema({
    pName: {
        type: String, 
        required: true, 
        unique: true
    },
    skillLevel: {
        type: String,
        required: true
    },
    discs: [{
        type: Schema.Types.ObjectId,
        ref: 'Disc'
    }],
}, {
    timestamps: true
});

module.exports = mongoose.model('Player', playerSchema);