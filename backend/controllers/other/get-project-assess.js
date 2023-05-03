import ProjectAssess from "../../models/ProjectAssess.js";

const getProjectAssess = async (req, res, next) => {
    try {
        const result = await ProjectAssess.find({});
        return res.json({
            result,
        });
    } catch (error) {
        next(error);
    }
};
export default getProjectAssess;
