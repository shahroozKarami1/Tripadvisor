import React from "react";

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
    textTitle: string;
    placeholder: string;
  }[];
  fontSize: string;
  HandlerBtn: (a: string, b: string, c?: boolean) => void;
  isFlight?: boolean;
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

export interface IReviewsCardProps {
  title: string;
  score: number;
  link: string;
  profile: string;
  comment: string;
  topRateIn: string;
}
export interface IParagraphProps {
  header: string;
  textBody: string;
}
export interface ICardRentalProps {
  TopCover: string;
  textBody: string;
}
export interface ICardSingleTextProps {
  TopCover: string;
  textBody: string;
}

export interface ITravelerBoxProps {}

export interface IRangeOfPeopleProps {
  range: string;
  age: string;
}
export interface IBtnMenusProps {
  icon: React.ReactNode;
  textOnBtn: string;
  isWhereToInp: boolean;
  children: React.ReactNode;
}

export interface ICardDetailsProps {
  coverImg: string;
  title: string;
  disc: string;
}

export interface ICardDealsProps {
  beforeDisCount: number;
  AfterDisCount: number;
  nameShip: string;
  date: string;
  departs: string;
  countDay: number;
  distination: string;
}

export interface ICardWhiteBottomProps {
  coverImg: string;
  name: string;
  link: string;
}
export interface IListOfForumProps {
  title: string;
  DataArrListFormus: { text: string; link: string }[];
}

export interface IPopularFourmsCardProps {
  name: string;
  numberTopics: number;
  coverImg: string;
}

export interface ITabItemCompProps {
  children: React.ReactNode;
  index: number;
  value: number;
}

export interface IInpsForAddProps {
  label: string;
  isOptional: boolean;
  isSelectBox: boolean;
  icon?: React.ReactNode;
  position: "end" | "start";
  isIcon: boolean;
  setIsOpenNewAddressBox ?: React.Dispatch<React.SetStateAction<boolean>> | null  ;
}

export interface  IBoxOfHeaderProps {
  icon : React.ReactNode
  text : string  ;   
} 
  export interface IStartAndBuildCardProps {
  title  :  string  ;  
  cover :  string  ;  
  disc  : string ;
  textBtn  :  string ;  
  colorBack  :  string ;  
  colorBtn   :    {
    colorText   : string  ;  
    colorBack : string
  } ;   

}