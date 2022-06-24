import {FC} from "react";
import {useMutation, useQuery} from "@apollo/client";
import PageSkeleton from "../../../components/layout/PageSkeleton";
import {SpellQueryResult, SpellQueryVariables} from "../graphQl/interfaces";
import SPELL_QUERY from "../graphQl/spellQuery.gql";
import SPELL_LIST_QUERY from "../graphQl/spellListQuery.gql";
import CreateSpellForm from "../components/SpellCreateForm";
import UPDATE_SPELL_MUTATION from "../graphQl/updateSpellMutation.gql";
import {useRouter} from "next/router";

interface EditSpellProps {
  id: string
}

export const EditSpell: FC<EditSpellProps> = ({id}) => {
  const router = useRouter();

  const {data, loading} = useQuery<SpellQueryResult, SpellQueryVariables>(
    SPELL_QUERY,
    {
      variables: {
        id: id
      }
    });

  const [updateSpell] = useMutation(UPDATE_SPELL_MUTATION);

  if (loading) {
    return <PageSkeleton />
  }

  const {
    name,
    enName,
    description,
  } = data.spell;

  const initialValues = {
    name,
    enName,
    description,
    ...data.spell.attributes,
    classes: data.spell.classes.map(item => item.id)
  };

  console.log(initialValues);

  const handleSubmit = async (params) => {
      const result = await updateSpell({
        variables: {
          id,
          params
        },
        refetchQueries: [
          {query: SPELL_LIST_QUERY}, // DocumentNode object parsed with gql
          'SpellListQuery' // Query name
        ]
      });

      router.push('/spell')
  };

  return (
    <>
      <CreateSpellForm
        handleSubmit={handleSubmit}
        initialValues={initialValues}
      />
    </>
  );
};

export default EditSpell;