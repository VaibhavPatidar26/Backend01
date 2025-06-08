const express = require("express");
const app = express();
const path = require("path"); // ✅ Add this line
const db = require("./config/mongoose-connect");
const userRouter = require("./Router/userRouter");
const productRouter = require("./Router/productRouter");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const homeRouter = require("./Router/homeRouter");
const expressSession = require("express-session");
const flash = require("express-flash");
const ownerRouter = require("./Router/ownerRouter");

app.set("view engine", "ejs"); // ✅ Set the view engine
app.set("views", path.join(__dirname, "views")); // ✅ Set views folder

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  expressSession({
    resave: false,
    saveUninitialized: false,
    secret: "asdasd"
  })
);

app.use(flash());
app.use("/owners", ownerRouter);
app.use("/products", productRouter);
app.use("/user", userRouter);
app.use("/", homeRouter);

app.listen(3000);
