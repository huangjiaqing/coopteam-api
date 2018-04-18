import { controller, get } from '../lib/decorator';
import { addOrg } from '../service/organization'

@controller('/api/v0/organization')
export class OrgController {

  @get('/')
  async getOrg(ctx, next) {
    console.log('执行到这儿啦');
    ctx.body = '你好';
  }

  @get('/addOrg')
  async addOrg(ctx, next) {
    const res = await addOrg();
    ctx.body = res;
  }
}