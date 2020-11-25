<template>
  <div v-if="componentType === NEW_COMPONENT_TYPES.ALERT">
    <button class="close-button" type="button" aria-label="Close">
      <div aria-hidden="true"
        @mouseenter="componentMouseEnter()"
        @mouseleave="componentMouseLeave()"
        @mousedown="componentMouseDown()"
        @mouseup="componentMouseUp()"
        :style="subcomponent.customCssActiveMode === SUB_COMPONENT_CSS_MODES.CLICK
          ? [
              [ subcomponent.inheritedCss ? subcomponent.inheritedCss.css: '' ],
              subcomponent.customCss[SUB_COMPONENT_CSS_MODES.DEFAULT],
              subcomponent.customCss[SUB_COMPONENT_CSS_MODES.HOVER],
              subcomponent.customCss[SUB_COMPONENT_CSS_MODES.CLICK],
            ]
          : [
              [ subcomponent.inheritedCss ? subcomponent.inheritedCss.css: '' ],
              subcomponent.customCss[SUB_COMPONENT_CSS_MODES.DEFAULT],
              subcomponent.customCss[subcomponent.customCssActiveMode],
            ]"
        >×</div>
    </button>
  </div>
</template>

<script lang="ts">
import { SUB_COMPONENT_CSS_MODES } from '@/consts/subcomponentCssModes.enum';
import { NEW_COMPONENT_TYPES } from '../../../../consts/newComponentTypes.enum';
import { SUB_COMPONENTS } from '../../../../consts/subcomponentModes.enum';

interface Data {
  SUB_COMPONENT_CSS_MODES;
  NEW_COMPONENT_TYPES;
  SUB_COMPONENTS;
}

export default {
  data: (): Data => ({
    SUB_COMPONENT_CSS_MODES,
    NEW_COMPONENT_TYPES,
    SUB_COMPONENTS,
  }),
  // repeated code as in component preview
  methods: {
    componentMouseEnter(): void {
      const { customCss, transition, customCssActiveMode } = this.subcomponent;
      if (customCssActiveMode === SUB_COMPONENT_CSS_MODES.DEFAULT) {
        this.overwrittenDefaultPropertiesByHover = { ...customCss[SUB_COMPONENT_CSS_MODES.DEFAULT], transition };
        customCss[SUB_COMPONENT_CSS_MODES.DEFAULT] = { ...customCss[SUB_COMPONENT_CSS_MODES.DEFAULT], ...customCss[SUB_COMPONENT_CSS_MODES.HOVER], transition };
      }
    },
    componentMouseLeave(): void {
      const { customCss, customCssActiveMode } = this.subcomponent;
      if (customCssActiveMode === SUB_COMPONENT_CSS_MODES.DEFAULT) {
        customCss[SUB_COMPONENT_CSS_MODES.DEFAULT] = { ...this.overwrittenDefaultPropertiesByHover };
      }
    },
    componentMouseDown(): void {
      const { customCss, transition, customCssActiveMode } = this.subcomponent;
      if (customCssActiveMode === SUB_COMPONENT_CSS_MODES.DEFAULT) {
        this.overwrittenDefaultPropertiesByClick = { ...customCss[SUB_COMPONENT_CSS_MODES.DEFAULT], transition };
        customCss[SUB_COMPONENT_CSS_MODES.DEFAULT] = { ...customCss[SUB_COMPONENT_CSS_MODES.DEFAULT], ...customCss[SUB_COMPONENT_CSS_MODES.CLICK], transition };
      }
    },
    componentMouseUp(): void {
      const { customCss, customCssActiveMode } = this.subcomponent;
      if (customCssActiveMode === SUB_COMPONENT_CSS_MODES.DEFAULT) {
        customCss[SUB_COMPONENT_CSS_MODES.DEFAULT] = { ...this.overwrittenDefaultPropertiesByClick };
      }
    },
    componentPreviewMouseLeave(): void {
      this.subcomponent.customCss[SUB_COMPONENT_CSS_MODES.DEFAULT].transition = 'unset';
    }
  },
  props: {
    componentType: String,
    subcomponent: Object,
  }
}

// fix transition only on hover
// transition: all 0.25s ease-out 0s;
</script>

<style lang="css" scoped>
  /* this will need to be inherited css */
  .close-button {
    position: absolute;
    top: 0px;
    right: 0px;
    /* the close button height will remain the same */
    height: 48px;
    background-color: inherit;
    border: none;
    cursor: default !important;
  }
  .close-button:focus {
    outline: none;
  }
</style>