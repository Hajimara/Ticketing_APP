import mongoose, { Schema } from "mongoose";
import User from "./user";
import Ticket from "./ticket";

const PaymentSchema = new Schema({
  user_id: mongoose.Types.ObjectId,
  ticket_id: mongoose.Types.ObjectId,
  price: String,
  status: String,
  log: String,
  insertDate: {
    type: Date,
    default: Date.now,
  },
});

const Payment = mongoose.model('Payment',PaymentSchema);

export default Payment;

