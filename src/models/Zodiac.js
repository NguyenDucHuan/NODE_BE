const mongoose = require('mongoose');

const zodiacElementSchema = new mongoose.Schema({
    name: { type: String, required: true }
}, { timestamps: true });

const ZodiacElement = mongoose.model('ZodiacElement', zodiacElementSchema);

module.exports = ZodiacElement;