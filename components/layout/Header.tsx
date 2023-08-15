import Link from "next/link";
import Image from "next/image";
import pikachuImage from "@/public/images/pikachu.png";

export default function Header() {
  return (
    <header className="block h-14 w-full overflow-hidden border-b border-b-black bg-white">
      <nav className="container">
        <Link href="/" className="block relative top-1 w-[73px]">
          <Image src={pikachuImage} alt="Inicio" className="w-[73px]" />
        </Link>
      </nav>
    </header>
  );
}
