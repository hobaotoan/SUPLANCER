import LeaderAccount from "../../models/LeaderAccount.js";
import { ObjectId } from "mongodb";

const assignLeader = async function (req, res, next) {
  try {
    const { leaderId, teamName } = req.body;

    // tim leader tu req.body
    const leader = await LeaderAccount.findOne({
      leaderId: ObjectId(leaderId),
    });

    // check exist
    let checkExist = "";

    for (let i = 0; i < leader.teamsManagement.length; i++) {
      checkExist += leader.teamsManagement[i].teamName;
      // leader.classesManagement[i].semester +
      // leader.classesManagement[i].schoolYear;
    }

    if (checkExist.includes(`${teamName}`)) {
      return res.json({
        status: false,
        message: "Team này đã được phân công!",
      });
    }

    if (leader) {
      // Them lop quan ly moi
      leader.teamsManagement.push({ teamName });

      console.log(checkExist);
      // Cap nhat lai lop moi trong db
      const result = await LeaderAccount.findOneAndUpdate(
        { leaderId: ObjectId(leaderId) },
        { teamsManagement: leader.teamsManagement },
        { new: true }
      );

      return res.status(201).json({
        status: true,
        message: "Phân công Leader thành công!",
        result,
      });
    } else {
      res.status(404).json({
        status: false,
        message: "Dữ liệu không hợp lệ!",
      });
    }
  } catch (error) {
    next(error);
  }
};

export default assignLeader;
