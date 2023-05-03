import FormRegister from "../../models/FormRegister.js";
import Account from "../../models/Account.js";
import { ObjectId } from "mongodb";

const getFreelancersRegister = async function (req, res, next) {
    try {
        const { projectId } = req.query;
        if (projectId) {
            const freelancersRegister = await FormRegister.find({
                projectId: ObjectId(projectId),
            });

            const result = [];

            for (let i = 0; i < freelancersRegister.length; i++) {
                const { _id, username, name, email, phoneNumber, urlAvatar } =
                    await Account.findOne({
                        _id: freelancersRegister[i].freelancerId,
                    });

                const information = {
                    id: _id,
                    username,
                    name,
                    email,
                    phoneNumber,
                    urlAvatar,
                };

                result.push(information);
            }

            return res.json({
                status: true,
                message: "Lấy danh sách ứng viên thành công!",
                result,
            });
        } else {
            res.json({
                status: false,
                message: "Không xác định được projectId!",
            });
        }
    } catch (error) {
        next(error);
    }
};

export default getFreelancersRegister;
