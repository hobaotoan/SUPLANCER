import FreelancerAccount from "../../models/FreelancerAccount.js";
const getInforAssign = async function (req, res, next) {
  try {
    const freelancerList = await FreelancerAccount.find({});

    const domainsName = [];
    //const schoolYears = [];

    for (let i = 0; i < freelancerList.length; i++) {
      if (!domainsName.includes(freelancerList[i].domain)) {
        domainsName.push(freelancerList[i].domain);
      }

      // if (!schoolYears.includes(freelancerList[i].schoolYear))
      //     schoolYears.push(freelancerList[i].schoolYear);
    }

    const result = {
      domainsName: domainsName.sort(),
      //schoolYears: schoolYears.sort(),
    };

    return res.json({
      status: true,
      message: "Lấy thông tin domain thành công!",
      result,
    });
  } catch (error) {
    console.log(error);

    next(error);
  }
};

export default getInforAssign;
