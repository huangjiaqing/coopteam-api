import mongoose from 'mongoose';
const Stage = mongoose.model('Stage');

export const addStage = async () => {

  const stage = new Stage({
    name: '待处理'
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