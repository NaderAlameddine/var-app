"use client";    

import { useActionState } from "react";
import { signupAction } from "./actions";

export default function SignupPage() {
    //used this state to get the result of the action and display it in the UI instead of using useState and useRef
    const [state, formAction] = useActionState(signupAction, null);
    // console.log("state", state);
  return (
    <form action={formAction}>
      <input name="username" placeholder="Username" />
      <input name="password" type="password" placeholder="Password" />
      <button type="submit">Sign up</button>
        {state?.message && <p>{state.message}</p>}
    </form>
  )
}