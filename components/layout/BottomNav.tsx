import Link from "next/link";
import Image from "next/image";
import pokeballImage from "@/public/images/pokeball.png";

export default function BottomNav() {
  return (
    <nav className="absolute bottom-0 left-0 right-0 flex h-14 w-full items-center justify-evenly border-t border-t-black px-primary">
      <BottomNavLink href="/bayas">Bayas</BottomNavLink>
      <Link
        href="/"
        className="relative -top-[28px]"
        // className="absolute -top-[40px] left-1/2 w-[80px] -translate-x-1/2"
      >
        <Image src={pokeballImage} alt="Inicio" className="w-[80px]" />
      </Link>
      <BottomNavLink href="/bayas">Items</BottomNavLink>
    </nav>
  );
}

export function BottomNavLink({ children, ...props }: any) {
  return (
    <Link
      className="inline-flex rounded-lg bg-primary-100 px-2 py-1"
      {...props}
    >
      {children}
    </Link>
  );
}
