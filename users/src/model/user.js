import mongoose, {
    Schema
} from 'mongoose';
import bcrypt from 'bcrypt';
require('mongoose-type-email');

const userSchema = new mongoose.Schema({
    civilite: {
        type: Number,
        required: [true, 'Vous un homme ou une femme']
    },
    nom: {
        type: String,
        required: [true, 'Quel est votre nom']
    },
    prenom: {
        type: String,
        required: [true, 'Quel est votre prénom']
    },
    pseudo: {
        type: String,
        required: [true, 'Votre pseudo est requis']
    },
    password: {
        type: mongoose.Mixed,
        required: [true, 'Veuillez à renseigner un mot de passe valide'],
        min: 8,
        max: 14,
        validate: {
            validator: function(v) {
                return /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/.test(v)
            },
            message: props => `Votre mot de passe ne respecter pas les indications de sécurité`
        }
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
            type: String
        },
        telephone: {
            type: Number,
            validate: function(v) {
                return /^(0[1-9]{1}[0-9]{8}|\+?33[1-9][0-9]{8})$/.test(v)
            },
            message: props => `${props.value} ce numéro de téléphone n'est pas correct`,
            required: [true, 'Veuillez indiquer un numéro de téléphone valide']
        },
        email: {
            type: mongoose.SchemaTypes.Email,
            unique: true,
            validate: {
                validator: function (v) {
                    return /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/.test(v.trim());
                },
                message: props => `${props.value} ce numéro n'est pas valide`
            },
            required: [true, `l'email est requis`],
        },
    },

    createdAt: {
        type: Date,
        default: Date.now
    },

    publications: {
        type: Schema.ObjectId,
        ref: 'Publication'
    },
    details: {
        recommandations: {
            type: Number,
            default: 0
        },
        photo: {
            type: String,
            default: 'https://www.fillmurray.com/64/64'
        },
    }

});

userSchema.pre('save', function (next) {
    if (this.password && this.isModified('password'));
    bcrypt.hashSync(this.password, 10, function (err, hash) {
        this.password = hash;
    });
    next();
});

module.exports = mongoose.model('User', userSchema);