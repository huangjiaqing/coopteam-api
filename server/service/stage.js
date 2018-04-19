import mongoose from 'mongoose';
// import R from 'ramda';
const Stage = mongoose.model('Stage');

export default {

  /**
   * 创建阶段
   * @param {object} data 
   */
  async createStage(data) {
    const { order=null } = data;
    if (!order) {
      let stages = await Stage.find({
        _projectId: data._projectId
      });
      let stageCount = stages.length;
      data.order = stageCount+1;
    }

    let stage = new Stage({
      ...data,
      _stageId: mongoose.Types.ObjectId()
    });

    return await stage.save();
  },

  
};