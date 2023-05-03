import Account from "../../models/Account.js";
import LeaderAccount from "../../models/LeaderAccount.js";
import { ObjectId } from "mongodb";

const getInforLeader = async function (req, res, next) {
  const { leaderId } = req.query;
  try {
    const { username, name, email, phoneNumber, urlAvatar } =
      await Account.findOne({
        _id: ObjectId(leaderId),
      });

    const { teamsManagement } = await LeaderAccount.findOne({
      leaderId: ObjectId(leaderId),
    });

    const result = {
      username,
      name,
      email,
      phoneNumber,
      urlAvatar,
      teamsManagement,
    };

    return res.status(201).json({
      status: true,
      message: "Lấy thông tin Leader thành công!",

      result,
    });
  } catch (error) {
    next(error);
  }
};

export default getInforLeader;
