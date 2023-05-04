import mongoose from "mongoose";
const { Schema } = mongoose;

const adviserAccessSchema = new Schema({
  freelancerId: {
    type: Schema.Types.ObjectId,
    ref: "Account",
  },
  points: {
    type: [Number],
  },
});

export default mongoose.model("AdviserAccess", adviserAccessSchema);
