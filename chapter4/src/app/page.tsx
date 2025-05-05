
import Link from "next/link";
export default function Home() {
  return (
  <h1 className="text-center p-4">
    api routes
    <ul >
      <Link href="/dashboard" className="mr-2"> 
       go to dashbaord
      </Link>

      <Link href="/product">
        product
      </Link>
    </ul>
  </h1>
  );
}
