const { json } = require("express");
const employees = require("../models/emsSchema");

exports.employeeRegister = async (req, res) => {

  const { employeeid, employeename, employeeplace, jobdescription } = req.body;
  if (!employeeid || !employeename || !employeeplace || !jobdescription) {
    res.status(403).json("all the inputs are required");
  }

  try {
    const preEmployee = await employees.findOne({ employeeid });
    if (preEmployee) {
      res.status(401).json("employee already exist");
    } else {
      const newEmployee = new employees({ 
        employeeid,
        employeename,
        employeeplace,
        jobdescription,
      });
      await newEmployee.save();
      res.status(200).json(newEmployee);
    }
  } catch (error) {
    // Improved error handling
    console.error("Error in employee registration:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
