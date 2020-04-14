import Router from 'koa-router';
import * as paymentCtrl from './payment.ctrl';

const payment = Router();

payment.post('/paymentConfirm',paymentCtrl.paymentConfirm);

export default payment;