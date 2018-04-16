import Koa from 'koa';
import { resolve } from 'path';
import R from 'ramda';

const MIDDLEWARES = ['common', 'router'];

const useMiddlewares = (app) => {
  R.map(
    R.compose(
      R.forEachObjIndexed(
        initWith => initWith(app)
      ),
      require,
      name => resolve(__dirname, `./middlewares/${name}`)
    )
  )(MIDDLEWARES);
};

(async () => {

  const app = new Koa();
  await useMiddlewares(app);

  app.listen(4455, () => {
    console.log('「 Coopteam 」request post is starting at port 4455')
  });
})();
