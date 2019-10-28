define(["MessageType", "Failure", "TypeCheck"], function (MessageType, Failure, TypeCheck) {
    "use strict";
    /**
     * Message for add a new vehicle dataset to the scenario
     * @param {String} id - id of vehicle, which shall be added to the scenario
     */
    var VehicleAddRequest = function (id) {
        this.type = MessageType.VEHICLE_ADD_REQUEST;
        this.id = TypeCheck.isString(id) ? id : Failure.throwTypeError("id is not a string");
    };
    return VehicleAddRequest;
});