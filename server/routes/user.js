import { controller, get, post } from '../lib/decorator';
import { checkPassword } from '../service/user';

@controller('/api/v0/user')
class UserController {

  @post('/login')
  async login(ctx, next) {
    const { email, password } = ctx.request.body;
    const matchData = await checkPassword(email, password);

    if (!matchData.user) {
      return (ctx.body = {
        success: false,
        err: '用户名或密码输入错误',
      });
    }

    if (matchData.user) {
      ctx.session.user = {
        email: matchData.user.email,
        username: matchData.user.name,
        _userId: matchData.user._userId,
      };

      return (ctx.body = {
        success: true,
        message: '登录成功',
        user: matchData.user,
      });
    }

    return (ctx.body = {
      success: false,
      err: '用户名或密码输入错误'
    });
  }
}