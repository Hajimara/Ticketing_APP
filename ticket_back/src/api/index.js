import Router from "koa-router";
import auth from "./auth"
import ticket from "./ticket/index";
import management from "./management/index";
import user from "./user/index";
import payment from "./payment/index";

const api = new Router();

api.use("/auth",auth.routes());

api.use("/ticket",ticket.routes());

api.use("/management",management.routes());

api.use("/user",user.routes());

api.use("/payment",payment.routes());

// api.get("/test", ctx => {
//   ctx.body = "test 성공";
// });

export default api;