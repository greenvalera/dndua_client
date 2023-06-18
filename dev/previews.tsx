import React from 'react';
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox';
import {PaletteTree} from './palette';
import CreateSpellForm from "../components/spell/components/SpellCreateForm";

const ComponentPreviews = () => {
  return (
    <Previews palette={<PaletteTree/>}>
      <ComponentPreview path="/CreateSpellForm">
        <CreateSpellForm/>
      </ComponentPreview>
    </Previews>
  );
};

export default ComponentPreviews;