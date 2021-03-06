/*global define*/
define(['../Core/defaultValue'], function(defaultValue) {
    "use strict";

    /**
     * Defines a list of commands whose geometry are bound by near and far distances from the camera.
     * @alias FrustumCommands
     * @constructor
     *
     * @param {Number} [near=0.0] The lower bound or closest distance from the camera.
     * @param {Number} [far=0.0] The upper bound or farthest distance from the camera.
     */
    var FrustumCommands = function(near, far) {
        /**
         * The lower bound or closest distance from the camera.
         * @type {Number}
         */
        this.near = defaultValue(near, 0.0);
        /**
         * The upper bound or farthest distance from the camera.
         * @type {Number}
         */
        this.far = defaultValue(far, 0.0);
        /**
         * The list of commands.
         * @type {Array}
         */
        this.commands = [];
    };

    return FrustumCommands;
});