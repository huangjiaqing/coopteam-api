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

  @post('/move')
  @required({
    body: ['_projectId', '_stageId', 'order', ]
  })
  async move(ctx) {
    const data = ctx.request.body;
    try {
      await Stage.moveStage(data);
      return (ctx.body = {
        success: true,
        message: '移动列表成功'
      });
    } catch(e) {
      return (ctx.body = {
        success: false,
        err: '无法移动列表'
      })
    }
  }
}