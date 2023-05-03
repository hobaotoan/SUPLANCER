import Account from "../../models/Account.js";
import LeaderAccount from "../../models/LeaderAccount.js";

const getAllLeaders = async function (req, res, next) {
  try {
    const accountLeaders = await Account.find({ rule: "ADVISER" });

    const result = [];

    for (let i = 0; i < accountLeaders.length; i++) {
      const { _id, username, name, email, phoneNumber, urlAvatar } =
        accountLeaders[i];

      const { teamsManagement } = await LeaderAccount.findOne({
        leaderId: _id,
      });

      result.push({
        _id,
        username,
        name,
        email,
        phoneNumber,
        urlAvatar,
        teamsManagement,
      });
    }

    return res.status(201).json({
      status: true,
      message: "Lấy thông tin thành công!",
      result,
    });
  } catch (error) {
    next(error);
  }
};

export default getAllLeaders;
