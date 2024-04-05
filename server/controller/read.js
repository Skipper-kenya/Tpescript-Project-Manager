const { connection } = require("../database/config");

const readController = async (req, res) => {
  try {
    const createProject = "SELECT * FROM  projects";
    connection.query(createProject, (err, results) => {
      err
        ? console.log(err.message)
        : (() => {
            return res.status(200).send({
              success: true,
              message: "project created successfully",
              projects: results,
            });
          })();
    });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = readController;
