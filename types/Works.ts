export type WorkImageTypes = {
  altText: string;
  mediaItemUrl: string;
  sizes: string;
};
export type WorkTechnology = {
  icon: string;
  name: string;
}
export type WorkDataItem = {
  id: string;
  title: string;
  cetagories: { icon: string; name: string };
  images: WorkImageTypes[];
  technologise: WorkTechnology[];
  thumb: string;
  attactmentUrl: string;
  isOpen: boolean;
  openSourceURL: string;
  discription: string;
  attachmentType: string;
  isDownloadble: boolean;
};

export type WorkListProps = {
  data: WorkDataItem[];
  activeValue: string;
};
