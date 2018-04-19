import { controller, get, post, required } from '../lib/decorator';
import { createOrg } from '../service/organization'

@controller('/api/v0/organization')
export class OrgController {

  @get('/:_createId')
  @required({
    query: ['_createId']
  })
  async getMyOrgs(ctx, next) {
    ctx.body = {
      message: '你好啊'
    };
  }

  @post('/create')
  @required({
    body: ['name', '_createId']
  })
  async create(ctx, next) {
    const { name, _createId } = ctx.request.body;
    const res = await createOrg(name, _createId);

    ctx.body = res;
  }
}