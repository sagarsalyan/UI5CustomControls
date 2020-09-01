sap.ui.define([
	"sap/ui/core/Control",
	"sap/m/Button",
	"sap/m/Text"
], function (Control, Button, Text) {
	"use restrict";
	return Control.extend("App.CustomControls.controls.Notification", {
		metadata: {
			properties: {
				"icon": {
					type: "sap.ui.core.Icon"
				},
				"count": {
					type: "int"
				}
			},
			aggregations: {
				_button: {
					type: "sap.m.Button",
					multiple: false,
					visibility: "hidden"
				},
				_count: {
					type: "sap.m.Text",
					multiple: false,
					visibility: "public"
				}
			},
			events: {
				press: {
					enablePreventDefault: true
				}
			}
		},
		init: function () {
			var oIcon = new Button();
			var oCount = new Text();
			this.setAggregation("_button",oIcon);
			this.setAggregation("_count",oCount);
		},
		setIcon: function (icon) {
			this.setProperty("icon", icon);
			this.getAggregation("_button").setIcon(icon);
		},
		setCount: function (count) {
			this.setProperty("count", count);
			this.getAggregation("_count").setText(count);
		},
		renderer:function(oRm,oControl){
			oRm.write("<div");
			oRm.writeControlData(oControl);
			oRm.addStyle("width", "10px");
			oRm.addStyle("height", "10px");
			oRm.writeStyles();
			oRm.write(">");
			oRm.write("<div style='display:inline-block;position:relative'>");
			oRm.renderControl(oControl.getAggregation("_button"));
			oRm.write("<div style='background-color:red;position:absolute;top:-5px;right:-7px;padding:3px 8px; border-radius:50%'>");
			oRm.renderControl(oControl.getAggregation("_count"));
			oRm.write("</div>");
			oRm.write("</div>");
			oRm.write("</div>");
		}
	});
});