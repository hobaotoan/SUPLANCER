import mongoose from "mongoose";

const { Schema } = mongoose;

const adviserAccountSchema = new Schema({
  adviserId: {
    type: Schema.Types.ObjectId,
    ref: "Account",
  },
  domainsManagement: {
    type: [Object],
  },
});

export default mongoose.model("AdviserAccount", adviserAccountSchema);
