import Account from "../../models/Account.js";
import ProjectAccount from "../../models/ProjectAccount.js";
import { ObjectId } from "mongodb";

const getProjectInfor = async (req, res, next) => {
    const { projectId } = req.query;
    try {
        const { _id, username, name, email, phoneNumber, urlAvatar, rule } =
            await Account.findOne({ _id: ObjectId(projectId) });
        if (username) {
            const { address, message } = await ProjectAccount.findOne({
                projectId: ObjectId(projectId),
            });
            const result = {
                id: _id,
                username,
                name,
                email,
                phoneNumber,
                urlAvatar,
                address,
                message,
                rule,
            };
            return res.json({
                status: true,
                message: "Lấy thông tin đơn vị thực tập thành công!",
                result,
            });
        } else {
            return res.json({
                status: false,
                message: "Không tìm thấy đơn vị thực tập!",
            });
        }
    } catch (error) {
        next(error);
    }
};

export default getProjectInfor;
