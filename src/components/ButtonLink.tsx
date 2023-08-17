import { NextLinkProps } from "@/src/types";
import classNames from "classnames";
import Link from "next/link";

export default function ButtonLink({ children, ...props }: NextLinkProps) {
  return (
    <Link
      {...props}
      className={classNames(
        "rounded-3xl bg-primary-400 px-3 py-1 transition duration-300 hover:bg-primary-500",
        props.className,
      )}
    >
      {children}
    </Link>
  );
}
