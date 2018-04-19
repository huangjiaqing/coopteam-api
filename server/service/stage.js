import mongoose from 'mongoose';
import R from 'ramda';
const Stage = mongoose.model('Stage');

export default {
  /**
   * 创建阶段
   * @param {object} data 
   */
  async createStage(data) {
    const { order=null } = data;
    let stages = await Stage.find({
       _projectId: data._projectId
    });
    let stage = {
      ...data,
      _stageId: mongoose.Types.ObjectId()
    };
    if (!order) {
      let stageCount = stages.length;
      stage.order = stageCount+1;
    }
    if (order && R.is(Number, order)) {
      stages.forEach(async (item) => {
        if (R.gte(item.order, order)) {
          let newOrder = item.order+1;
          await Stage.findOneAndUpdate({
            _stageId: item._stageId
          }, {
            order: newOrder
          });
        }
      });
    } else {
      return {
        message: '创建阶段失败'
      }
    }

    return await new Stage(stage).save();
  },

  
};