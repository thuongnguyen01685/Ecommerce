const express = require("express");
const env = require("dotenv");
const app = express();
const mongoose = require("mongoose");
const userRoutes = require("./routes/user");
const adminRoutes = require("./routes/admin/admin");
const categoryRoutes = require("./routes/category");
const productRoutes = require("./routes/product");

env.config();

//Routes
app.use(express.json());
app.use("/api", userRoutes);
app.use("/api", adminRoutes);
app.use("/api", categoryRoutes);
app.use("/api", productRoutes);

app.get("/", (req, res, next) => {
  res.status(200).json({
    msg: "Hello",
  });
});

//connect to mongoose
const URI = process.env.MONGODB_URL;

mongoose.connect(
  URI,
  {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw err;
    console.log("Connected to MongoDB!!!");
  }
);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
