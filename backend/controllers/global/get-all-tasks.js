import Task from "../../models/Task.js";
import { ObjectId } from "mongodb";

const getTasks = async function (req, res, next) {
  const { freelancerId } = req.query;
  try {
    const result = await Task.find({ freelancerId });

    return res.json({
      status: true,
      message: "Lấy tất cả công việc thành công!",
      result,
    });
  } catch (error) {
    next(error);
  }
};

export default getTasks;
