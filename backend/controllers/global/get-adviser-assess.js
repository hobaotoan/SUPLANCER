import AdviserAccess from "../../models/AdviserAccess.js";
import { ObjectId } from "mongodb";

const getAdviserAssess = async (req, res, next) => {
  const { freelancerId } = req.query;
  try {
    const adviserAssess = await AdviserAccess.findOne({
      freelancerId: ObjectId(freelancerId),
    });
    return res.json({
      status: true,
      message: "Lấy đánh giá của giảng viên thành công!",
      points: adviserAssess ? adviserAssess.points : [],
    });
  } catch (error) {
    next(error);
  }
};

export default getAdviserAssess;
