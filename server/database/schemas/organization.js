import mongoose, { Schema } from 'mongoose';

const orgSchema = new Schema({
  name: String,
  projectIds: Array,
  isDeleted: {
    type: Boolean,
    default: false
  },
  _createId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  meta: {
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    updatedAt: {
      type: Date,
      default: Date.now(),
    },
  },
});

orgSchema.methods = {

  /**
   * 获取我为拥有者的企业列表
   * @param {*ObjectId} _userId 
   * @return {*Array} orgs
   */
  findMyOrgs(_userId) {

  },

  
};

mongoose.model('Organization', orgSchema);