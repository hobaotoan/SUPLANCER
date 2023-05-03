import Account from "../../models/Account.js";

const deleteProject = async function (req, res, next) {
    const { projectID } = req.body;

    try {
        const resultDelete = await Account.deleteOne({ _id: projectID });

        return res.status(201).json({
            status: "success",
            message: "Delete Project Completed!",
            resultDelete,
        });
    } catch (error) {
        next(error);
    }
};

export default deleteProject;
