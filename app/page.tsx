import TrafficLight from "@/components/TrafficLight";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[#292929] flex flex-col items-center justify-between p-24">
      <TrafficLight />
    </main>
  );
}
