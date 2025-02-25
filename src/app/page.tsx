import Benefits from "@/components/Benefits";
import { Hero } from "@/components/Hero";
import Location from "@/components/Location";
import { Plans } from "@/components/Plans";

export default function Home() {
  return (
    <div className="h-screen w-screen bg-white">
      <Hero />
      <div className="mt-[530px] lg:mt-[700px]">
        <Plans />
        <Location />
        <Benefits />
      </div>
    </div>
  );
}
