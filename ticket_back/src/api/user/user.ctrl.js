import mongoose from "mongoose";
import Ticket from "../../models/ticket";
import Payment from "../../models/payment";

const { ObjectId } = mongoose.Types;

export const getUserTicket = async (ctx) => {
  const { _id } = ctx.request.body.user;
  const { pagination } = ctx.request.body;
  if (pagination < 1) {
    ctx.status = 400;
    return;
  }

  if (!ObjectId.isValid(_id)) {
    ctx.status = 400;
    return;
  }
  try {
    const count = await Ticket.find({ user_id: _id }).countDocuments();
    const ticket = await Ticket.find({ user_id: _id })
      .sort({ insertDate: -1 })
      .limit(10)
      .skip((pagination - 1) * 10)
      .exec();
    const payment = await Payment.find({ user_id: _id })
      .sort({ insertDate: -1 })
      .limit(10)
      .skip((pagination - 1) * 10)
      .exec();

    if ([ticket, payment] === null || [ticket, payment].includes([])) {
      ctx.status = 404;
      return;
    }

    ctx.body = { ticket, payment, count };
  } catch (error) {
    ctx.throw(500, error);
  }
};
