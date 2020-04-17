import Router from 'koa-router';
import * as userCtrl from './user.ctrl';
const user = Router();

user.post(`/getUserTicket`,userCtrl.getUserTicket);

export default user;