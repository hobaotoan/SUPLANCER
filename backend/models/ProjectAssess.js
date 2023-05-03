import mongoose from "mongoose";
const { Schema } = mongoose;

const projectAssessSchema = new Schema({
    freelancerId: {
        type: Schema.Types.ObjectId,
        ref: "Account",
    },
    projectId: {
        type: Schema.Types.ObjectId,
        ref: "Account",
    },
    points: {
        type: [Number],
    },
    message: {
        type: String,
        default: "Không có nhận xét",
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
});

export default mongoose.model("projectAssess", projectAssessSchema);
