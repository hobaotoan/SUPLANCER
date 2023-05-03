import mongoose from "mongoose";
const { Schema } = mongoose;

const leaderAccessSchema = new Schema({
  freelancerId: {
    type: Schema.Types.ObjectId,
    ref: "Account",
  },
  points: {
    type: [Number],
  },
});

export default mongoose.model("LeaderAccess", leaderAccessSchema);
