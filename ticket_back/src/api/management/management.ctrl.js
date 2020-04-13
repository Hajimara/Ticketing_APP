import Management from "../../models/management";
import mongoose from "mongoose";

const { ObjectId } = mongoose.Types;

export const dataPush = async (ctx) => {
  const { movieId, price } = ctx.request.body;
  const { totalSeat, finishSeat, movieDate } = ctx.request.body.seat;
  if (!ctx.request.body) {
    ctx.status = 400;
    ctx.body = {
      message: "데이터가 존재하지 않습니다.",
    };
    return;
  }
  console.log(ctx.request.body);

  const management = new Management({
    movieId,
    price,
    seat: {
      totalSeat,
      finishSeat,
      movieDate,
    },
  });
  console.log(management);

  try {
    await management.save();
    ctx.body = management;
  } catch (error) {
    ctx.throw(500, error);
  }
};

export const movieDatePush = async (ctx) => {
  const { _id } = ctx.request.body;
  if (!ObjectId.isValid(_id)) {
    ctx.status = 400;
    return;
  }
  console.log(ctx.request.body);

  try {
    const movieDate = await Management.findByIdAndUpdate(
      _id,
      ctx.request.body,
      {
        new: true,
      }
    ).exec();

    if (!movieDate) {
      ctx.status = 404;
      return;
    }
    ctx.body = movieDate;
  } catch (error) {
    ctx.throw(500, error);
  }
};

export const movieId = async (ctx) => {
  console.log('movieId gogogo');
  
  const { movieId } = ctx.params;
  var stringMovieId = String(movieId);
  if (!movieId) {
    ctx.status = 400;
    return;
  }
//   const query = {
//     ...(movieId ? { movieId: stringMovieId } : {}),
//   }; 
  try {
    const management = await Management.find({ movieId: stringMovieId }).exec();

    ctx.body = management;
    if (!management) {
      ctx.status = 404;
      return;
    }
  } catch (error) {
    ctx.throw(500, error);
  }
};
