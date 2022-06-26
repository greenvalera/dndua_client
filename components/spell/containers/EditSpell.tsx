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

  const handleSubmit = async (params) => {
      await updateSpell({
        variables: {
          id,
          params
        },
        update: (cache, { data: { updateSpell } }) => {
          const data = {spell: updateSpell};
          cache.writeQuery({ query: SPELL_QUERY, variables: {id}, data});
        },
        refetchQueries: [
          {query: SPELL_LIST_QUERY},
          'SpellListQuery'
        ]
      });

      router.push('/spell');
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