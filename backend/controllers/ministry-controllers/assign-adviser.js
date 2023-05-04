import AdviserAccount from "../../models/AdviserAccount.js";
import { ObjectId } from "mongodb";

const assignAdviser = async function (req, res, next) {
  try {
    const { adviserId, domainName } = req.body;

    // tim adviser tu req.body
    const adviser = await AdviserAccount.findOne({
      adviserId: ObjectId(adviserId),
    });

    // check exist
    let checkExist = "";

    for (let i = 0; i < adviser.domainsManagement.length; i++) {
      checkExist += adviser.domainsManagement[i].domainName;
      // adviser.classesManagement[i].semester +
      // adviser.classesManagement[i].schoolYear;
    }

    if (checkExist.includes(`${domainName}`)) {
      return res.json({
        status: false,
        message: "Team này đã được phân công!",
      });
    }

    if (adviser) {
      // Them lop quan ly moi
      adviser.domainsManagement.push({ domainName });

      console.log(checkExist);
      // Cap nhat lai lop moi trong db
      const result = await AdviserAccount.findOneAndUpdate(
        { adviserId: ObjectId(adviserId) },
        { domainsManagement: adviser.domainsManagement },
        { new: true }
      );

      return res.status(201).json({
        status: true,
        message: "Phân công Adviser thành công!",
        result,
      });
    } else {
      res.status(404).json({
        status: false,
        message: "Dữ liệu không hợp lệ!",
      });
    }
  } catch (error) {
    next(error);
  }
};

export default assignAdviser;
