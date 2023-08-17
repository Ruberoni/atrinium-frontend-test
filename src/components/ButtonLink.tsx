import { NextLinkProps } from "@/src/types";
import Link from "next/link";

export default function ButtonLink({ children, ...props }: NextLinkProps) {
  return <Link {...props}>{children}</Link>;
}
