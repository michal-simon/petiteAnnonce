import mongoose from 'mongoose';
require('mongoose-type-email');

const userSchema = new mongoose.Schema({
    civilite: Number, required: true,
    nom: String, required: true,
    prenom: String, required: true,
    pseudo: String, required: true,
    adresse: String,
    codePostal: Number,
    telephone: Number,
    email: mongoose.SchemaTypes.Email, required: true,
    password: mongoose.Mixed, required: true
});

const user = mongoose.model('User', userSchema);

module.exports = user;