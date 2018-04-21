import mongoose from 'mongoose';

const Task = mongoose.model('Task');

export default {
  /**
   * 创建任务
   * @param {string} data 
   */
  async createTask(data) {
    const tasksForStage = await Task.find({
      _stageId: data._stageId
    })
    const task = new Task({
      ...data,
      order: tasksForStage.length + 1,
      _taskId: mongoose.Types.ObjectId(),
      _executorId: data._executorId ? data._executorId : data._creatorId,
    });
    return await task.save();
  },

  
};