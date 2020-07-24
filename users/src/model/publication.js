import mongoose, {
    Schema
} from 'mongoose';
import bcrypt from 'bcrypt';
require('mongoose-type-email');

const publicationSchema = new mongoose.Schema({
    titre: {
        type: String,
        limit: 100,
        required: true
    },
    prix: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    ville: {
        type: String,
        required: true
    },
    images: {
        type: Schema.ObjectId,
        ref: 'Images'
    },
    isActive: {
        type: Boolean,
        default: false
    },
    details: {
        createdAt: {
            type: Date,
            default: Date.now
        },    
        updatedAt: {
            type: Date
        },   
        publishedAt: {
            type: Date
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