import ProjectAssess from "../../models/ProjectAssess.js";
import Account from "../../models/Account.js";

import { ObjectId } from "mongodb";

const getFreelancersTraining = async function (req, res, next) {
    try {
        const { projectId } = req.query;

        if (projectId) {
            const freelancersTraining = await ProjectAssess.find({
                projectId: ObjectId(projectId),
            });

            const result = [];

            for (let i = 0; i < freelancersTraining.length; i++) {
                const { _id, username, name, email, phoneNumber, urlAvatar } =
                    await Account.findOne({
                        _id: freelancersTraining[i].freelancerId,
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

            res.json({
                status: true,
                message: "Lấy danh sách sinh viên thực tập thành công!",
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

export default getFreelancersTraining;
