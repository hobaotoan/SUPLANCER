import express from "express";

import addProjectController from "../controllers/other/add-project.js";

import assignAdviser from "../controllers/ministry-controllers/assign-adviser.js";
import getAllAdvisers from "../controllers/ministry-controllers/get-all-advisers.js";
import getAllCompanies from "../controllers/ministry-controllers/get-all-projects.js";
import getInforAdviser from "../controllers/ministry-controllers/get-infor-adviser.js";
import getInforAssign from "../controllers/ministry-controllers/get-infor-assign.js";
import getFreelancerManaged from "../controllers/ministry-controllers/get-freelancer-managed.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Ministry");
});

router.post(addProjectController);

// Assign adviser
router.post("/assign-adviser", assignAdviser);

// Get all advisers
router.get("/get-all-advisers", getAllAdvisers);

// Get all companies
router.get("/get-all-companies", getAllCompanies);

// Get detail infor adviser
router.get("/get-infor-adviser", getInforAdviser);

// Get infor assign adviser
router.get("/get-infor-assign", getInforAssign);

// Get freelancer managed by adviser
router.get("/get-freelancer-managed", getFreelancerManaged);

export default router;
