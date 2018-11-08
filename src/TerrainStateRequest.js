define(["MessageType", "Failure"], function (MessageType, Failure) {
    "use strict";
    /** */
    var TerrainStateRequest = function () {
        this.type = MessageType.TERRAIN_STATE_REQUEST;
    };
    return TerrainStateRequest;
});