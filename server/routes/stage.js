import { controller, get } from '../lib/decorator';
import { getStage, addStage } from '../service/stage';

@controller('/api/v0/stage')
class StageController {

  @get('/')
  async getStage(ctx) {
    const res = await getStage();
    console.log(res);
    ctx.body = res;
  }

  @get('/addStage')
  async addStage(ctx) {
    const res = await addStage();
    ctx.body = res;
  }
}