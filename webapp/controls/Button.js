sap.ui.define([
	"sap/ui/core/Control"
],function(Control){
	"use strict";
	return Control.extend("App.CustomControls.controls.Button",{
		
		metadata : {
			properties : {
				"width" : {
					type : "sap.ui.core.CSSSize",
					defaultValue : "300px"
				},
				"height" : {
					type : "sap.ui.core.CSSSize",
					defaultValue : "100px"
				},
				"text" : {
					type : "string"
				}
			},
			events : {
				"hovver" : {}
			}
		},
		init : function(){
			
		},
		onmouseover : function(){
			// this.fireHovver(); 
			this.fireEvent('hovver');
		},
		renderer : function(oRM, oControl){
			oRM.write("<div");
			oRM.writeControlData(oControl);
			oRM.addStyle("width",oControl.getProperty('width'));
			oRM.addStyle("height",oControl.getProperty('height'));
			oRM.writeStyles();
			oRM.write(">");
			oRM.write("<button type='button'");
			oRM.addStyle("width",oControl.getProperty('width'));
			oRM.addStyle("height",oControl.getProperty('height'));
			oRM.writeStyles();
			oRM.write(">");
			oRM.write(oControl.getProperty('text'));
			oRM.write("</button>");
			oRM.write("<div");
		}
		
	});
});