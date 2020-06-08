"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = function (dateString) {
    var dateParts = dateString.split('/').map(function (value) {
        return parseInt(value);
    });
    // because the month value is zero indexed, that why we need minus 1
    return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
//# sourceMappingURL=utils.js.map