import mongoose from 'mongoose';

const Organization = mongoose.model('Organization');

export const addOrg = async () => {

  const org = new Organization({
    name: '油车青年',
    projectIds: [],
  });

  try {
    await org.save();
    return {
      message: '新增企业成功'
    }
  } catch (e) {
    return {
      err: '新增企业失败'
    }
  }
};