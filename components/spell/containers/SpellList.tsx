import {FC, useCallback} from "react";
import {useQuery} from "@apollo/client";
import {SpellListQueryResult} from "../graphQl/interfaces";
import SPELL_LIST_QUERY from "../graphQl/spellListQuery.gql";
import PageSkeleton from "../../layout/PageSkeleton";
import ErrorPage from "../../layout/ErrorPage";
import SpellItem from "../components/SpellItem";
import {Stack} from "@mui/material";
import Box from "@mui/material/Box";
import {useRouter} from "next/router";

const SpellList: FC = () => {
  const router = useRouter();

  const getHandleEdit = useCallback((id) => () => {
    router.push(`/spell/edit/${id}`);
  }, [router]);

  const {data, loading, error} = useQuery<SpellListQueryResult>(SPELL_LIST_QUERY);

  if(loading) {
    return (<PageSkeleton />);
  }

  if (error) {
    console.log(error);
    return (<ErrorPage />);
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Stack spacing={2}>
        {data.spellList.map((spell) => (
          <SpellItem spell={spell} getHandleEdit={getHandleEdit} key={spell.id}/>
        ))}
      </Stack>
    </Box>
  );
};

export default SpellList;