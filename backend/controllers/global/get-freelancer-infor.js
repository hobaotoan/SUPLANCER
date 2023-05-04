import Account from "../../models/Account.js";
import FreelancerAccount from "../../models/FreelancerAccount.js";
import { ObjectId } from "mongodb";
import ProjectAssess from "../../models/ProjectAssess.js";

const getFreelancerInfor = async (req, res, next) => {
  const { freelancerId } = req.query;
  try {
    const { username, name, email, phoneNumber, urlAvatar } =
      await Account.findOne({ _id: ObjectId(freelancerId) });

    const freelancerAccount = await FreelancerAccount.findOne({
      freelancerId: ObjectId(freelancerId),
    });
    const projectAssess = await ProjectAssess.findOne({
      freelancerId: ObjectId(freelancerId),
    });
    const result = {
      freelancerId,
      username,
      name,
      email,
      phoneNumber,
      urlAvatar,
      domain: freelancerAccount.domain,
      // semester: freelancerAccount.semester,
      // schoolYear: freelancerAccount.schoolYear,
      projectId:
        freelancerAccount.projectId === undefined
          ? null
          : freelancerAccount.projectId,
      startDate: projectAssess === null ? 0 : projectAssess.createdAt,
    };

    return res.json({
      status: true,
      message: "Lấy thông tin sinh viên thành công!",
      result,
    });
  } catch (error) {
    next(error);
  }
};
export default getFreelancerInfor;
