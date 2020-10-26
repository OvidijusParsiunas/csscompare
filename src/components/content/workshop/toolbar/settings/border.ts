// create an optional interface
export default {
  options: [
    { 
      type: 'range',
      spec: {
        name: 'Radius',
        default: 0,
        scale: [0, 100],
        smoothingDivisible: 4,
        cssProperty: 'borderRadius'
      },
    },
    { 
      type: 'range',
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
          conditions: [undefined],
        },
        {
          cssProperty: 'borderStyle',
          defaultValue: 'solid',
          conditions: [undefined, 'none', 'hidden'],
          selector: true,
        }
      ]
    },
    { 
      type: 'select',
      spec: {
        name: 'Style',
        options: ['none', 'hidden', 'dotted', 'dashed', 'solid', 'double', 'groove', 'ridge', 'inset', 'outset'],
        default: 'none',
        cssProperty: 'borderStyle'
      },
    },
    { 
      type: 'colorPicker',
      spec: {
        name: 'Color',
        default: '#000000',
        cssProperty: 'borderColor'
      },
    }
  ]
};
