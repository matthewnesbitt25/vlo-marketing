import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/Transparent.png";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex shrink-0" aria-label="VLOStats">
      <Image 
        src={logo} 
        alt="VLOStats Logo" 
        width={38} 
        height={38} 
        priority 
      />
    </Link>
  );
}