import { SvgIconProps } from "@mui/material";
import React, { ElementType } from "react";

export interface IDarkBtnProps {
  children: string;
}

type TSubMenu = {
  text: string;
  link: string;
};

export interface ICusManuProps {
  titleMenu: string;
  subMenuArray: TSubMenu[];
}
export interface INavbarMenuProps {
  NavBarMenuArr: {
    title: string;
    icon?: React.ReactNode;
    link?: string;
  }[];
  fontSize: string;
}
export interface ITitleSectionProps {
  mainTitle: string;
  subTitle?: string;
  isSubTitle: boolean;
  isSeeAll?: boolean;
}
export interface IBestFoodsCardProps {
  name: string;
  img: string;
}
export interface IDistinationCardProps {
  name: string;
  img: string;
  item: number;
  title: string;
}
export interface ITourWaysCardProps {
  disc: string;
  score: number;
  price?: number;
  img: string;
  isDetails?: boolean;
}

export interface IMoreExploreCardProps {
  img: string;
  disc: string;
}

interface IdataNextTrip {
  img: string;
  title: string;
}

export type IPorpsNextTrip = {
  dataNextTripArr: IdataNextTrip[];
  mainTitle?: string;
};

export interface IPlanCardProps {
  icon: React.ReactNode;
  title: string;
  disc: string;
}

export interface IMainCardsRestaurant {
  logo: string;
  title: string;
  disc: string;
}
export interface IMainBannerProps {
  children: React.ReactNode;
  bannerUrl: string;
}
export interface ICardTopDistinationProps {
  img: string;
  title: string;
  diec: string;
}
