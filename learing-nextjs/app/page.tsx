import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center"><h1>hellow from this is index page </h1>
      <div>

        <Link href="/dashboard" className="underline">dashboard</Link> 
        <br/>
        <Link href="/home" className="underline text-purple-600 " >home</Link>   
        </div>
    </div>


  );
}
