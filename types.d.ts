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

export interface IPokemonType {
  slot: number;
  type: { name: string; url: string };
}

export interface IPokemonDetail {
  id: number;
  name: string;
  health: number;
  attack: number;
  specialAttack: number;
  defense: number;
  specialDefense: number;
  speed: number;
  height: number;
  weight: number;
  experience: number;
  types: IPokemonType[];
}
