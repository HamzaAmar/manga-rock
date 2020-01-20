import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const authorSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true,
    enum: ['Male', 'Female']
  },
  image: {
    type: String
  }
});

export default mongoose.model('Author', authorSchema);
