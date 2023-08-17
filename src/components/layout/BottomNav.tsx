import Link from "next/link";
import Image from "next/image";
import pokeballImage from "@/public/images/pokeball.png";
import classNames from "classnames";
import { NextLinkProps } from "@/src/types";

export interface BottomNavProps {
  className?: string;
}

export default function BottomNav({ className }: BottomNavProps) {
  return (
    <nav
      className={classNames(
        "px-primary flex h-14 w-full items-center justify-evenly border-t border-t-black bg-white",
        className,
      )}
    >
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

export function BottomNavLink({ children, ...props }: NextLinkProps) {
  return (
    <Link
      className="bg-primary-100 inline-flex rounded-lg px-2 py-1"
      {...props}
    >
      {children}
    </Link>
  );
}
