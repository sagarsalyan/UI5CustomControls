sap.ui.define([
	"sap/m/Select"
], function (Select) {
	"use strict";

	return Select.extend("App.CustomControls.controls.Select", {
		metadata: {

			properties: {

				"addValueEnabled": {

					type: "boolean",

					defaultValue: true

				}

			},

			events: {

				"newValueCreated": {}

			}

		},
		ADD_OPTION_KEY: "__addNewValue",

		ADD_OPTION_TEXT: "Add…",

		init: function () {

			// define variable for control initial loading handling

			this._bInitialLoading = true;

			// execute standard control method

			sap.m.Select.prototype.init.apply(this, arguments);

		},

		onBeforeRendering: function () {

			if (this.getAddValueEnabled()) {

				// check if “add…” option does not exist yet. if so, create it

				if (!this.getItemByKey(this.ADD_OPTION_KEY)) {

					// create add value item and add it to select

					var oItem = new sap.ui.core.Item({

						key: this.ADD_OPTION_KEY,

						text: this.ADD_OPTION_TEXT

					});

					this.insertItem(oItem, 0);

				}

				// set item index if more than one option and initial loading

				if (this._bInitialLoading && this.getItems().length > 1) {

					this.setSelectedItem(this.getItems()[1]);

					// the “onBeforeRendering” method will only be executed again on new option creation

					// further verifications are not necessary

					this._bInitialLoading = false;

				}

			}

			// execute standard control method

			sap.m.Select.prototype.onBeforeRendering.apply(this, arguments);

		},
		onSelectionChange: function (oControlEvent) {

			// get selected item

			var oItem = oControlEvent.getParameter("selectedItem");

			// check if the add value option is enabled and if the key is the ‘add option’ key

			if (this.getAddValueEnabled() && oItem.getKey() === this.ADD_OPTION_KEY) {

				this._createNewOptionDialog();

			}

			// execute standard control method

			sap.m.Select.prototype.onSelectionChange.apply(this, arguments);

		},

		_createNewOptionDialog: function () {

			// create dialog with input field

			var that = this;

			var oDialog = new sap.m.Dialog({

				title: 'Add value',

				content: new sap.m.Input({

					id: 'idNewValueInput'

				}),

				beginButton: new sap.m.Button({

					text: 'Add',

					press: function () {

						that._handleNewOption();

						oDialog.close();

					}

				}),

				afterClose: function () {

					oDialog.destroy();

				}

			});

			oDialog.open();

		},

		_handleNewOption: function () {

			// get new option value

			var oInput = sap.ui.getCore().byId("idNewValueInput");

			var sNewValue = oInput.getValue();

			// create new item to be added in select

			var oItem = new sap.ui.core.Item({

				key: sNewValue,

				text: sNewValue

			});

			// add item to select and set it as selected

			this.addItem(oItem);

			this.setSelectedItem(oItem);

			// fire an event in case the parent object needs to handle this

			this.fireNewValueCreated({

				value: sNewValue

			});

		},

		renderer: "sap.m.SelectRenderer"

	});
});