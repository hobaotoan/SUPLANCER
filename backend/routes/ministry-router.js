import express from "express";

import addProjectController from "../controllers/other/add-project.js";

import assignLeader from "../controllers/ministry-controllers/assign-leader.js";
import getAllLeaders from "../controllers/ministry-controllers/get-all-leaders.js";
import getAllCompanies from "../controllers/ministry-controllers/get-all-projects.js";
import getInforLeader from "../controllers/ministry-controllers/get-infor-leader.js";
import getInforAssign from "../controllers/ministry-controllers/get-infor-assign.js";
import getFreelancerManaged from "../controllers/ministry-controllers/get-freelancer-managed.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Ministry");
});

router.post(addProjectController);

// Assign leader
router.post("/assign-leader", assignLeader);

// Get all leaders
router.get("/get-all-leaders", getAllLeaders);

// Get all companies
router.get("/get-all-companies", getAllCompanies);

// Get detail infor leader
router.get("/get-infor-leader", getInforLeader);

// Get infor assign leader
router.get("/get-infor-assign", getInforAssign);

// Get freelancer managed by leader
router.get("/get-freelancer-managed", getFreelancerManaged);

export default router;
