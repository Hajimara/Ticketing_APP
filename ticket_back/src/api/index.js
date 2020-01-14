import Router from "koa-router";
import auth from "./auth"

const api = new Router();

api.use("/auth",auth.routes());

// api.get("/test", ctx => {
//   ctx.body = "test 성공";
// });

export default api;