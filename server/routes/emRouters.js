const express = require("express");
const router = express.Router();
const emController = require("../controllers/emController");

// GET ALL EMS
router.route("/").get(emController.getEmployees);
// CREATE A NEW EM
router.route("/new").post(emController.newEmployee);
//UPDATE AN EM
router.route("/edit/:id").put(emController.editEmployeeInfo);
//DELETE AN EM
router.route("/delete/:id").delete(emController.deleteEmployee);

// filter  routes
router.route("/search/gender").get(emController.filterByGender);
router.route("/search/exp").get(emController.filterByExp);
router.route("/search/salary").get(emController.filterBySalary);
router.route("/search/job_id").get(emController.filterByJob_id);

module.exports = router;
