sap.ui.define([
  "sap/m/SliderTooltipBase",
  "./MySliderTooltipRenderer",
  "sap/ui/dom/includeStylesheet",
], function(SliderTooltipBase, MySliderTooltipRenderer, includeStylesheet) {
  "use strict";

  includeStylesheet({ // lazy load style
    id: "mySliderTooltipStyle",
    url: sap.ui.require.toUrl("App/CustomControls/controls/MySliderTooltip/MySliderTooltip.css"),
  });

  return SliderTooltipBase.extend("App.CustomControls.controls.MySliderTooltip.MySliderTooltip", {
    metadata: {
      properties: {
        dayValue: {
          type: "int",
          defaultValue: 0,
        },
      }
    },

    renderer: MySliderTooltipRenderer,

    sliderValueChanged: function(iValue) {
      return this.setDayValue(iValue);
    },

  });
});