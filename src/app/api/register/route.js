import { NextResponse } from "next/server";
import DBConnect from "./../../../lib/DBconnect";
import User from "./../../../model/User";
import bcrypt from "bcryptjs";
import Profile from "../../../model/Profile";
export async function POST(req) {
  await DBConnect();
  try {
    const formData = await req.formData();
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const email = formData.get("email");
    const password = formData.get("password");
    const accountType = formData.get("accountType");

    console.log(firstName, lastName, email, password, accountType);
    if (!firstName || !lastName || !email || !password) {
      return NextResponse.json(
        {
          success: false,
          message: "All fields are required.",
        },
        { status: 400 }
      );
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
     const profileDetails = await Profile.create({
      gender: null,
      dateOfBirth: null,
      about: null,
      contactNumber: null,
    });
    const defaultProfileImage =
      "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y";

    const createdNewUser = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      accountType,
      additionalDetails: profileDetails._id,
      image: defaultProfileImage,
    });

    return NextResponse.json(
      {
        success: true,
        message: "User created successfully.",
        data: createdNewUser,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        success: false,
        message: "An error occurred. Please try again later.",
      },
      { status: 500 }
    );
  }
}
