import { controller, get, post, required } from '../lib/decorator';
import { createProject, getProjects } from '../service/project';

@controller('/api/v0/project')
class ProjectController {

  @get('/')
  @required({
    query: ['_organizationId', '_userId']
  })
  async getProjects(ctx) {
    const { _organizationId, _userId } = ctx.query;
    const res = await getProjects(_organizationId, _userId);
    ctx.body = res;
  }

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