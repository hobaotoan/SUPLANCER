import Task from "../../models/Task.js";
import { ObjectId } from "mongodb";
const createTask = async function (req, res, next) {
    const { freelancerId, title, time } = req.body;

    try {
        const result = await Task.create({
            freelancerId: ObjectId(freelancerId),
            title,
            time,
        });

        return res.json({
            status: true,
            message: "Thêm công việc thành công!",
            result,
        });
    } catch (error) {
        next(error);
    }
};

export default createTask;
