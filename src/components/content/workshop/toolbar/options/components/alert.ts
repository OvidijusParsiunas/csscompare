import { COMPONENT_MODES } from '../../../../../../consts/componentModes.enum';
import { WORKSHOP_TOOLBAR_OPTIONS } from '../../../../../../consts/workshopToolbarOptions';
import { ComponentOptions } from '../../../../../../interfaces/componentOptions';

type AlertOptionsModes = COMPONENT_MODES.DEFAULT | COMPONENT_MODES.HOVER | COMPONENT_MODES.CLICK;

export const alertOptions: ComponentOptions<AlertOptionsModes> = {
  [COMPONENT_MODES.DEFAULT]: [
    {
      buttonName: 'Border',
      identifier: WORKSHOP_TOOLBAR_OPTIONS.BORDER,
    },
    {
      buttonName: 'Color',
      identifier: WORKSHOP_TOOLBAR_OPTIONS.COLOR,
    },
    {
      buttonName: 'Shadow',
      identifier: WORKSHOP_TOOLBAR_OPTIONS.SHADOW,
    },
    {
      buttonName: 'Size',
      identifier: WORKSHOP_TOOLBAR_OPTIONS.SIZE,
    },
    {
      buttonName: 'Padding',
      identifier: WORKSHOP_TOOLBAR_OPTIONS.PADDING,
    },
    {
      buttonName: 'Margin',
      identifier: WORKSHOP_TOOLBAR_OPTIONS.MARGIN,
    },
    {
      buttonName: 'Text',
      identifier: WORKSHOP_TOOLBAR_OPTIONS.TEXT,
    },
    {
      buttonName: 'Reset',
      identifier: WORKSHOP_TOOLBAR_OPTIONS.RESET,
    },
  ],
  [COMPONENT_MODES.HOVER]: [
    {
      buttonName: 'Border',
      identifier: WORKSHOP_TOOLBAR_OPTIONS.BORDER,
    },
    {
      buttonName: 'Color',
      identifier: WORKSHOP_TOOLBAR_OPTIONS.COLOR,
    },
    {
      buttonName: 'Shadow',
      identifier: WORKSHOP_TOOLBAR_OPTIONS.SHADOW,
    },
    {
      buttonName: 'Text',
      identifier: WORKSHOP_TOOLBAR_OPTIONS.TEXT,
    },
    {
      buttonName: 'Reset',
      identifier: WORKSHOP_TOOLBAR_OPTIONS.RESET,
    },
  ],
  [COMPONENT_MODES.CLICK]: [
    {
      buttonName: 'Border',
      identifier: WORKSHOP_TOOLBAR_OPTIONS.BORDER,
    },
    {
      buttonName: 'Color',
      identifier: WORKSHOP_TOOLBAR_OPTIONS.COLOR,
    },
    {
      buttonName: 'Shadow',
      identifier: WORKSHOP_TOOLBAR_OPTIONS.SHADOW,
    },
    {
      buttonName: 'Text',
      identifier: WORKSHOP_TOOLBAR_OPTIONS.TEXT,
    },
    {
      buttonName: 'Reset',
      identifier: WORKSHOP_TOOLBAR_OPTIONS.RESET,
    },
    {
      buttonName: 'Design',
      identifier: WORKSHOP_TOOLBAR_OPTIONS.DESIGN,
    },
  ],
};
