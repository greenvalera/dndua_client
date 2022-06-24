import {FC, useCallback} from "react";
import CREATE_SPELL_MUTATION from "../graphQl/createSpell.gql";
import {useMutation} from "@apollo/client";
import CreateSpellForm from "../components/SpellCreateForm";

export const CreateSpell: FC = () => {
  const [createSpell] = useMutation(CREATE_SPELL_MUTATION);

  const handleSubmit = useCallback(async (data) => {
    try {
        await createSpell({variables: {params: data}});
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