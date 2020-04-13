import Router from 'koa-router';
import * as managementCtrl from './management.ctrl';

const management = Router();

management.post('/dataPush',managementCtrl.dataPush);

management.post('/movieDatePush',managementCtrl.movieDatePush);

management.get(`/movieId/:movieId`,managementCtrl.movieId);

export default management;