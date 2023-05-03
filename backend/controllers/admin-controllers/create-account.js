import Account from "../../models/Account.js";
import ProjectAccount from "../../models/ProjectAccount.js";
import FreelancerAccount from "../../models/FreelancerAccount.js";
import LeaderAccount from "../../models/LeaderAccount.js";
import argon2 from "argon2";

const createAccount = async (req, res, next) => {
  const { username, password, name, typeAccount } = req.body;
  let urlAvatar = "https://cdn-icons-png.flaticon.com/512/149/149071.png";
  if (typeAccount == "PROJECT")
    urlAvatar = "https://cdn-icons-png.flaticon.com/512/4205/4205813.png";
  else if (typeAccount == "FREELANCER")
    urlAvatar = "https://cdn-icons-png.flaticon.com/512/2302/2302834.png";
  else if (typeAccount == "LEADER")
    urlAvatar = "https://cdn-icons-png.flaticon.com/512/6854/6854607.png";

  // simple validate
  if (!username || !password || !name || !typeAccount) {
    return res.json({
      status: false,
      message: "Vui lòng điền đầy đủ thông tin!",
    });
  }
  try {
    const findAccount = await Account.findOne({ username });
    if (!findAccount) {
      const hashedPassword = await argon2.hash(password);
      const newAccount = await Account.create({
        username,
        password: hashedPassword,
        name,
        urlAvatar,
        rule: typeAccount,
        createdAt: Date.now(),
      });

      if (typeAccount === "LEADER") {
        const leaderAccount = await LeaderAccount.create({
          leaderId: newAccount._id,
        });
        return res.json({
          status: true,
          message: "Tạo mới một tài khoản thành công!",
          newAccount,
          leaderAccount,
        });
      }

      if (typeAccount === "FREELANCER") {
        const { freelancerTeam } = req.body;

        //simple validate
        if (!freelancerTeam) {
          return res.json({
            status: false,
            message: "Vui lòng điền đầy đủ thông tin!",
          });
        }

        const freelancerAccount = await FreelancerAccount.create({
          freelancerId: newAccount._id,
          team: freelancerTeam,
          // semester,
          // schoolYear,
        });
        return res.json({
          status: true,
          message: "Tạo mới một tài khoản thành công!",
          newAccount,
          freelancerAccount,
        });
      }

      if (typeAccount === "PROJECT") {
        const projectAccount = await ProjectAccount.create({
          projectId: newAccount._id,
        });
        return res.json({
          status: true,
          message: "Tạo mới một tài khoản thành công!",
          newAccount,
          projectAccount,
        });
      }
    } else {
      return res.json({
        status: false,
        message: "Tài khoản đã tồn tại trong hệ thống!",
      });
    }
  } catch (error) {
    next(error);
  }
};

export default createAccount;
