import Account from "../../models/Account.js";

const searchLeader = async function (req, res, next) {
    const { searchData } = req.params;
    const regex = new RegExp(searchData, "i");

    try {
        const resultSearch = await Account.find({
            $or: [{ username: regex }, { name: regex }],
            rule: "LEADER",
        });

        return resultSearch
            ? res.status(201).json({
                  status: "success",
                  result: resultSearch,
              })
            : res.status(201).json({
                  status: "success",
                  message: "Don't find information",
              });
    } catch (error) {
        next(error);
    }
};

export default searchLeader;
