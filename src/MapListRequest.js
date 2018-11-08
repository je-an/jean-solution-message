define(["MessageType", "Failure"], function (MessageType, Failure) {
    "use strict";
    /** */
    var MapListRequest = function () {
        this.type = MessageType.MAP_LIST_REQUEST;
    };
    return MapListRequest;
});