import mongoose, {
    Schema
} from 'mongoose';
import bcrypt from 'bcrypt';
require('mongoose-type-email');

const publicationSchema = new mongoose.Schema({
    civilite: {
        type: Number,
        required: true
    },
    nom: {
        type: String,
        required: true
    },
    prenom: {
        type: String,
        required: true
    },
    pseudo: {
        type: String,
        required: true
    },
    password: {
        type: mongoose.Mixed,
        required: true
    },
    isActive: {
        type: Boolean,
        default: false
    },
    contact: {
        adresse: {
            type: String
        },
        codePostal: {
            type: Number
        },
        telephone: {
            type: Number
        },
        email: {
            type: mongoose.SchemaTypes.Email,
            required: true,
            unique: true
        },
    },

    createdAt: {
        type: Date,
        default: Date.now
    },

    publication: {
        type: Schema.ObjectId,
        ref: 'Publication'
    },
    details: {
        recommandations: {
            Type: Number,
            default: 0
        },
        photo: {
            Type: String,
            default: 'https://www.fillmurray.com/64/64'
        },
    }

});

userSchema.pre('save', function (next) {

});

module.exports = mongoose.model('Publication', publicationSchema);