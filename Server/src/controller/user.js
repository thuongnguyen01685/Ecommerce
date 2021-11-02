const User = require("../models/user");
const jwt = require("jsonwebtoken");

exports.signup = (req, res) => {
  User.findOne({ email: req.body.email }).exec((error, user) => {
    if (user)
      return res.status(400).json({
        msg: "User already registered",
      });

    const { firstName, lastName, email, password } = req.body;

    const _user = new User({
      firstName,
      lastName,
      email,
      password,
      username: Math.random().toString(),
    });

    _user.save((error, data) => {
      if (error) {
        return res.status(400).json({
          msg: "Something went wrong",
        });
      }
      if (data) {
        return res.status(201).json({
          msg: "User created Successfull",
        });
      }
    });
  });
};
exports.signin = (req, res) => {
  User.findOne({ email: req.body.email }).exec((error, user) => {
    if (error) return res.status(400).json({ error });
    if (user) {
      if (user.authenticate(req.body.password)) {
        const token = jwt.sign(
          { _id: user._id, role: user.role },
          process.env.JWT_SECRET,
          {
            expiresIn: "1h",
          }
        );
        const { _id, firstName, lastName, email, role, fullName } = user;
        res.status(200).json({
          token,
          user: { _id, firstName, lastName, email, role, fullName },
        });
      } else {
        return res.status(400).json({
          msg: "Invalid Password",
        });
      }
    } else {
      return res.status(400).json({ msg: "Something went wrong" });
    }
  });
};

// exports.requireSignin = (req, res, next) => {
//   const token = req.headers.authorization.split(" ")[1];
//   const user = jwt.decode(token, process.JWT_SECRET);
//   req.user = user;
//   next();
// };
