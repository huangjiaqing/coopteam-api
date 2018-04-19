import { controller, get, post, required } from '../lib/decorator';
import { createProject } from '../service/project';

@controller('/api/v0/project')
class ProjectController {

  @post('/create')
  @required({
    body: [
      'name',
      '_createId',
      '_organizationId'
    ]
  })
  async create(ctx) {
    const {
      name,
      _createId,
      _organizationId,
      description='',
      logo='',
    } = ctx.request.body;
    const res = await createProject({
      name,
      _createId,
      _organizationId,
      description,
      logo
    });
    ctx.body = res;
  }
}