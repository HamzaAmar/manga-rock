import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const memberModel = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    password: {
      type: String,
      required: true,
      trim: true,
      minlength: 6
    },
    image: String,
    favorite: {
      type: [Schema.Types.ObjectId],
      ref: 'Manga',
      default: []
    },
    isActive: {
      type: Boolean,
      default: true
    },
    isVerified: {
      type: Boolean,
      default: false
    },
    resetToken: String,
    resetTokenExpired: Date
  },
  { timestamps: true }
);

export default mongoose.model('Member', memberModel);
