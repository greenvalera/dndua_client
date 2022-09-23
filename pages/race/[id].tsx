import {FC} from "react";
import client from "../../graphql/client";
import Page from "../../components/page";
import {RaceData, RacesData, RaceVars} from "../../components/races/graphql/interfaces";
import PageSkeleton from "../../components/layout/PageSkeleton";
import useLoading from "../../utils/useLoading";
import {RACES_QUERY} from "../../components/races/graphql/races.gql";
import {RACE_QUERY} from "../../components/races/graphql/race.gql";

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

export async function getStaticPaths() {
  const {data} = await client.query<RacesData>({
    query: RACES_QUERY,
  });

    return {
      paths: data.races.map(({id}) => ({params: {id}})),
      fallback: false, // can also be true or 'blocking'
  }
}

export async function getStaticProps({params}) {
  const {id} = params;
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

export default RacePage;
