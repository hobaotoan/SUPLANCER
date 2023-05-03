import Account from "../../models/Account.js";
import Task from "../../models/Task.js";
import { ObjectId } from "mongodb";

const getInforTraining = async function (req, res, next) {
    const { freelancerId } = req.query;

    try {
        const { _id, name, email, phoneNumber, username, urlAvatar } =
            await Account.findOne({
                _id: ObjectId(freelancerId),
            });

        const tasks = await Task.find({
            freelancerId: ObjectId(freelancerId),
        });

        const result = {
            id: _id,
            name,
            email,
            phoneNumber,
            username,
            tasks,
            urlAvatar,
        };

        return res.json({
            status: true,
            message: "Lấy chi tiết thông tin Freelancer thành công!",
            result,
        });
    } catch (error) {
        console.log(error);
    }
};

export default getInforTraining;
