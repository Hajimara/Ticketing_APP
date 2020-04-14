import mongoose, { Schema } from "mongoose";
import User from "./user";

const TicketSchema = new Schema({
  user_id: mongoose.Types.ObjectId,
  ticketNumber: String,
  movieId: String,
  movieTitle: String,
  theatre: String,
  seat: [String],
  finishPrice: String,
  peopleNum: String,
  ticketDate:String,
  insertDate: {
    type: Date,
    default: Date.now,
  },
  delete: Date,
});

const Ticket = mongoose.model('Ticket',TicketSchema)

export default Ticket;

