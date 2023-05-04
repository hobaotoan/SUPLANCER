import express from "express";
const router = express.Router();

import getProjectAssess from "../controllers/global/get-project-assess.js";
import assessResult from "../controllers/adviser-controllers/assess-result.js";
import getAllTasks from "../controllers/global/get-all-tasks.js";
//import getClasses from "../controllers/adviser-controllers/get-classes.js";
import getFreelancerList from "../controllers/adviser-controllers/get-freelancer-list.js";
import getFreelancerInfor from "../controllers/global/get-freelancer-infor.js";
import getProjectInfor from "../controllers/global/get-project-infor.js";
import getAdviserAssess from "../controllers/global/get-adviser-assess.js";
import getTeams from "../controllers/adviser-controllers/get-classes.js";

router.put("/assess-result", assessResult);

router.get("/get-project-assess", getProjectAssess);

router.get("/get-all-task", getAllTasks);

//Get freelancer's project's detail information
router.get("/get-project-infor", getProjectInfor);

//Get infor freelancer
router.get("/get-freelancer-infor", getFreelancerInfor);

//Get Classes List
router.get("/get-class-list", getTeams);

//Get Freelancer List
router.get("/get-freelancer-list", getFreelancerList);

//get assess
router.get("/get-assess", getAdviserAssess);

export default router;
