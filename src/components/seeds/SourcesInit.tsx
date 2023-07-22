import {FC} from "react";
import {CreateSourceMutation, DeleteSourceMutation, ListSourcesQuery, Source} from "../../API";
import {API, graphqlOperation} from "aws-amplify";
import {GraphQLQuery} from "@aws-amplify/api";
import {listSources} from "../../graphql/queries";
import sources from "../../../seeds/sources";
import {createSource, deleteSource} from "../../graphql/mutations";
import {Button, Grid} from "@mui/material";

type SourcesInitProps = {
  updateHandler: (log: string[]) => Promise<void>;
};

const SourcesInit: FC<SourcesInitProps> = ({updateHandler}) => {
  const getSources = async () => {
    const sourcesResult = await API.graphql<GraphQLQuery<ListSourcesQuery>>(
      graphqlOperation(listSources)
    );

    return sourcesResult?.data?.listSources?.items as Source[];
  };

  const getSourcesHandler = async () => {
    const result = await getSources();
    const log: string[] = [];
    if (result.length) {
      log.push('Existed Sources:');
      result.map(item => log.push(item.name));
      log.push("---------------------");
    } else {
      log.push("Sources aren't existed");
    }
    await updateHandler(log);
  };

  const initSources = async () => {
    const existedSources = await getSources();

    const inputSources = sources.filter(source => {
      return !existedSources.find(sourceFromState => sourceFromState.id == source.id)
    });

    if (!inputSources.length) {
      await updateHandler(['No Sources to create']);
      return;
    }

    const log: string[] = [];

    for (const source of inputSources) {
      const result = await API.graphql<GraphQLQuery<CreateSourceMutation>>(
        graphqlOperation(createSource, {input: source})
      );
      console.log('Source created', result);
      log.push(`Source created: ${result.data?.createSource?.name}`);

      await updateHandler(log);
    }
  };

  const deleteSources = async () => {
    const existedSources = await getSources();

    if(!existedSources.length) {
      await updateHandler(['No Sources to remove']);
      return;
    }

    const log = [];
    for (const source of existedSources) {
      const result = await API.graphql<GraphQLQuery<DeleteSourceMutation>>(
        graphqlOperation(deleteSource, {input: {id: source.id}})
      );

      log.push(`Source removed ${result?.data?.deleteSource?.name}`);
    }

    await updateHandler(log);
  }

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item>
          <Button onClick={initSources}>Init sources</Button>
        </Grid>
        <Grid item>
          <Button onClick={getSourcesHandler}>Get sources</Button>
        </Grid>
        <Grid item>
          <Button onClick={deleteSources}>Delete sources</Button>
        </Grid>
        </Grid>
    </div>
  );
};

export default SourcesInit;