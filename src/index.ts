import serverless from 'serverless-http';
import Koa from 'koa';

const app = new Koa();

app.use(async (ctx: any) => {
  ctx.body = 'Hello World!!!';
});

export const handler = serverless(app);
