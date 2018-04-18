import mongoose from 'mongoose';
const Stage = mongoose.model('Stage');

export const getStage = async () => {

  try {
    const res = await Stage.findOne({_projectId: '5ad70beb9f4e272553574433'});
    return res;
  } catch (e) {
    throw e
  }
};

export const addStage = async () => {

  const stage = new Stage({
    _projectId: new mongoose.Types.ObjectId,
    name: '进行中'
  });

  try {
    await stage.save();
    return {
      message: '新增列表成功'
    };
  } catch(e) {
    console.error(e);
    return {
      err: '新增列表失败'
    };
  }
};