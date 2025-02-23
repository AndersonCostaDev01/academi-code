import { Hero } from "@/components/Hero";
import { Plans } from "@/components/Plans";

export default function Home() {
  return (
    <div className="bg-white h-screen w-screen">
      <Hero />
      <div className="mt-[530px] lg:mt-[700px]">
        <Plans />
      </div>
    </div>
  );
}
