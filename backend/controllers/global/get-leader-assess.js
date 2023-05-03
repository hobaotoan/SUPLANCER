import LeaderAccess from "../../models/LeaderAccess.js";
import { ObjectId } from "mongodb";

const getLeaderAssess = async (req, res, next) => {
  const { freelancerId } = req.query;
  try {
    const leaderAssess = await LeaderAccess.findOne({
      freelancerId: ObjectId(freelancerId),
    });
    return res.json({
      status: true,
      message: "Lấy đánh giá của giảng viên thành công!",
      points: leaderAssess ? leaderAssess.points : [],
    });
  } catch (error) {
    next(error);
  }
};

export default getLeaderAssess;
