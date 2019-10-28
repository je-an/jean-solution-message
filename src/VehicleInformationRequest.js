define(["MessageType", "Failure", "TypeCheck"], function (MessageType, Failure, TypeCheck) {
    "use strict";
    /**
     * Message for creation of a new vehicle
     * @param {Object} flightInfo - vehicle information for creation of a new asset
     */
    var VehicleInformationRequest = function (flightInfo) {
        this.type = MessageType.VEHICLE_INFORMATION_REQUEST;
        this.flightInformation = TypeCheck.isObject(flightInfo) ? flightInfo : Failure.throwTypeError("flightInfo is not an object");
    };
    return VehicleInformationRequest;
});