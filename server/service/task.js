import mongoose from 'mongoose';

const Task = mongoose.model('Task');

export const addTask = async () => {

  const task = new Task({
    content: '与北控清洁能源项目进行对接'
  });

  try {
    await task.save();
    return {
      message: '创建任务成功'
    }
  } catch(e) {
    throw e
    return {
      message: '创建任务失败'
    }
  }
};