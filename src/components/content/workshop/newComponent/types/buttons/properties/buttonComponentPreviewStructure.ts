import { ComponentPreviewStructure, SubcomponentProperties } from '../../../../../../../interfaces/workshopComponent'
import { PSEUDO_COMPONENTS } from '../../../../../../../consts/pseudoComponents.enum'

export default function createButtonComponentPreviewStructure(baseComponent: SubcomponentProperties): ComponentPreviewStructure {
  return {
    baseCss: baseComponent,
    shallowSubcomponents: {
      [PSEUDO_COMPONENTS.TEXT]: 'button',
    },
  };
}
