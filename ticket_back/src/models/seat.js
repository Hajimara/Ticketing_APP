import mongoose, { Schema } from "mongoose";

const SeatSchema = new Schema({
  totalSeat: Number,
  finishSeat: Number,
  movieDate: Date,
  insertDate: {
    type: Date,
    default: Date.now,
  },
});

const Seat = mongoose.model('Seat',SeatSchema);

export default Seat;
