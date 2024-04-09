import Image from "next/image";
import Hero from "./ui/hero";
import Navbar from "./ui/navbar";
import Trending from "./ui/trending";


export default function Home() {
  return (
   <main className="mx-auto max-w-screen-xl">
     <Navbar />
    <Hero/>
    <Trending /> 
   </main>
  );
}
