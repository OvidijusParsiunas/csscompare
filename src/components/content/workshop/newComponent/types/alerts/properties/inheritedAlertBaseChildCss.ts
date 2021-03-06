import { ChildCss } from "../../../../../../../interfaces/workshopComponent";

export const inheritedAlertBaseChildCss: ChildCss[] = [
  {
    elementTag: 'div',
    childNumber: 1,
    inheritedCss: {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      width: 'inherit',
    },
  },
];
