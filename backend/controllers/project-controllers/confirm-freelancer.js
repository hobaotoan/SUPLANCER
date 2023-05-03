import ProjectAssess from "../../models/ProjectAssess.js";
import FormRegister from "../../models/FormRegister.js";
import { ObjectId } from "mongodb";
import FreelancerAccount from "../../models/FreelancerAccount.js";
const confirmFreelancer = async function (req, res, next) {
    const { freelancerId, projectId } = req.body;

    try {
        const resultConfirm = await ProjectAssess.create({
            freelancerId: ObjectId(freelancerId),
            projectId: ObjectId(projectId),
        });

        await FormRegister.find({
            freelancerId,
        }).remove();

        const resultUpdate = await FreelancerAccount.findOneAndUpdate(
            { freelancerId: ObjectId(freelancerId) },
            { projectId: ObjectId(projectId) },
            { new: true }
        );

        return res.status(201).json({
            status: true,
            message: "Xác nhận thành công!",
            resultConfirm,
            resultUpdate,
        });
    } catch (error) {
        next(error);
    }
};

export default confirmFreelancer;
