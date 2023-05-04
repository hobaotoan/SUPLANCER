import AdviserAccount from "../../models/AdviserAccount.js";
import { ObjectId } from "mongodb";

const getTeams = async (req, res, next) => {
  try {
    const { adviserId } = req.query;
    const adviser = await AdviserAccount.findOne({
      adviserId: ObjectId(adviserId),
    });
    const result = adviser.domainsManagement;
    return res.json({
      status: true,
      message: "Lấy danh sách các domain quản lý thành công!",
      result,
    });
  } catch (error) {
    next(error);
  }
};

export default getTeams;
