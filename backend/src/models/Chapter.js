import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const memberModel = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    number: {
      type: Number,
      required: true
    },
    view: {
      type: Number,
      default: 0
    },
    images: {
      type: [String]
    },
    manga: {
      type: Schema.Types.ObjectId,
      required: true
    }
  },
  { timestamps: true }
);

export default mongoose.model('Member', memberModel);
