import mongoose from 'mongoose';

const Organization = mongoose.model('Organization');

/**
 * 创建企业
 * @param {string} name 
 * @param {*objectId} _createId 
 */
export const createOrg = async (name, _createId) => {

  const org = new Organization({
    name,
    _createId,
    _organizationId: mongoose.Types.ObjectId(),
  });

  return await org.save()
};

