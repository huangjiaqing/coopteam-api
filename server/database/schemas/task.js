import mongoose, { Schema } from 'mongoose';

const taskSchema = new Schema({
  content: {
    type: String,
    default: null
  },
  note: {
    type: String,
    default: null
  },
  startDate: {
    type: Date,
    default: null
  },
  dueDate: {
    type: Date,
    default: null
  },
  priority: {
    type: Number,
    default: 0
  },
  isDone: {
    type: Boolean,
    default: false,
  },
  pos: {
    type: Number,
    default: 0,
  },
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
  involveMembers: [
    { type: Schema.Types.ObjectId,}
  ],
  _creatorId: {
    type: Schema.Types.ObjectId
  },
  _executorId: {
    type: Schema.Types.ObjectId,
  },
  _projectId: {
    type: Schema.Types.ObjectId,
  },
  _taskId: {
    type: Schema.Types.ObjectId,
  },
});

mongoose.model('Task', taskSchema);