sap.ui.define([
	"sap/m/ObjectStatus"
], function (ObjectStatus) {
	"use strict";

	return ObjectStatus.extend("App.CustomControls.controls.ObjectSpinner", {
		metadata: {
			properties: {
				"spin": {
					type: "boolean",
					defaultValue: false
				}
			}
		},
		init: function () {

			// define variable for control initial loading handling

			this._bInitialLoading = true;

			// execute standard control method

			sap.m.ObjectStatus.prototype.init.apply(this, arguments);

		},
		setSpin: function (flag) {
			this.setProperty("spin", flag);

		},
		onBeforeRendering: function () {
			sap.m.ObjectStatus.prototype.onBeforeRendering.apply(this, arguments);
		},
		onAfterRendering: function () {
			debugger
			sap.m.ObjectStatus.prototype.onAfterRendering.apply(this, arguments);
			if (this.getSpin()) {
				var icon = this.$().find(".sapMObjStatusIcon");
				if (icon.length > 0) {

					icon.rotate(45);

				}

			}
		},

		renderer: "sap.m.ObjectStatusRenderer"
	});
});