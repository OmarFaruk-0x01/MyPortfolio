import { gql } from "@apollo/client";

export const MediaCore = gql`
  fragment Img on MediaItem {
    mediaItemUrl
    altText
    sizes
  }
`;


export const showCase = gql`
${MediaCore}
fragment projectShowCase on Work_Workattr_ProjectShowcase {
  img1 {
    ...Img
  }
  img2 {
    ...Img
  }
  img3 {
    ...Img
  }
  img4 {
    ...Img
  }
  img5 {
    ...Img
  }
  img6 {
    ...Img
  }
}
`