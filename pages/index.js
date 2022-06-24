import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>
        Hello there dear user, welcome to our page. If you are looking for a
        particular service go to the link below
      </h1>
      <Link href="/booking">
        <a>Book a service</a>
      </Link>
    </div>
  );
}
