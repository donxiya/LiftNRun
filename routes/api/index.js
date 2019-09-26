const router = require("express").Router();
const weightLiftRoutes = require("./weightLiftings");
const runRoutes = require("./runs")

// API Routes
router.use("/run", runRoutes);
router.use("/weightlifting", weightLiftRoutes);


module.exports = router;