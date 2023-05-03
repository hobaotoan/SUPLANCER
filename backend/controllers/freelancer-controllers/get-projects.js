import ProjectAccount from "../../models/ProjectAccount.js";
import Account from "../../models/Account.js";

const getCompanies = async function (req, res, next) {
    try {
        const companies = await ProjectAccount.find({});
        const result = [];

        for (let project of companies) {
            let detail = await Account.findOne({ _id: project.projectId });

            detail = {
                project,
                detail,
            };

            result.push(detail);
        }

        return res.status(201).json({
            success: "OK",
            result,
        });
    } catch (error) {
        next(error);
    }
};

export default getCompanies;
