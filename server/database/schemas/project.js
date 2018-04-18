import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const projectSchema = new Schema({
  name: String,
  _organizationId: Schema.Types.ObjectId,
  description: String,
  logo: String,
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

mongoose.model('Project', projectSchema);