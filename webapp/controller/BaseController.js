sap.ui.define([
    'sap/ui/core/mvc/Controller'
], function(Controller) {
    'use strict';
    return Controller.extend("Ganeshaya.controller.BaseController",{
        onInit: function(){
            // alert("You are entering in my world");
        },
        clickMe: function(params) {
            //sap.ui.getCore()
            var oView = this.getView();
            var oControl = oView.byId("MyButton");

            //var oControl = sap.ui.getCore().byId("__xmlview0--MyButton");

            oControl.setVisible(false);
            alert("Button is clicked");
        }
    });
});