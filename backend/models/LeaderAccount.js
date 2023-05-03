import mongoose from "mongoose";

const { Schema } = mongoose;

const leaderAccountSchema = new Schema({
  leaderId: {
    type: Schema.Types.ObjectId,
    ref: "Account",
  },
  teamsManagement: {
    type: [Object],
  },
});

export default mongoose.model("LeaderAccount", leaderAccountSchema);
