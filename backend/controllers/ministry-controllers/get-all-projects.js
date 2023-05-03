import Account from "../../models/Account.js";
import ProjectAccount from "../../models/ProjectAccount.js";

const getAllCompanies = async function (req, res, next) {
    try {
        const companies = await Account.find({ rule: "PROJECT" });

        const result = [];

        for (let i = 0; i < companies.length; i++) {
            const { address, message } = await ProjectAccount.findOne({
                projectId: companies[i]._id,
            });

            const { _id, name, username, email, phoneNumber, urlAvatar } =
                companies[i];

            result.push({
                id: _id,
                name,
                username,
                email,
                phoneNumber,
                urlAvatar,
                address,
                message,
            });
        }

        return res.status(201).json({
            status: true,
            message: "Lấy thông tin thành công!",
            result,
        });
    } catch (error) {
        next(error);
    }
};

export default getAllCompanies;
