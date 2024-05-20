/*
 * login-check.js
 * This is a function for checking if the entered credentials are correct
 */ 

module.exports = (express) => {
  const router = express.Router();

  /*
   * /login
   * This is a route that checks if the user entered email/password are correct
   */
  router.post("/login", (req, res) => {
    const { email, password } = req.body;

    if (email === "fe_usa" && password === "admin1") {
      res.json({message: "Success"});
    }
    res.json({ message: "Failed" });
  });
  
  return router; 
}; 

