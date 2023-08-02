import {FC} from "react";
import {withSSRContext} from "aws-amplify";
import Page from "../../components/page";
import PageSkeleton from "../../components/layout/PageSkeleton";
import useLoading from "../../utils/useLoading";
import {getRace, listRaces} from "../../src/graphql/queries";
import {Race} from "../../src/API";
import { GetStaticProps, GetStaticPaths } from 'next';

interface Props {
  content: string;
}

const RacePage: FC<Props> = ({content}) => {
  const loading = useLoading();

  if (loading) {
    return (<PageSkeleton />);
  }

  if (!content) {
    return (<p>Oops! Content is not found!</p>);
  }

  return (
    <Page content={content}/>
  )
}

type StaticPathParams = {id: string | undefined};

export const getStaticPaths: GetStaticPaths<StaticPathParams> = async () => {
  const SSR = withSSRContext();
  const response = (await SSR.API.graphql({query: listRaces}));

  return {
    paths: response?.data?.listRaces?.items.map(((item: Race) => ({params: {id: item.id}}))),
    fallback: true,
  };
}

export const getStaticProps: GetStaticProps = async ({params}) => {
  const SSR = withSSRContext();
  const response = await SSR.API.graphql({query: getRace, variables: {id: params?.id}})

  const content = response.data.getRace.content;

  if (!content) {
    console.log(`Content is not found for race with ID ${params?.id}`);
  }

  return {
    props: {
      content: response.data.getRace.content,
    }, // will be passed to the page component as props
  }
}

export default RacePage;
