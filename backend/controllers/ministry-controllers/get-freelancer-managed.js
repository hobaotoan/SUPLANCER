import Account from "../../models/Account.js";
import FreelancerAccount from "../../models/FreelancerAccount.js";
import AdviserAccount from "../../models/AdviserAccount.js";
import { ObjectId } from "mongodb";

const getFreelancerManaged = async function (req, res, next) {
  try {
    const { adviserId } = req.query;

    const adviser = await AdviserAccount.findOne({
      adviserId: ObjectId(adviserId),
    });

    // Get domain managed by adviser
    const domains = [];

    for (let i = 0; i < adviser.domainsManagement.length; i++) {
      if (!domains.includes(adviser.domainsManagement[i].domainName))
        domains.push(adviser.domainsManagement[i].domainName);
    }

    // Get freelancer in domain
    const freelancerIds = [];

    for (let i = 0; i < domains.length; i++) {
      const freelancers = await FreelancerAccount.find({
        domain: domains[i],
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
        domain: freelancerIds[i].domain,
        // semester: freelancerIds[i].semester,
        // schoolYear: freelancerIds[i].schoolYear,
      });
    }

    res.json({
      status: true,
      message: "Lấy danh sách Fureelancer được quản lý bởi Adviser thành công!",
      domains,
      result: freelancerList,
    });
  } catch (error) {
    console.log(error);

    next(error);
  }
};

export default getFreelancerManaged;
