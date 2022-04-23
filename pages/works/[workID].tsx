import React from "react";
import WorkDetails from "../../components/ListItems/WorkDetails";
import useQuery from "../../Hooks/UseQuery";
import { CustomFieldsGQL, GetWorkById } from "../../Queries";

const WorkPage: React.FC<{ workData }> = ({ workData }) => {
  // console.log(workData.content.trim() + 'WorkPage');
  
  return <WorkDetails workData={workData} />;
};

export default WorkPage;

// export async function getStaticPaths(ctx: GetStaticPathsContext){
//   const { data } = await useQuery(CustomFieldsGQL(`
//   works{
//     nodes{
//       id
//     }
//   }
//   `));
//   const paths = data.works.nodes.map(node => `/works/${node.id}`)
  
//   return {
//     paths,
//     fallback: false,
//   }
  
// }

export async function getServerSideProps(ctx) {
  const { data: WorkData, error } = await useQuery(GetWorkById, {
    ID: ctx.params.workID,
  });
  // console.log(WorkData, error);
  
   if (error || !WorkData.work) {
     return {
          notFound: true
        } 
   } else {
     return {
       props: { workData: WorkData.work },
     };
    }
}