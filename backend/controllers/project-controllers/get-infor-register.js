import Account from "../../models/Account.js";
import FormRegister from "../../models/FormRegister.js";
import { ObjectId } from "mongodb";

const getInforRegister = async function (req, res, next) {
    const { freelancerId, projectId } = req.query;
    try {
        const { _id, name, email, phoneNumber, username, urlAvatar } =
            await Account.findOne({
                _id: ObjectId(freelancerId),
            });

        const { message, projects, technology } =
            await FormRegister.findOne({
                freelancerId: ObjectId(freelancerId),
                projectId: ObjectId(projectId),
            });

        const result = {
            id: _id,
            name,
            email,
            phoneNumber,
            username,
            message,
            projects,
            technology,
            urlAvatar,
        };

        return res.json({
            status: true,
            message: "Lấy chi tiết thông tin sinh viên thành công!",
            result,
        });
    } catch (error) {
        console.log(error, "Hey");
    }
};

export default getInforRegister;
