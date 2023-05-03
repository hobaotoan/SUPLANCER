import FreelancerAccount from "../../models/FreelancerAccount.js";
const getInforAssign = async function (req, res, next) {
  try {
    const freelancerList = await FreelancerAccount.find({});

    const teamsName = [];
    //const schoolYears = [];

    for (let i = 0; i < freelancerList.length; i++) {
      if (!teamsName.includes(freelancerList[i].team)) {
        teamsName.push(freelancerList[i].team);
      }

      // if (!schoolYears.includes(freelancerList[i].schoolYear))
      //     schoolYears.push(freelancerList[i].schoolYear);
    }

    const result = {
      teamsName: teamsName.sort(),
      //schoolYears: schoolYears.sort(),
    };

    return res.json({
      status: true,
      message: "Lấy thông tin team thành công!",
      result,
    });
  } catch (error) {
    console.log(error);

    next(error);
  }
};

export default getInforAssign;
