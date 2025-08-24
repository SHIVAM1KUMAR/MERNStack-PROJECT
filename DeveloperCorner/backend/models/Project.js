const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    clientName: { type: String, required: true },
    email: { type: String, required: true },
    projectDetails: { type: String, required: true },
    status: { type: String, enum: ['pending', 'in-progress', 'completed'], default: 'pending' },
});

module.exports = mongoose.model('Project', projectSchema);
