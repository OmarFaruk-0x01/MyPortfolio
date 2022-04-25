import { gql } from "@apollo/client";
import { MediaCore, showCase } from "./fragments";

export const AllCetagories = gql`
  query AllCetagories {
    cetagories(where:{hideEmpty: true}) {
      nodes {
        name
      }
    }
  }
`;

export const AllWorks = gql`
  ${MediaCore}
  query Works {
    works {
      nodes {
        id
        title
        featuredImage {
          node {
           ...Img
          }
        }
        workAttr {
          isprivate
          opensourceurl
        }
        cetagories {
          nodes {
            name
            cetaAttr {
              icon
            }
          }
        }
      }
    }
  }
`;

export const GetWorkById = gql`
${showCase}
query Work($ID: ID!) {
  work(id: $ID) {
    title
    content
    featuredImage {
      node {
        ...Img
      }
    }
    workAttr {
      isprivate
      opensourceurl
      isdownloadable
      downloadurl
      releaseType
      projectShowcase {
        ...projectShowCase
      }
    }
    cetagories {
      nodes {
        name
        cetaAttr {
          icon
        }
      }
    }
    technologies {
      nodes {
        name
        description
        techAttr {
          image {
            ...Img
          }
          techtype
        }
      }
    }
  }
}
`

export const CustomFieldsGQL =(str) => gql`
  query CustomFieldsWorks{
    ${str}
  }
`

export const AllCertificates = gql`
query Certificates {
	certificates{
    nodes{
      featuredImage{
        node{
          mediaItemUrl
        }
      }
      certificate{
        courseTitle
        courseId
        certificatesLink
        instituteName
        courseTime{
          endDate
        }
      }
    }
  }
}
`

export const AllTechnologies = gql`
query Technologies{
  technologies(where:{hideEmpty:true},first: 20){
    nodes{
      name
      count
      techAttr{
        image{
          mediaItemUrl
        }
        techtype
      }
    }
  }
}
`