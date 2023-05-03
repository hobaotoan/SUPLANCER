import mongoose from "mongoose";

const { Schema } = mongoose;

const projectAccountSchema = new Schema({
    projectId: {
        type: Schema.Types.ObjectId,
        ref: "Account",
    },
    address: {
        type: String,
    },
    message: {
        type: String,
    },
});

export default mongoose.model("ProjectAccount", projectAccountSchema);
