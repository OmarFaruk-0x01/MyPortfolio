export interface OfferCard{
    imageUrl: string;
    title: string;
    short_disp: string;
    expretIn: {url: string, name: string}[];
    services: string[];
}
export interface WorkCard{
    id: string;
    title: string;
    thumbnailUrl: string;
    cetagory: string;
    createdAt: Date;
    discription: string;
}

export interface WritingCard extends WorkCard{
    tags: string[];
}

export interface ScrollEvent extends Event{
    originalTarget: {scrollingElement: {scrollTop: number}};
}