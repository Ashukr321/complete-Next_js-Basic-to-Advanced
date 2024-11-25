import { unstable_after as after } from "next/server";
export default function Home() {
  after(() => {
    console.log("this is after ")
  })
  return (
    <div>
      <h1 className="text-center text-4xl text-black" >next js 15</h1>

    </div>
  );
}
