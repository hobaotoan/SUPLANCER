import express from "express";
import assessResult from "../controllers/project-controllers/assess-result.js";
import confirmFreelancer from "../controllers/project-controllers/confirm-freelancer.js";
import getAllTasks from "../controllers/global/get-all-tasks.js";
import assessTask from "../controllers/project-controllers/assess-task.js";
import createTask from "../controllers/project-controllers/create-task.js";
import deleteTask from "../controllers/project-controllers/delete-task.js";
import refuseRegister from "../controllers/project-controllers/refuseRegister.js";
import getFreelancersRegister from "../controllers/project-controllers/get-freelancers-register.js";
import getFreelancersTraining from "../controllers/project-controllers/get-freelancers-training.js";
import getInforRegister from "../controllers/project-controllers/get-infor-register.js";
import getInforTraining from "../controllers/project-controllers/get-infor-training.js";
import getProjectAssess from "../controllers/global/get-project-assess.js";
import getProjectInfor from "../controllers/global/get-project-infor.js";

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Project");
});

// Assess Result & Assess Task
router.patch("/assess-result", assessResult);

router.patch("/assess-task", assessTask);

// Confirm Freelancer
router.post("/confirm", confirmFreelancer);

// get all Tasks
router.get("/get-all-tasks", getAllTasks);

// interaction Task
router.post("/create-task", createTask);

router.delete("/delete-task", deleteTask);

// Refuse freelancer
router.delete("/refuse-register", refuseRegister);

// Get freelancers register
router.get("/get-freelancers-register/", getFreelancersRegister);

// Get freelancers training
router.get("/get-freelancers-training", getFreelancersTraining);

// Get detail freelancer register
router.get("/get-infor-register", getInforRegister);

// Get detail freelancer traing
router.get("/get-infor-training", getInforTraining);

// Get project assess
router.get("/get-project-assess", getProjectAssess);

router.get("/get-project-infor", getProjectInfor);

export default router;
