"use client";
import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();

  return (
    <button>
      <span
        onClick={() => router.back()}
        className="cursor-pointer font-sans font-semibold"
      >
        &lt; Back
      </span>
    </button>
  );
};

export default BackButton;
