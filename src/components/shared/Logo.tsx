import Image from "next/image";

export default function Logo() {
  return (
    <Image
      className="relative"
      src="/images/logo/webforest-logo.svg"
      alt="Web Forest Logo"
      width={180}
      height={37}
      priority
    />
  );
}
