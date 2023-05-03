import ProjectAccount from "../../models/ProjectAccount.js";
import Account from "../../models/Account.js";
import { ObjectId } from "mongodb";

const updateProject = async function (req, res, next) {
    const { projectId, address, message, name, email, phoneNumber, urlAvatar } =
        req.body;

    try {
        const resultUpdate = await ProjectAccount.findOneAndUpdate(
            { projectId: ObjectId(projectId) },
            {
                address,
                message,
            }
        );
        if (resultUpdate) {
            await Account.findOneAndUpdate(
                { _id: projectId },
                {
                    name,
                    email,
                    phoneNumber,
                    urlAvatar,
                }
            );

            return res.status(201).json({
                status: "success",
                message: "Update Information Project Completed!",
            });
        } else
            return res.status(201).json({
                status: "success",
                message: "Don't Find Project ID to Update",
            });
    } catch (error) {
        next(error);
    }
};
export default updateProject;
