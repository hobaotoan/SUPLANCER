import FormRegister from "../../models/FormRegister.js";
import { ObjectId } from "mongodb";
const registerProject = async function (req, res, next) {
    const { freelancerId, projectId, technology, projects, message } =
        req.body;

    try {
        await FormRegister.create({
            freelancerId: ObjectId(freelancerId),
            projectId: ObjectId(projectId),
            technology,
            projects,
            message,
        });

        return res.json({
            status: true,
            message: "Đăng ký thành công!",
        });
    } catch (error) {
        next(error);
    }
};

export default registerProject;
