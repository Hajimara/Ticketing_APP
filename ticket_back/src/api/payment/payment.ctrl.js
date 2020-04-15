import Payment from "../../models/payment";
import Ticket from "../../models/ticket";
import Management from "../../models/management";

export const paymentConfirm = async (ctx) => {
  if (
    ctx.request.body === null ||
    ctx.request.body === undefined ||
    ctx.request.body === ""
  ) {
    ctx.status = 400;
    return;
  }
  const { ticketData, priceData, user, managementItem } = ctx.request.body;
  const { _id: user_id } = user;
  const {
    selectSeat: seat,
    finishPrice: price,
    finishPrice,
    peopleCounter: peopleNum,
  } = priceData;
  const { movieId, endTime, title: movieTitle } = ticketData;
  const theatre = ticketData.theatre + " " + ticketData.theatreDetail;
  const ticketDate = ticketData.ticketDate + " " + endTime;
  const ticketNumber = user_id + new Date().getTime();
  const { seat: seatItem , _id: managementId, } = ticketData.managementItem;
  const {totalSeat, finishSeat, movieDate,seatArray} = seatItem;
  const item = parseInt(finishSeat)-parseInt(peopleNum);
  let sa = '';
  if(seatArray===undefined){
    sa = seat;
  }else{
    sa = seatArray+','+seat;
  }
    if(item < 0){
    ctx.status= 400;
    return;
  }
  const query = {
    seat : {
      totalSeat,
      finishSeat: item,
      seatArray: String(sa),
      movieDate
    }
  }
  try {
    await Management.findByIdAndUpdate(managementId,query).exec();
    
    const ticket = new Ticket({
      user_id,
      ticketNumber,
      movieId,
      movieTitle,
      theatre,
      seat,
      finishPrice,
      peopleNum,
      ticketDate,
      insertDate: new Date(),
    });
    await ticket.save(function (err, item) {
      const log = `영화 ${movieTitle}로 결제 진행 완료되었습니다.`;
      const status = "SUCCEESS";
      const payment = new Payment({
        user_id,
        ticket_id: item._id,
        price,
        status,
        log,
        insertDate: new Date(),
      });
      payment.save();
    });
    
    ctx.body = 'success'
  } catch (error) {
    ctx.throw(500, error);
    ctx.body = 'failure'
  }
};
