import { SETTINGS_TYPES } from '../../../../../../consts/settingsTypes.enum';

// create an optional interface
export default {
  options: [
    { 
      type: SETTINGS_TYPES.RANGE,
      spec: {
        name: 'Radius',
        default: 0,
        scale: [0, 120],
        smoothingDivisible: 4,
        cssProperty: 'borderRadius'
      },
    },
    {
      type: SETTINGS_TYPES.RANGE,
      spec: {
        name: 'Width',
        default: 0,
        scale: [0, 100],
        smoothingDivisible: 4,
        cssProperty: 'borderWidth'
      },
      triggers: [
        {
          cssProperty: 'borderColor',
          defaultValue: '#000000',
          conditions: new Set([undefined]),
        },
        {
          cssProperty: 'borderStyle',
          defaultValue: 'solid',
          conditions: new Set([undefined, 'none', 'hidden']),
          selector: true,
        }
      ]
    },
    { 
      type: SETTINGS_TYPES.SELECT,
      spec: {
        name: 'Style',
        options: ['none', 'hidden', 'dotted', 'dashed', 'solid', 'double', 'groove', 'ridge', 'inset', 'outset'],
        default: 'none',
        cssProperty: 'borderStyle'
      },
      triggers: {
        none: {
          cssProperty: 'borderWidth',
          defaultValue: '0px',
          negativeConditions: new Set([0, undefined]),
        },
      },
    },
    {
      type: SETTINGS_TYPES.COLOR_PICKER,
      spec: {
        name: 'Color',
        default: '#000000',
        cssProperty: 'borderColor',
        unsetColorButtonAvailable: false,
      },
    }
  ]
};
