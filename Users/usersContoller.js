const { request } = require("express");
const userModel = require("./usersModel");

const userCtr = {};

//User Sign-Up
userCtr.signUp = async (req, res) => {
  try {
    const { FullName, EmailId, MobileNo, Password, ProfilePic, Address } =
      req.body;

    // const checckAlreadyUser = await userModel.find({ fullName: FullName });

    // console.log("==>", checkAlreadyUser);

    // if (!checckAlreadyUser) {

    const UserModel = new userModel({
      fullName: FullName,
      emailId: EmailId,
      mobileNo: MobileNo,
      password: Password,
      profilePic: ProfilePic,
      address: Address,
    });

    await UserModel.save();

    return res.status(200).json({
      message: "User sign up successfully.",
      status: true,
      data: UserModel,
    });

    // } else {
    //   return res.staus(400).json({
    //     message: `User with the name ${FullName} already exists.`,
    //     status: false,
    //   });
    // }
  } catch (error) {
    return res.status(500).json({
      message: "something went wrong",
      status: false,
      error: error ? error : error,
    });
  }
};

//User Login
userCtr.login = async (req, res) => {
  try {
    const EmailId = req.body.emailId;
    const Password = req.body.password;

    const findUser = await userModel.find({
      $and: [{ emailId: EmailId }, { password: Password }],
    });

    if (findUser) {
      return res.status(200).json({
        message: "User successfully Logged In",
        status: true,
      });
    } else {
      return res.status(400).json({
        message: "Please enter correct emailId and password",
        status: false,
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: "something went wrong",
      status: false,
      error: error ? error : error,
    });
  }
};

//getSingleUserById
userCtr.getSingleUser = async (req, res) => {
  try {
    const user = userModel.find({ _id: req.params.id });
    if (user.length !== 0 && user.length == 1) {
      return res.status(200).json({
        message: "Found user",
        status: true,
        data: user,
      });
    } else {
      return res.status(400).json({
        message: "No user found for the provided ID.",
        status: false,
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
      status: false,
      err: error ? error : "Something went wrong",
    });
  }
};

//editUserProfile
userCtr.editProfile = async (req, res) => {
  try {
    const userId = req.params.id;
    const Address = req.body.address;
    const MobileNo = req.body.mobileNo;

    const updateUser = userModel.updateMany(
      { _id: ObjectId(userId) },
      { $set: { address: Address, mobileNo: MobileNo } }
    );
    await updateUser.save();
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
      status: false,
      err: error ? error : "Something went wrong",
    });
  }
};

module.exports = userCtr;
