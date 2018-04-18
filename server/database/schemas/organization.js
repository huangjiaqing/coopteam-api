import mongoose from 'mongoose';

const Schema = mongoose.Schema;

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

orgSchema.static = {

  /**
   * 获取我为拥有者的企业列表
   * @param {*ObjectId} _userId 
   * @return {*Array} orgs
   */
  findMyOrgs(_userId) {

  },

  
};

mongoose.model('Organization', orgSchema);