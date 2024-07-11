import Head from "next/head";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import Logo from "@/components/shared/Logo";

const montserrat = Montserrat({
  weight: "500",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <div
        className={cn(
          montserrat.className,
          "flex flex-col gap-6 h-dvh items-center justify-center",
        )}
      >
        <Logo />
        <h1 className="text-2xl">Estamos em manunteção.</h1>
      </div>
    </>
  );
}
