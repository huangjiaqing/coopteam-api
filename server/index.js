import Koa from 'koa';
import bodyParser from 'koa-bodyParser';
// import router from './router';

const app = new Koa();

app.use(bodyParser());

// app.use(router.routes());

app.listen(4455, () => {
  console.log('「 Coopteam 」request post is starting at port 4455')
});
