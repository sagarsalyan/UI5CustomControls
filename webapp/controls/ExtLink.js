sap.ui.define([
	"sap/m/Link"
], function (Link) {
	"use strict";
	return Link.extend("App.CustomControls.controls.ExtLink", {
		metadata: {
			properties: {
				"url": {
					type:"string"
				}
			}
		},
		setUrl:function(url){
			this.setProperty("url",url,true);         
		},
		renderer: {	}
	});
});