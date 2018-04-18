import { controller, get } from '../lib/decorator';
import { addTask } from '../service/task'

@controller('/api/v0/task')
class TaskController {

  @get('/')
  async getTask(ctx, next) {
    ctx.body = '这是任务哦';
  }

  @get('/addTask')
  async addTask(ctx, next) {
    const res = await addTask();
    ctx.body = res;
  }
}