import LeaderAssess from "../../models/LeaderAccess.js";
import { ObjectId } from "mongodb";

const assessResult = async function (req, res, next) {
  try {
    const { freelancerId, points } = req.body;

    const result = await LeaderAssess.updateOne(
      { freelancerId: ObjectId(freelancerId) },
      {
        $set: { points },
      },
      { upsert: true }
    );
    return res.json({
      status: true,
      message: "Đánh giá thành công!",
      result,
    });
  } catch (error) {
    next(error);
  }
};

export default assessResult;
