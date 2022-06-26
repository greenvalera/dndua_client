import {FC, useCallback} from "react";
import CREATE_SPELL_MUTATION from "../graphQl/createSpell.gql";
import {useMutation} from "@apollo/client";
import CreateSpellForm from "../components/SpellCreateForm";
import {useRouter} from "next/router";
import SPELL_LIST_QUERY from "../graphQl/spellListQuery.gql";

export const CreateSpell: FC = () => {
  const [createSpell] = useMutation(CREATE_SPELL_MUTATION);
  const router = useRouter();

  const handleSubmit = useCallback(async (data) => {
    try {
        await createSpell({
          variables: {params: data},
          refetchQueries: [
            {query: SPELL_LIST_QUERY},
            'SpellListQuery'
          ]
        });
        router.push('/spell');
    } catch (e) {
      console.log(e);
    }
  }, [])

  return (
    <>
      <CreateSpellForm handleSubmit={handleSubmit}/>
    </>
  )
}

export default CreateSpell;