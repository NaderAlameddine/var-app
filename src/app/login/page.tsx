"use client";
import { useActionState } from "react";
import { loginAction } from "./actions";

export default function Login() {
  const [state, formAction] = useActionState(loginAction, null);

  return (
    <form action={formAction}>
      <input name="username" placeholder="Username" />
      <input name="password" type="password" placeholder="Password" />
      <button type="submit">Login</button>
      {state?.message && <p>{state.message}</p>}
    </form>
  );
}
