import { controller, get, post, put, del, required } from '../lib/decorator';
import Task from '../service/task'

@controller('/api/v0/task')
class TaskController {

  @get('/')
  @required({
    query: ['_stageId']
  })
  async getTasks(ctx, next) {
    const { _stageId } = ctx.query;
    const res = await Task.getTasks(_stageId);

    return (ctx.body = res);
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

  @put('/update/:_taskId')
  @required({
    params: ['_taskId'],
  })
  async update(ctx) {
    const data = ctx.request.body;
    const { _taskId } = ctx.params;
    const res = await Task.updateTask(_taskId, data);

    return (ctx.body = res);
  }

  @del('/delete/:_taskId')
  @required({
    params: ['_taskId']
  })
  async delete(ctx) {
    const { _taskId } = ctx.params;
    const res = await Task.deleteTask(_taskId);

    return (ctx.body = res);
  }

}