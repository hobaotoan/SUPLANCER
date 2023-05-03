import Account from "../../models/Account.js";
import FreelancerAccount from "../../models/FreelancerAccount.js";
import { ObjectId } from "mongodb";

const getFreelancerList = async (req, res, next) => {
    const { teamName } = req.query;

    try {
        const freelancerAccounts = await FreelancerAccount.find({ team: teamName });

        const result = [];

        for (let i = 0; i < freelancerAccounts.length; ++i) {
            const { projectId} = freelancerAccounts[i];

            const { _id, username, name, email, phoneNumber, urlAvatar } =
                await Account.findOne({
                    _id: ObjectId(freelancerAccounts[i].freelancerId),
                });

            const project = await Account.findOne({ _id: ObjectId(projectId) });
            result.push({
                id: _id,
                username,
                name,
                email,
                phoneNumber,
                urlAvatar,
                team: freelancerAccounts[i].team,
                projectName: project ? project.name : "Chưa tham gia thực tập",
            });
        }
        return res.json({
            status: true,
            message: "Lấy danh sách sinh viên thành công!",
            result,
        });
    } catch (error) {
        next(error);
    }
};
export default getFreelancerList;
