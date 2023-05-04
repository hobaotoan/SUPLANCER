import Account from "../../models/Account.js";
import AdviserAccount from "../../models/AdviserAccount.js";

const getAllAdvisers = async function (req, res, next) {
  try {
    const accountAdvisers = await Account.find({ rule: "ADVISER" });

    const result = [];

    for (let i = 0; i < accountAdvisers.length; i++) {
      const { _id, username, name, email, phoneNumber, urlAvatar } =
        accountAdvisers[i];

      const { domainsManagement } = await AdviserAccount.findOne({
        adviserId: _id,
      });

      result.push({
        _id,
        username,
        name,
        email,
        phoneNumber,
        urlAvatar,
        domainsManagement,
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

export default getAllAdvisers;
