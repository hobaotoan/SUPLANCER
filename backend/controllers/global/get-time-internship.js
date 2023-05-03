import ProjectAssess from "../../models/ProjectAssess.js";
import { ObjectId } from "mongodb";

const getTimeInternship = async (req, res, next) => {
  const { freelancerId } = req.body;
  try {
    const { createAt } = await ProjectAssess.findOne({
      freelancerId: ObjectId(freelancerId),
    });
    if (createAt) {
      return res.json({
        status: true,
        message: "Lấy thời gian bắt đầu thực tập thành công!",
        createAt,
      });
    } else {
      return res.json({
        status: false,
        message: "Sinh viên chưa tham gia thực tập!",
      });
    }
  } catch (error) {
    next(error);
  }
};
export default getTimeInternship;
