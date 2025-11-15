import Image from "next/image";
import Menu from "./components/Menu";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/forside_video.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10">
        <Menu />
      </div>
    </div>
  );
}
