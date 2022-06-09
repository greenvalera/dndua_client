import React, {FC} from "react";
import {RACE_QUERY} from "../../components/races/graphql/race.gql";
import client from "../../graphql/client";
import Page from "../../components/page";
import {RaceData, RaceListData, RaceVars} from "../../components/races/graphql/interfaces";
import PageSkeleton from "../../components/layout/PageSkeleton";
import useLoading from "../../utils/useLoading";
import {RACES_QUERY} from "../../components/races/graphql/rases.gql";

interface RacePageProps {
  content: string;
}

const RacePage: FC<RacePageProps> = ({content}) => {
  const loading = useLoading();

  if (loading) {
    return (<PageSkeleton />);
  }

  return (
    <Page content={content}/>
  )
}

export async function getStaticProps(context) {
  const {id} = context.params;
  const {data} = await client.query<RaceData, RaceVars>({
    query: RACE_QUERY,
    variables: {id}
  })

  return {
    props: {
      content: data.race.page.content,
    }, // will be passed to the page component as props
  }
}

export async function getStaticPaths() {

  const {data} = await client.query<RaceListData>({query: RACES_QUERY});
  const paths = data.races.map(race => {
    return {
      params: {id: race.id}
    }
  });
  return {
    paths,
    fallback: false
  }
}

export default RacePage;
