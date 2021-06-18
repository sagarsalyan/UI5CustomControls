sap.ui.define([
  "sap/m/SliderTooltipBaseRenderer",
], function(SliderTooltipBaseRenderer) {
  "use strict";

  return Object.assign(SliderTooltipBaseRenderer, {
    renderTooltipContent: (oRm, oControl) =>
      oRm.openStart("div", oControl.getId() + "-inner")
        .class("demoMySliderTooltip")
        .class("sapMSliderTooltipInput")
        .class(SliderTooltipBaseRenderer.CSS_CLASS)
        .openEnd()
        .text("Day " + oControl.getDayValue())
        .close("div"),
  });
});