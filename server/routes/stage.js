import { controller, get, post, put, del, required } from '../lib/decorator';
import Stage from '../service/stage';

@controller('/api/v0/stage')
class StageController {

  @post('/create')
  @required({
    body: ['name', '_projectId', '_createId']
  })
  async create(ctx) {
    const data = ctx.request.body;
    const res = await Stage.createStage(data);
    return (ctx.body = res);
  }
}