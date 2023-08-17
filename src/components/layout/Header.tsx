"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import pikachuImage from "@/public/images/pikachu.png";
import classNames from "classnames";

export default function Header() {
  const pathname = usePathname();
  const isHomepage = pathname === "/";

  return (
    <header className="w-full  border-b border-b-black bg-white">
      <nav className="container flex h-14  justify-between overflow-hidden">
        <Link href="/" className="relative top-1 block w-[73px]">
          <Image src={pikachuImage} alt="Inicio" className="w-[73px]" />
        </Link>
        <Link
          href="/"
          className={classNames(
            "inline-flex h-fit self-center rounded-lg px-2 py-1 transition duration-300",
            {
              "bg-primary-100": isHomepage,
              "hover:bg-primary-50": !isHomepage,
            },
          )}
        >
          Inicio
        </Link>
      </nav>
    </header>
  );
}
