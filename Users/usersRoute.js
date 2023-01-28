const express = require("express");
const userRoute = express.Router();
const userCtr = require("./usersContoller");

const signUpUser = [userCtr.signUp];
userRoute.post("/signUp", signUpUser);

const logIn = [userCtr.login];
userRoute.get("/logIn", logIn);

module.exports = userRoute;
