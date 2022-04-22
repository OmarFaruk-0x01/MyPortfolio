import {OfferCard, WorkCard, WritingCard} from './DataTypes.interface'

export interface LayoutProps {
    pageTitle: string;
    profileImage: string;
    coverImage: string;
    title: string | JSX.Element;
    details: string | JSX.Element;
    quote?: string | JSX.Element;
}
export interface NavBarProps{
    isOnTop?: boolean
    isToggled?: boolean
}
export interface NavLinkProps {
    title: string;
    href: string;
    isActive: boolean;
}
export interface OfferCardProps extends OfferCard{
    dir?: string;
}
export interface HireMeCVButtonProps {}
export interface OfferCardContainerProps{
    offers: OfferCard[]
}
export interface SectionDeviderProps {
    title: string;
    isCenter?: boolean;
    underScore?: boolean;
    leftCircle?: boolean;
    rightCicle?: boolean;
  }
export interface WorksContainerProps{
    works: WorkCard[]
}
export interface WorkCardProps{
    workInfo: WorkCard;
}

export interface WritingCardProps{
    workInfo: WritingCard;
}
export interface WritingsContainerProps{
    writings: WritingCard[]
}