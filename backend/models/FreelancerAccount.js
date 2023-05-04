import mongoose from "mongoose";
const { Schema } = mongoose;

const freelancerAccountSchema = new Schema({
  freelancerId: {
    type: Schema.Types.ObjectId,
    ref: "Account",
  },
  projectId: {
    type: Schema.Types.ObjectId,
    ref: "Account",
  },
  domain: {
    type: String,
  },
});

export default mongoose.model("FreelancerAccount", freelancerAccountSchema);
