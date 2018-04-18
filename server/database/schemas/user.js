import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
  name: String,
  password: {
    type: String,
    unique: true,
  },
  avatarUrl: String,
  email: String,
  meta: {
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    updatedAt: {
      type: Date,
      default: Date.now(),
    },
  },
  _userId: Schema.Types.ObjectId,
});

mongoose.model('User', userSchema);