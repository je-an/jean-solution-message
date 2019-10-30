define(["MessageType", "Failure", "TypeCheck"], function (MessageType) {
    "use strict";
    /** */
    var VehicleRequest = function () {
        this.type = MessageType.VEHICLE_REQUEST;
    };
    return VehicleRequest;
});