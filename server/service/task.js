import mongoose from 'mongoose';
import R from 'ramda';

const Task = mongoose.model('Task');

export default {
  /**
   * 获取任务详情
   * @param {string} _taskId 
   */
  async getTaskInfo(_taskId) {
    return (
      Task.findOne({_taskId})
    );
  },

  /**
   * 获取某个阶段下的所有任务
   * @param {string} _stageId 
   */
  async getTasks(_stageId) {
    return (
      this.sortTasks(await Task.find({_stageId}))
    );
  },

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

  /**
   * 排序任务列表
   * @param {Array} tasks
   */
  sortTasks: (tasks=[]) => (
    R.compose(
      R.addIndex(R.map)(
        (task, idx) => {
          task.order = idx + 1;
          return task;
        }
      ),
      R.sort((a, b) => (a.order - b.order))
    )(tasks)
  ),

  /**
   * 更新任务
   * @param {string} _taskId 
   * @param {string} data 
   */
  async updateTask(_taskId, data) {
    return (
      Task.findOneAndUpdate({
        _taskId
      }, { ...data })
    );
  },

  /**
   * 删除任务
   * @param {string} _taskId 
   */
  async deleteTask(_taskId) {
    return (
      Task.findOneAndRemove({_taskId})
    );
  },
}