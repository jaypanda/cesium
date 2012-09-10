/*global define*/
define([
    ], function(
        ) {
    "use strict";

    /**
     * A {@link TileDiscardPolicy} specifying that tile images should never be discard.
     *
     * @alias NeverTileDiscardPolicy
     * @constructor
     *
     * @see DiscardMissingTileImagePolicy
     */
    var NeverTileDiscardPolicy = function(description) {
    };

    /**
     * Given a tile image, decide whether to discard that image.
     *
     * @param {Image|Promise} image An image, or a promise that will resolve to an image.
     *
     * @returns A promise that will resolve to true if the tile should be discarded.
     */
    NeverTileDiscardPolicy.prototype.shouldDiscardImage = function(image) {
        return false;
    };

    return NeverTileDiscardPolicy;
});