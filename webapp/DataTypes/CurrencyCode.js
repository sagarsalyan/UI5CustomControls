sap.ui.define("App/CustomControls/DataTypes/CurrencyCode",[
    "sap/ui/base/DataType"
], function(DataType) {
    "use strict";
                    
    return DataType.createType(
        "App.CustomControls.DataTypes.CurrencyCode", 
        {
            isValid : function(sValue) {
                return sValue === "EUR" || sValue === "USD";
            },
        },
        DataType.getType("string")
    );
}, true);