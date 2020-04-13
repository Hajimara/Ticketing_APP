import mongoose, { Schema } from "mongoose";
import User from "./user";
import Ticket from "./ticket";

const PaymentSchema = new Schema({
    price : String,
    status: String,
    log: String,
    insertDate: {
        type: Date,
        default: Date.now
      },
    ticket: Ticket.schema,
    user: User.schema
})

const Payment = mongoose.model('Payment',PaymentSchema);

export default Payment;

