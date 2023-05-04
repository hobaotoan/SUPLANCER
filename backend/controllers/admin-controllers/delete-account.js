import Account from "../../models/Account.js";
import AdviserAccount from "../../models/AdviserAccount.js";
import ProjectAccount from "../../models/ProjectAccount.js";
import ProjectAssess from "../../models/ProjectAssess.js";
import FormRegister from "../../models/FormRegister.js";
import FreelancerAccount from "../../models/FreelancerAccount.js";
import Task from "../../models/Task.js";
import AdviserAccess from "../../models/AdviserAccess.js";
import { ObjectId } from "mongodb";

const deleteAccount = async (req, res, next) => {
  const { accountId } = req.body;
  try {
    const accountDeleted = await Account.findOneAndDelete({
      _id: ObjectId(accountId),
    });

    if (accountDeleted) {
      const rule = accountDeleted.rule;
      if (rule === "ADVISER") {
        await AdviserAccount.findOneAndDelete({
          adviserId: accountDeleted._id,
        });
      }

      if (rule === "PROJECT") {
        await ProjectAccount.findOneAndDelete({
          projectId: accountDeleted._id,
        });
        await ProjectAssess.deleteMany({
          projectId: accountDeleted._id,
        });
        await FormRegister.deleteMany({
          projectId: accountDeleted._id,
        });
        await FreelancerAccount.updateMany(
          { projectId: accountDeleted._id },
          { projectId: ObjectId("55153a8014829a865bbf700d") }
        );
      }

      if (rule === "FREELANCER") {
        await ProjectAssess.findOneAndDelete({
          freelancerId: accountDeleted._id,
        });
        await AdviserAccess.findOneAndDelete({
          freelancerId: accountDeleted._id,
        });
        await FormRegister.deleteMany({
          freelancerId: accountDeleted._id,
        });
        await FreelancerAccount.findOneAndDelete({
          freelancerId: accountDeleted._id,
        });
        await Task.deleteMany({ freelancerId: accountDeleted._id });
      }
      return res.json({
        status: true,
        message: "Xóa tài khoản thành công!",
      });
    } else {
      return res.json({
        status: false,
        message: "Không tìm thấy tài khoản để xóa!",
      });
    }
  } catch (error) {
    next(error);
  }
};

export default deleteAccount;
