import express from "express";

import getAllCompanies from "../controllers/ministry-controllers/get-all-projects.js";
import getAllTasks from "../controllers/global/get-all-tasks.js";
import registerProject from "../controllers/freelancer-controllers/register-project.js";
import updateFreelancerInfor from "../controllers/freelancer-controllers/update-freelancer-infor.js";
import getFreelancerInfor from "../controllers/global/get-freelancer-infor.js";
import getProjectInfor from "../controllers/global/get-project-infor.js";
import getProjectAssess from "../controllers/global/get-project-assess.js";
import getLeaderAssess from "../controllers/global/get-leader-assess.js";
const router = express.Router();

//GET All Project
router.get("/get-project-list", getAllCompanies);

//Get Result
router.get("/get-freelancer-infor", getFreelancerInfor);

router.get("/get-project-infor", getProjectInfor);

router.get("/get-all-task", getAllTasks);

router.get("/get-project-assess", getProjectAssess);

router.get("/get-assess", getLeaderAssess);

router.post("/register-project", registerProject);

// Get leader assess
router.get("/get-leader-assess", getLeaderAssess);

export default router;
