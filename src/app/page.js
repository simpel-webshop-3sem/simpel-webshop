import Image from "next/image";
import Menu from "./components/Menu";
import HoverText from "./components/HoverText";

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
        <div className="items-left flex min-h-screen w-xl flex-col justify-end p-10 text-white">
          <h1 className="mb-6 text-5xl font-bold">Welcome to Webshoppen</h1>
          <p className="mb-8 max-w-2xl text-lg">
            Discover a wide range of products at unbeatable prices. Shop now and
            experience the best online shopping experience!
          </p>
          <a
            href="/productlist"
            className="bg-foreground/90 flex items-center justify-center rounded-full px-8 py-4 text-xl font-bold text-black transition hover:bg-gray-300/90"
          >
            <HoverText text="explore" />
          </a>
        </div>
      </div>
    </div>
  );
}
