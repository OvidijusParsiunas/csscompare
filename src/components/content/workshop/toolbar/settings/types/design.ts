import { JAVASCRIPT_CLASSES } from '../../../../../../consts/javascriptClasses.enum';
import { SETTINGS_TYPES } from '../../../../../../consts/settingsTypes.enum';

// create an optional interface
export default {
  options: [
    {
      type: SETTINGS_TYPES.CHECKBOX,
      spec: {
        name: 'Ripples',
        javascript: true,
        default: false,
        jsClassName: JAVASCRIPT_CLASSES.RIPPLES,
      },
      // spec: {
      //   name: 'Material',
      //   default: false,
      //   conditionalStyle: {
      //     truthy: '',
      //     falsy: '',
      //   },
      //   downloadables: {
      //     jsFileContent: downloadableJS,
      //     cssFileContent: downloadableCSS,
      //   }
      // },
    },
  ]
};
