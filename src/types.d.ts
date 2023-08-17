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

export interface IPokemonDetail {
  id: number;
  name: string;
  height: number;
  weight: number;
  experience: number;
  abilities: IPokemonDetailAbility[];
  stats: IPokemonStat[];
  types: IPokemonType[];
}

export interface IPokemonDetailType {
  slot: number;
  type: { name: string; url: string };
}
export interface IPokemonType {
  id: number;
  name: string;
  translatedName: string;
}

export interface IPokemonStat {
  value: number;
  name: string;
  translatedName: string;
}

export interface IPokemonDetailAbility {
  name: string;
  translatedName: string;
}
