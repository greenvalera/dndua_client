import {FC} from "react";
import ClientOnly from "../../components/ui/ClientOnly";
import {SpellList} from "../../components/spell";

const SpellListPage: FC = () => {
  return (
    <ClientOnly>
      <SpellList />
    </ClientOnly>
  );
};

export default SpellListPage