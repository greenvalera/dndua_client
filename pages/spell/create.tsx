import {FC, useCallback} from "react";
import {CreateSpellForm, CREATE_SPELL_MUTATION} from "../../components/spell";
import {useMutation} from "@apollo/client";

export const CreateSpellPage: FC = () => {
  const [createSpell, {data, loading, error}] = useMutation(CREATE_SPELL_MUTATION);

  const onSubmit = useCallback(async (data) => {
    try {
      const spell = await createSpell({variables: {params: data}});

    } catch (e) {
      console.log(e);
    }
  }, [])

  return (
        <>
          <CreateSpellForm onSubmit={onSubmit}/>
        </>
  )
}

export default CreateSpellPage;