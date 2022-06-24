import {FC} from "react";
import {useRouter} from "next/router";
import ClientOnly from "../../../components/ui/ClientOnly";
import {EditSpell} from "../../../components/spell";

export const EditSpellPage: FC = () => {
  const router = useRouter();

  if (!router.isReady) {
    return null;
  }

  const { id } = router.query;

  return (
    <ClientOnly>
      <EditSpell id={id.toString()} />
    </ClientOnly>
  );
};

export default EditSpellPage;