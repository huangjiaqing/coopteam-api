import { controller, get, post, put, del, required } from '../lib/decorator';
import Task from '../service/task'

@controller('/api/v0/task')
class TaskController {

  @get('/')
  async getTask(ctx, next) {
    ctx.body = '这是任务哦';
  }

  @post('/create')
  @required({
    body: ['content', '_createId', '_stageId']
  })
  async create(ctx) {
    const data = ctx.request.body;
    const res = await Task.createTask(data);

    return (ctx.body = res);
  }
}