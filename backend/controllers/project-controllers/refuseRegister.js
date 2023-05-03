import FormRegister from "../../models/FormRegister.js";

const refuseRegister = async function (req, res, next) {
    try {
        const { freelancerId, projectId } = req.body;

        if (freelancerId && projectId) {
            const result = await FormRegister.find({
                freelancerId,
                projectId,
            }).remove();

            res.json({
                status: true,
                message: "Từ chối ứng viên thành công!",
                result,
            });
        } else {
            res.json({
                status: false,
                message: "Không xác định được freelancerId hoặc projectId!",
            });
        }
    } catch (error) {
        next();
    }
};

export default refuseRegister;
