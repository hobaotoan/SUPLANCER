import mongoose from "mongoose";
const { Schema } = mongoose;

const formRegisterSchema = new Schema({
    freelancerId: {
        type: Schema.Types.ObjectId,
        ref: "Account",
    },
    projectId: {
        type: Schema.Types.ObjectId,
        ref: "Account",
    },
    technology: {
        type: String,
        default: "No Language",
    },
    projects: {
        type: String,
        default: "No Project",
    },
    message: {
        type: String,
        default: "No Message",
    },
});

export default mongoose.model("FormRegister", formRegisterSchema);
