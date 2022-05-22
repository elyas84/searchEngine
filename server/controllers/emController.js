const { query } = require("express");
const EM = require("../models/employesModel");

//@route /api/employees/
//@desc GET all ems
//@access public

exports.getEmployees = async (req, res) => {
  try {
    const employees = await EM.find();
    if (employees && employees.length === 0) {
      return res.status(404).json({
        message: "There are no employees yet.",
      });
    } else {
      return res.status(200).json({
        count: employees.length,
        employees: employees,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error,
    });
  }
};

//@route /api/employees/
//@desc create an employee
//@access public

exports.newEmployee = async (req, res) => {
  const { name, title, avatar, exp, salary, gender } = req.body;
  try {
    let newEmployee = await EM.findOne({ name });
    if (newEmployee) {
      return res.status(400).json({
        message: "This name is already taken, please choose other name.",
      });
    } else {
      newEmployee = new EM({
        name,
        title,
        avatar,
        exp,
        salary,
        gender,
      });

      await newEmployee.save();
      res.status(201).json(newEmployee);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error,
    });
  }
};

//@route /api/employees/edit/:id
//@desc update an employee
//@access public

exports.editEmployeeInfo = async (req, res) => {
  try {
    const emToEdit = await EM.findById(req.params.id);
    if (!emToEdit) {
      return res.status(400).json({
        message: "There is no employee found",
      });
    } else {
      emToEdit.name = req.body.name || emToEdit.name;
      emToEdit.title = req.body.title || emToEdit.title;
      emToEdit.exp = req.body.exp || emToEdit.exp;
      emToEdit.salary = req.body.salary || emToEdit.salary;
      emToEdit.avatar = req.body.avatar || emToEdit.avatar;

      emToEdit.save();

      res.status(200).json(emToEdit);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error,
    });
  }
};

//@route /api/employees/delete/:id
//@desc update an employee
//@access public

exports.deleteEmployee = async (req, res) => {
  try {
    const employee = await EM.findById(req.params.id);
    if (!employee) {
      return res.status(404).json({
        message: "Ops! Do we have this employee?",
      });
    }
    await employee.deleteOne({ _id: employee._id });
    res.status(200).json({
      message: "Employee is deleted.",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error,
    });
  }
};

// Filtering by properties

exports.filterByGender = async (req, res) => {
  try {
    // await MyModel.find({ name: 'john', age: { $gte: 18 } }).exec();
    const emp = await EM.find({ gender: req.query.gender }).exec();
    if (emp && emp.length === 0) {
      return res.status(400).json({
        message: "Bad Reqest",
      });
    } else {
      res.status(200).json({
        count: emp.length,
        employees: emp,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error,
    });
  }
};

exports.filterByName = async (req, res) => {
  try {
    // await MyModel.find({ name: 'john', age: { $gte: 18 } }).exec();
    const emp = await EM.find({ name: req.query.name }).exec();

    if (emp && emp.length === 0) {
      return res.status(400).json({
        message: "There is no data",
      });
    } else {
      res.status(200).json({
        count: emp.length,
        employees: emp,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error,
    });
  }
};

exports.filterByExp = async (req, res) => {
  try {
    // await MyModel.find({ name: 'john', age: { $gte: 18 } }).exec();
    const emp = await EM.find({ exp: req.query.exp }).exec();

    if (emp && emp.length === 0) {
      return res.status(400).json({
        message: "There is no data",
      });
    } else {
      res.status(200).json({
        count: emp.length,
        employees: emp,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error,
    });
  }
};
exports.filterBySalary = async (req, res) => {
  try {
    // await MyModel.find({ name: 'john', age: { $gte: 18 } }).exec();
    const emp = await EM.find({ salary: req.query.salary }).exec();

    if (emp && emp.length === 0) {
      return res.status(400).json({
        message: "There is no data",
      });
    } else {
      res.status(200).json({
        count: emp.length,
        employees: emp,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error,
    });
  }
};

exports.filterByJobTitle = async (req, res) => {
  try {
    // await MyModel.find({ name: 'john', age: { $gte: 18 } }).exec();
    const emp = await EM.find({ title: req.query.title }).exec();

    if (emp && emp.length === 0) {
      return res.status(400).json({
        message: "There is no data",
      });
    } else {
      res.status(200).json({
        count: emp.length,
        employees: emp,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error,
    });
  }
};
