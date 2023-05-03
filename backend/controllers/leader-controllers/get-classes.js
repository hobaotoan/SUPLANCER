import LeaderAccount from "../../models/LeaderAccount.js";
import { ObjectId } from "mongodb";

const getTeams = async (req, res, next) => {
  try {
    const { leaderId } = req.query;
    const leader = await LeaderAccount.findOne({
      leaderId: ObjectId(leaderId),
    });
    const result = leader.teamsManagement;
    return res.json({
      status: true,
      message: "Lấy danh sách các team quản lý thành công!",
      result,
    });
  } catch (error) {
    next(error);
  }
};

export default getTeams;
