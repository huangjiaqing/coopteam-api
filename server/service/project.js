import mongoose from 'mongoose';
import R from 'ramda';

const Project = mongoose.model('Project');

/**
 * 获取某个企业下，我参与的所有项目
 * @param {string} _organizationId 
 * @param {string} _userId 
 */
export const getProjects = async (_organizationId, _userId) => {
  let projects = [];
  let projectsForOrgId = await Project.find({
    _organizationId
  });
  if (!projectsForOrgId.length) {
    return []
  }
  for (let project of projectsForOrgId) {
    for (let memberId of project.members) {
      if (R.equals(memberId.toString(), _userId)) {
        projects.push(project);
        break;
      }
    }
  }
  return projects;
};

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