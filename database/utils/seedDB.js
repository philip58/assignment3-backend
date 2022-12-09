const { Employee, Task } = require("../models");

const seedDB = async () => {
  const dummyEmployee = await Employee.create({
    firstname: "Melissa",
    lastname: "Lynch",
    department: "Computer Science",
  });
  const dummyEmployee2 = await Employee.create({
    firstname: "Philip",
    lastname: "Fernandez",
    department: "Web Dev",
  });

  const dummyTask = await Task.create({
    description: "Clean",
    prioritylevel: "High",
    completionstatus: false,
  });

  await dummyTask.setEmployee(dummyEmployee);
};

module.exports = seedDB;
