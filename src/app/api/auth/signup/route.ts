import User from "@/models/userSchema";
import { NextRequest, NextResponse } from "next/server";


export async function (req: NextRequest): {
    try {

    const reqBody = await req.body;

    // get data from request body
    const { userName, fullName, avatar, email, password } = reqBody;

    // validation
    if (!userName || !fullName || !avatar || !email || !password) {
        return NextResponse.json(
            {
                message: "All fields are required",
                success: false,
                data: {}
            },
            {
                status: 400
            }
        )

    }

    // check if user already exists or not
    const existedUser = await User.findOne({
        $or: [{ userName }, { email }]
    });

    if (existedUser) {
        return NextResponse.json(
            {
                message: "User with username or email already exists",
                success: false,
                data: {}
            },
            {
                status: 400
            }
        )
    }

    // hash the password



    // create user object

    // save entry in DB
    const user = "";

    // return response
    return NextResponse.json(
        {
            message: "User registration successful",
            success: true,
            data: user
        },
        {
            status: 200
        }
    )

} catch (err: any) {
    return NextResponse.json(
        {
            success: false,
            message: err.message
        },
        { status: 500 }
    )

}


};