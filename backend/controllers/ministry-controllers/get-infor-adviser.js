import Account from "../../models/Account.js";
import AdviserAccount from "../../models/AdviserAccount.js";
import { ObjectId } from "mongodb";

const getInforAdviser = async function (req, res, next) {
  const { adviserId } = req.query;
  try {
    const { username, name, email, phoneNumber, urlAvatar } =
      await Account.findOne({
        _id: ObjectId(adviserId),
      });

    const { domainsManagement } = await AdviserAccount.findOne({
      adviserId: ObjectId(adviserId),
    });

    const result = {
      username,
      name,
      email,
      phoneNumber,
      urlAvatar,
      domainsManagement,
    };

    return res.status(201).json({
      status: true,
      message: "Lấy thông tin Adviser thành công!",

      result,
    });
  } catch (error) {
    next(error);
  }
};

export default getInforAdviser;
