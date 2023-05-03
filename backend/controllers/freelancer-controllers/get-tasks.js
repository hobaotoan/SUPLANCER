import Task from "../../models/Task.js";
import { ObjectId } from "mongodb";

const getTasks = async function (req, res, next) {
    const { freelancerId } = req.params;

    try {
        const tasks = await Task.findOne({ freelancerId: ObjectId(freelancerId) });

        return res.status(201).json({
            status: true,
            tasks,
        });
    } catch (error) {
        console.log(error);
    }
};

export default getTasks;
