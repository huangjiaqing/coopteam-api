import mongoose from 'mongoose';

const Project = mongoose.model('Project');

export const addProject = async () => {

  const project = new Project({
    name: '油车项目启动',
    description: '这是一个很有潜力的项目，可以赚大钱',
    logo: ''
  });

  try {
    const res = await project.save();
    console.log('保存project的res： ', res);
    return {
      message: '新增项目成功'
    }
  } catch (e) {
    return {
      err: '新增项目失败'
    }
  }
};