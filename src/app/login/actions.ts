"use server";

import { signIn } from "@/auth";
import { AuthError } from "next-auth";

export async function loginAction(prevState: any, formData: FormData) {

    try {
        await signIn("credentials",  {...Object.fromEntries(formData) ,   redirectTo: "/",})
        return { success: true , message: "Login successful" };
    }catch (error){
        if(error instanceof AuthError){
            return { success: false, message: "Invalid username or password" };
        }
        throw error;
    }

}