const { connection } = require("../database/config");

const createController = async (req, res) => {
  console.log("received");
  try {
    const createProject = "INSERT INTO projects (name) VALUES (? )";
    connection.query(createProject, [req.body.project], (err, result) => {
      err
        ? console.log(err.message)
        : (() => {
            return res
              .status(200)
              .send({ success: true, message: "project created successfully" });
          })();
    });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = createController;
