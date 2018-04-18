import { controller, get } from '../lib/decorator';
import { addProject } from '../service/project';

@controller('/api/v0/project')
class ProjectController {

  @get('/addProject')
  async addProject(ctx, next) {
    const res = await addProject();
    ctx.body = res;
  }
}