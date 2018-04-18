import { controller, get } from '../lib/decorator';
import { addStage } from '../service/stage';

@controller('/api/v0/stage')
class StageController {

  @get('/')
  async getStage(ctx) {
    ctx.body = '你好呀'
  }

  @get('/addStage')
  async addStage(ctx) {
    const res = await addStage();
    ctx.body = res;
  }
}