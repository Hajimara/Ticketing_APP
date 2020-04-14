import Router from "koa-router";
import * as authCtrl from "./auth.ctrl"

const auth = Router();

auth.post("/register",authCtrl.register);
auth.post("/login",authCtrl.login);
auth.get("/check",authCtrl.check);
auth.post("/logout",authCtrl.logout);
auth.post('/userInfo',authCtrl.userInfo)


export default auth;