import mongoose from 'mongoose';
const Stage = mongoose.model('Stage');

export default {

  /**
   * 创建阶段
   * @param {object} data 
   */
  async createStage(data) {
    const stage = new Stage({
      ...data,
      _stageId: mongoose.Types.ObjectId()
    });

    return await stage.save();
  },
};