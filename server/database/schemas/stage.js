import mongoose, { Schema } from 'mongoose';

const stageSchema = new Schema({
  _projectId: Schema.Types.ObjectId,
  _creatorId: Schema.Types.ObjectId,
  name: String,
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
});

mongoose.model('Stage', stageSchema);