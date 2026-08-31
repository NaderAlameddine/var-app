import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>VAR</h1>
      <h2>Become the referee</h2>
      <p>
        Real controversial calls from actual matches. No outcome shown — just
        the moment. You make the call. Then the reveal: what really happened,
        and how fans on both sides saw it differently.
      </p>
      <p>Are you a better referee than you think?</p>

      <Link href="/login">Login</Link>
      <Link href="/signup">Sign Up</Link>
    </div>
  );
}
