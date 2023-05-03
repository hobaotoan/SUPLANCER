import ProjectAssess from "../../models/ProjectAssess.js";
import { ObjectId } from "mongodb";
const getProjectAssess = async (req, res, next) => {
    const { freelancerId } = req.query;
    try {
        const result = await ProjectAssess.findOne({
            freelancerId: ObjectId(freelancerId),
        });
        return res.json({
            status: true,
            message: "Lấy đánh giá của đơn vị thực tập thành công!",
            result,
        });
    } catch (error) {
        next(error);
    }
};

export default getProjectAssess;
