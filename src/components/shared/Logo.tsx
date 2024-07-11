import Image from "next/image";
import * as Checkbox from "@radix-ui/react-checkbox";

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
