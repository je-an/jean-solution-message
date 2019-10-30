define(["MessageType", "Failure", "TypeCheck"], function (MessageType) {
    "use strict";
    /** */
    var VehicleListRequest = function () {
        this.type = MessageType.VEHICLE_LIST_REQUEST;
    };
    return VehicleListRequest;
});