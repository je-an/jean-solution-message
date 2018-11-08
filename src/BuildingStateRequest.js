define(["MessageType", "Failure"], function (MessageType, Failure) {
    "use strict";
    /** */
    var BuildingStateRequest = function () {
        this.type = MessageType.BUILDING_STATE_REQUEST;
    };
    return BuildingStateRequest;
});