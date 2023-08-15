import React from "react";
import { LinkProps } from "next/link";

export type NextLinkProps = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  keyof LinkProps
> &
  LinkProps & {
    children?: React.ReactNode;
  } & React.RefAttributes<HTMLAnchorElement>;

export interface IPokemonSummary {
  id: number;
  name: string;
  image?: string;
  health?: number;
  attack?: number;
  defense?: number;
}