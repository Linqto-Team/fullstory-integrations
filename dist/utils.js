"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOriginalExceptionProperties = void 0;
/**
 * Checks if the exception has message
 * @param exception
 * @returns
 */
var isError = function (exception) {
    return exception.message !== undefined;
};
/**
 * Get the message and name properties from the original exception
 * @param {Object} event
 */
var getOriginalExceptionProperties = function (event) {
    if (event && event.originalError && isError(event.originalError)) {
        var originalError = event.originalError || {};
        var name_1 = originalError.name, message = originalError.message;
        return { name: name_1, message: message };
    }
    return {};
};
exports.getOriginalExceptionProperties = getOriginalExceptionProperties;
