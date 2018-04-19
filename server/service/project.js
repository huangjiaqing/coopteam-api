import mongoose from 'mongoose';

const Project = mongoose.model('Project');

/**
 * 创建项目
 * @param {object} param
 */
export const createProject = async ({
  name,
  logo,
  description,
  _createId,
  _organizationId
}) => {
  const project = new Project({
    name,
    description,
    logo,
    _createId,
    _organizationId,
    _projectId: mongoose.Types.ObjectId(),
    members: [_createId],
  });

  return await project.save();
};