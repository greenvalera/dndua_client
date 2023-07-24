import {FC} from "react";
import client from "../../graphql/client";
import Page from "../../components/page";
import {ClassData, ClassesData, ClassVars} from "../../components/classes/graphql/interfaces";
import useLoading from "../../utils/useLoading";
import PageSkeleton from "../../components/layout/PageSkeleton";
import {CLASSES_QUERY} from "../../components/classes/graphql/classes.gql";
import {CLASS_QUERY} from "../../components/classes/graphql/class.gql";

interface ClassPageProps {
  content: string;
}

const ClassPage: FC<ClassPageProps> = ({content}) => {
  const loading = useLoading();

  if (loading) {
    return (<PageSkeleton />);
  }
  return (
    <Page content={content}/>
  )
}

export async function getStaticPaths() {
  const {data} = await client.query<ClassesData>({
    query: CLASSES_QUERY,
  });

  return {
    paths: data.classes.map(({id}) => ({params: {id}})),
    fallback: false, // can also be true or 'blocking'
  }
}

export async function getStaticProps({params}) {
  const {id} = params;
  const {data} = await client.query<ClassData, ClassVars>({
    query: CLASS_QUERY,
    variables: {id}
  })

  return {
    props: {
      content: data.class.page.content,
    }, // will be passed to the page component as props
  }
}

export default ClassPage;