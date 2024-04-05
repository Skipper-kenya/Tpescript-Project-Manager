const { connection } = require("../database/config");

const updateController = async (req, res) => {
  try {
    const updateProject = "UPDATE projects SET name  = ? WHERE name=?";
    connection.query(updateProject, (err, results) => {
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

module.exports = updateController;
