import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const mangaSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true
    },
    description: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    genres: {
      type: [String],
      required: true,
      enum: [
        'Action',
        'Comedy',
        'Drama',
        'Erotica',
        'Fantasy',
        'Horror',
        'Mystery',
        'Romance',
        'Science Fiction',
        'Sport',
        'Adventure',
        'Super Naturel',
        'Music',
        'Ecchi',
        'Seinen',
        'Slice of life'
      ]
    },
    published: {
      type: Date,
      required: true
    },
    authors: {
      type: [Schema.Types.ObjectId],
      required: true,
      ref: 'Author'
    },
    likes: {
      type: Number,
      default: 0
    },
    dislike: {
      type: Number,
      default: 0
    },
    isCompleted: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  { timestamps }
);

export default mongoose.model('Manga', mangaSchema);
