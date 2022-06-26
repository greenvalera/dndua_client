import {FC, useCallback} from "react";
import {useRouter} from "next/router";
import {useMutation, useQuery} from "@apollo/client";
import {Fab, Stack} from "@mui/material";
import Box from "@mui/material/Box";
import AddIcon from '@mui/icons-material/Add';
import {SpellListQueryResult} from "../graphQl/interfaces";
import SPELL_LIST_QUERY from "../graphQl/spellListQuery.gql";
import PageSkeleton from "../../layout/PageSkeleton";
import ErrorPage from "../../layout/ErrorPage";
import SpellItem from "../components/SpellItem";
import DELETE_SPELL from "../graphQl/deleteSpell";

const fabStyle = {
  position: 'absolute',
  bottom: 16,
  right: 16,
};

const SpellList: FC = () => {
  const router = useRouter();

  const handleCreate = () => {
    router.push('/spell/create');
  };

  const getHandleEdit = useCallback((id) => () => {
    router.push(`/spell/edit/${id}`);
  }, [router]);

  const [deleteSpell] = useMutation(DELETE_SPELL);

  const getHandleDelete = (id) => async () => {
      await deleteSpell({
        variables: {id},
        refetchQueries: [
          {query: SPELL_LIST_QUERY},
          'SpellListQuery'
        ]
      });
  };

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
          <SpellItem spell={spell} getHandleEdit={getHandleEdit} getHandleDelete={getHandleDelete} key={spell.id}/>
        ))}
      </Stack>
      <Fab color="primary" aria-label="add" sx={fabStyle} onClick={handleCreate}>
        <AddIcon />
      </Fab>
    </Box>
  );
};

export default SpellList;