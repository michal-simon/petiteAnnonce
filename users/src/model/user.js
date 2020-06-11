import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
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
userSchema.pre('save', function  (next) {
    if (this.password && this.isModified('password'));
    bcrypt.hashSync(this.password, 10, function(err, hash){
        this.password = hash;
    });
    next();
});

const user = mongoose.model('User', userSchema);

module.exports = user;