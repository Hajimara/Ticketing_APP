import mongoose, { Schema } from "mongoose";
import User from "./user";

const TicketSchema = new Schema({
    ticketNumber:String,
    movieId:String,
    movieTitle:String,
    seat:[String],
    peopleNum: String,
    insertDate:{
        type: Date,
        default: Date.now
      },
    delete:Date,
    user:User.schema
});

const Ticket = mongoose.model('Ticket',TicketSchema)

export default Ticket;

