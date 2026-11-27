import Link from "next/link";

export default function Home() {
    return (
        <main>
            <h1>Protected Dashboard Project</h1>

            <Link href="/login">Go to Login</Link>

            <br /><br />

            <Link href="/dashboard">Open Dashboard</Link>
        </main>
    );
}