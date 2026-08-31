//we create the signup logic here

"use server";

import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";
//nextjs using formdata obj to get the data from the form
export async function signupAction(prevState: any, formData: FormData) {
    const username = formData.get("username") as string;
    console.log("username", username);
    const password = formData.get("password") as string;

    // Perform signup logic here database
    console.log("Signing up with username:", username);

const passwordHash = await bcrypt.hash(password, 10);
//check if user already exists using prisma
try {
    await prisma.user.create({
        data: {
            username,
            passwordHash
        } ,
    })
     return {  success : true,  message : "User created successfully"}
    }catch (error) {
    return {success : false , message : "User already exists"}
    }
}