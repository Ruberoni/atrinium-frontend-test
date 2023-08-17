import Link from "next/link";
import Image from "next/image";
import pokeballImage from "@/public/images/pokeball.png";
import classNames from "classnames";

export interface BottomNavProps {
  className?: string;
}

export default function BottomNav({ className }: BottomNavProps) {
  return (
    <nav
      className={classNames(
        "flex h-14 w-full items-center justify-evenly border-t border-t-black bg-white px-primary",
        className,
      )}
    >
      <Link href="/" className="relative -top-[28px]">
        <Image src={pokeballImage} alt="Inicio" className="w-[80px]" />
      </Link>
    </nav>
  );
}
