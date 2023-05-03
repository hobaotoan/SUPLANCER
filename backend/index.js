import express from "express";
import connectDB from "./database/connectDB.js";

import bodyParser from "body-parser";
import cors from "cors";

// import router
import adminRouter from "./routes/admin-router.js";
import ministryRouter from "./routes/ministry-router.js";
import freelancerRouter from "./routes/freelancer-router.js";
import leaderRouter from "./routes/leader-router.js";
import projectRouter from "./routes/project-router.js";
import authRouter from "./routes/auth-router.js";
import getAccount from "./controllers/global/getAccount.js";
import uploadProfile from "./controllers/global/upload-profile.js";

// import midleware
import middlewareRouter from "./middleware/check-rule.js";

import multer from "multer";
import createAccount from "./controllers/admin-controllers/create-account.js";

const app = express();
const port = 3000;

// set up upload file
const storage = multer.diskStorage({
  // cb check file is accessed ?
  destination: function (req, file, cb) {
    cb(null, "../frontend/public/uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage: storage });

// Connect database
connectDB();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use(cors());

// Router
app.use(
  "/admin",
  (req, res, next) => {
    middlewareRouter(req, res, next, "ADMIN");
  },
  adminRouter
);

app.use(
  "/ministry",
  (req, res, next) => {
    middlewareRouter(req, res, next, "MINISTRY");
  },
  ministryRouter
);

app.use(
  "/leader",
  (req, res, next) => {
    middlewareRouter(req, res, next, "ADVISER");
  },
  leaderRouter
);

app.use(
  "/project",
  (req, res, next) => {
    middlewareRouter(req, res, next, "PROJECT");
  },
  projectRouter
);

app.use(
  "/freelancer",
  (req, res, next) => {
    middlewareRouter(req, res, next, "FREELANCER");
  },
  freelancerRouter
);

// app.use("/get-rule", getRule);
app.post("/get-account", getAccount);
// app.post("/create-admin",createAccount);

// update avatar
app.post("/update-profile", upload.single("avatar"), uploadProfile);

app.use("/", authRouter);

//Catch
app.use((req, res, next) => {
  const err = new Error();
  err.status = 404;
  next(err);
});

//Error handler
app.use((err, req, res, next) => {
  const error = app.get("env") === "development" ? err : {};
  const status = err.status || 500;
  return res.status(status).json({
    error: {
      message: error.message,
    },
  });
});

app.listen(port, () => {
  console.log(`Server running in port ${port}`);
});
