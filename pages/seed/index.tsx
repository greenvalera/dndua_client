import { Box } from "@mui/material";
import {FC, useState} from "react";
import ClientOnly from "../../components/ui/ClientOnly";
import SourcesInit from "../../src/components/seeds/SourcesInit";
import RacesInit from "../../src/components/seeds/RacesInit";

/**
 * Page for initialize db by default data sets
 * @constructor
 */
const SpellListPage: FC = () => {
  const [log, setLog] = useState<string[]>([]);

  /**
   * Update and show events log
   * @param input
   */
  const updateLog = async (input: string[]): Promise<void> => {
    const updatedLog = [...log];
    await setLog(updatedLog.concat(input));
  };

  return (
    <ClientOnly>
      <SourcesInit updateHandler={updateLog}/>
      <RacesInit updateHandler={updateLog}/>
      <Box>
        {log.map((logItem, i) => (
          <p key={i}>{logItem}</p>
        ))}
      </Box>
    </ClientOnly>
  );
};

export default SpellListPage;