import {FC} from "react";
import {
  CreateRaceMutation,
  DeleteRaceMutation,
  ListRacesQuery,
  Race
} from "../../API";
import {API, graphqlOperation} from "aws-amplify";
import {GraphQLQuery} from "@aws-amplify/api";
import {listRaces} from "../../graphql/queries";
import racesSeed from "../../../seeds/races";
import {createRace, deleteRace} from "../../graphql/mutations";
import {Button, Grid} from "@mui/material";

//TODO: make common component for seeds
type Props = {
  updateHandler: (log: string[]) => Promise<void>;
};

const SourcesInit: FC<Props> = ({updateHandler}) => {
  const getSources = async () => {
    const result = await API.graphql<GraphQLQuery<ListRacesQuery>>(
      graphqlOperation(listRaces)
    );

    return result?.data?.listRaces?.items as Race[];
  };

  const getSourcesHandler = async () => {
    const result = await getSources();
    const log: string[] = [];

    if (result.length) {
      log.push('Existed Races:');
      result.map(item => log.push(item.name));
      log.push("---------------------");
    } else {
      log.push("Races aren't existed");
    }
    await updateHandler(log);
  };

  const initSources = async () => {
    const existedSources = await getSources();

    const inputSources = racesSeed.filter(source => {
      return !existedSources.find(sourceFromState => sourceFromState.id == source.id)
    });

    if (!inputSources.length) {
      await updateHandler(['No Races to create']);
      return;
    }

    const log: string[] = [];

    for (const source of inputSources) {
      const result = await API.graphql<GraphQLQuery<CreateRaceMutation>>(
        graphqlOperation(createRace, {input: source})
      );
      log.push(`Race created: ${result.data?.createRace?.name}`);

      await updateHandler(log);
    }
  };

  const deleteSources = async () => {
    const existedSources = await getSources();

    if(!existedSources.length) {
      await updateHandler(['No Races to remove']);
      return;
    }

    const log = [];
    for (const source of existedSources) {
      const result = await API.graphql<GraphQLQuery<DeleteRaceMutation>>(
        graphqlOperation(deleteRace, {input: {id: source.id}})
      );

      log.push(`Race removed ${result?.data?.deleteRace?.name}`);
    }

    await updateHandler(log);
  }

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item>
          <Button onClick={initSources}>Init races</Button>
        </Grid>
        <Grid item>
          <Button onClick={getSourcesHandler}>Get races</Button>
        </Grid>
        <Grid item>
          <Button onClick={deleteSources}>Delete races</Button>
        </Grid>
        </Grid>
    </div>
  );
};

export default SourcesInit;