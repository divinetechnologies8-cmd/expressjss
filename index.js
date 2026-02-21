const express = require("express");
const app = express();
const cors = require("cors");
const userRoutes = require("./src/user/routes");
const categoryRoutes = require("./src/category/routes")
const sequelize = require("./src/db/db");

app.use(cors({ origin: "*" }));
app.use(express.json());


sequelize.sync({ force:false });
app.use("/api", userRoutes);
app.use("/api", categoryRoutes);

app.listen(8888, () => {
    console.log("server is running on 8888")
})