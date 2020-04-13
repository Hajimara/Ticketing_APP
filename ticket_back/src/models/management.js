import mongoose, { Schema } from "mongoose";
import Seat from "./seat";

mongoose.set('debug', true);

const ManagementSchema = new Schema({
  movieId: String,
  price: String,
  seat: Seat.schema,
  insertDate: {
    type: Date,
    default: Date.now
  }
});

ManagementSchema.methods.addMovieDate = function(date){
    this.movieDate.push(date);
    return this.save();
}

const Management = mongoose.model("Management", ManagementSchema);

export default Management;
