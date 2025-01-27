"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var FullStory = require("@fullstory/browser");
var utils_1 = require("./utils");
var RaygunFullStory = /** @class */ (function () {
    function RaygunFullStory() {
    }
    RaygunFullStory.init = function (client, options) {
        var fsEventName = (options === null || options === void 0 ? void 0 : options.fsEventName) || 'Raygun Error';
        /**
         * Returns Raygun's Error event URL
         * @returns string
         */
        var getRaygunUrl = function () { return "Could not retrieve url"; };
        client('withCustomData', function () {
            // FS.event is immediately ready even if FullStory isn't fully bootstrapped
            FullStory.event(fsEventName, __assign({ raygunUrl: getRaygunUrl() }, utils_1.getOriginalExceptionProperties(event)));
            return {
                fullstoryUrl: FullStory.getCurrentSessionURL(true) || 'current session URL API not ready'
            };
        });
    };
    return RaygunFullStory;
}());
exports.default = RaygunFullStory;
