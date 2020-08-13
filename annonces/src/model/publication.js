import mongoose, {
  Schema
} from 'mongoose';

import slugify from 'utils/slugify';

require('mongoose-type-email');

const publicationSchema = new mongoose.Schema({
  titre: {
    type: String,
    limit: 100,
    required: true
  },
  slug: {
    type: String
  },
  prix: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  etat: {
    type: Schema.ObjectId,
    ref: 'Etat'
  },
  categorie: {
    type: Schema.ObjectId,
    ref: 'Categorie'
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
  Statuts: {
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
    publishedBy: {
      type: Schema.ObjectId,
      ref: 'User'
    }
  }

});

publicationSchema.pre('save', function(next) {
  this.slug = slugify(this.titre);
  next();
});

module.exports = mongoose.model('Publication', publicationSchema);
