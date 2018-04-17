import { controller, get, post, put } from '../lib/decorator';
import { checkPassword } from '../service/admin';

@controller('/api/v0/user')
export class UserController {

  @post('/')
  async checkPassword (ctx, next) {
    const { email, password } = ctx.request.body;
    const matchData = await checkPassword(email, password);

    if (!matchData.user) {
      return (ctx.body = {
        success: false,
        err: '用户不存在'
      });
    }

    if (matchData.match) {
      return (ctx.body = {
        success: true
      });
    }

    return (ctx.body = {
      success: false,
      err: '密码不正确'
    });
  }
}