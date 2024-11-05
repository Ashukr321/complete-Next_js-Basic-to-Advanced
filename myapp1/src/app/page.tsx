import Link from "next/link";

export default function Home() {
  return (
  <>
    <h1>welcome home</h1>
    <Link href={'/about'}>about</Link>
  </>
  );
}
