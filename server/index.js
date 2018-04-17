import Koa from 'koa';
import R from 'ramda';
import { resolve } from 'path';

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

async function start() {
  const app = new Koa();
  await useMiddlewares(app);

  app.listen(4455, () => {
    console.log('「 Coopteam 」request post is starting at port 4455')
  });
};

start();
