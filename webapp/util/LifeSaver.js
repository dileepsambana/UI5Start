sap.ui.define([
    "sap/ui/core/format/NumberFormat"
], function (NumberFormat) {
    'use strict';
    return {
        convertCaseToUpper: function (inp) {
            if (inp) {
                return inp.toUpperCase();
            }
        },
        numberFormat: function (amt, curr) {
            var oCurrencyFormat = NumberFormat.getCurrencyInstance({
                currencyCode: false
            });
            return oCurrencyFormat.format(amt, curr);
        }
    }

});