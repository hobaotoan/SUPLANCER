import Account from "../../models/Account.js";
import FreelancerAccount from "../../models/FreelancerAccount.js";
import LeaderAccount from "../../models/LeaderAccount.js";
import { ObjectId } from "mongodb";

const getFreelancerManaged = async function (req, res, next) {
  try {
    const { leaderId } = req.query;

    const leader = await LeaderAccount.findOne({
      leaderId: ObjectId(leaderId),
    });

    // Get team managed by leader
    const teams = [];

    for (let i = 0; i < leader.teamsManagement.length; i++) {
      if (!teams.includes(leader.teamsManagement[i].teamName))
        teams.push(leader.teamsManagement[i].teamName);
    }

    // Get freelancer in team
    const freelancerIds = [];

    for (let i = 0; i < teams.length; i++) {
      const freelancers = await FreelancerAccount.find({
        team: teams[i],
      });

      for (let j = 0; j < freelancers.length; j++) {
        // console.log(freelancerIds, freelancers[j].freelancerId);

        // if (freelancerIds.includes(freelancers[j].freelancerId)) {

        freelancerIds.push(freelancers[j]);
        // }
      }
    }

    // get infor freelancer list
    const freelancerList = [];
    for (let i = 0; i < freelancerIds.length; i++) {
      const { username, name, phoneNumber, email } = await Account.findOne({
        _id: freelancerIds[i].freelancerId,
      });
      freelancerList.push({
        username,
        name,
        phoneNumber,
        email,
        team: freelancerIds[i].team,
        // semester: freelancerIds[i].semester,
        // schoolYear: freelancerIds[i].schoolYear,
      });
    }

    res.json({
      status: true,
      message: "Lấy danh sách Fureelancer được quản lý bởi Leader thành công!",
      teams,
      result: freelancerList,
    });
  } catch (error) {
    console.log(error);

    next(error);
  }
};

export default getFreelancerManaged;
