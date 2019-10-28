define(["MessageType", "Failure", "TypeCheck"], function (MessageType, Failure, TypeCheck) {
    "use strict";
    /**
     * Message for remove a vehicle dataset to the scenario
     * @param {String} id - id of vehicle, which shall be removed from the scenario
     */
    var VehicleRemoveRequest = function (id) {
        this.type = MessageType.VEHICLE_REMOVE_REQUEST;
        this.id = TypeCheck.isString(id) ? id : Failure.throwTypeError("id is not a string");
    };
    return VehicleRemoveRequest;
});