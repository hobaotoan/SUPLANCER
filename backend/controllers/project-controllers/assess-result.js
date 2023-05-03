import ProjectAssess from "../../models/ProjectAssess.js";
import { ObjectId } from "mongodb";
const assessResult = async function (req, res, next) {
    const { freelancerId, points, message } = req.body;

    try {
        const findFreelancer = await ProjectAssess.findOneAndUpdate(
            { freelancerId: ObjectId(freelancerId) },
            {
                points,
                message,
            },
            { new: true }
        );

        return res.status(201).json({
            status: true,
            message: "Đánh giá kết quả thành công!",
            findFreelancer,
        });
    } catch (error) {
        next(error);
    }
};
export default assessResult;
