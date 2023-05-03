import ProjectAssess from "../../models/ProjectAssess.js";

const getResultInternShip = async function (req, res, next) {
    const { freelancerId } = req.params;
    try {
        const resultAssess = await ProjectAssess.findOne({ freelancerId });

        return resultAssess
            ? res.status(201).json({
                  status: "success",
                  result: resultAssess,
              })
            : res.status(201).json({
                  status: "success",
                  message: "Don't Find Freelancer ID to Get Result",
              });
    } catch (error) {
        next(error);
    }
};

export default getResultInternShip;
