define(["MessageType", "Failure", "TypeCheck"], function (MessageType, Failure, TypeCheck) {
    "use strict";
    /**
     * Message for add a new vehicle to the scenario
     * @param {Object} vehicle - vehicle, which shall be added to the scenario
     */
    var VehicleScenarioAddRequest = function (vehicle) {
        this.type = MessageType.VEHICLE_SCENARIO_ADD_REQUEST;
        this.vehicle = TypeCheck.isObject(vehicle) ? vehicle : Failure.throwTypeError("vehicle is not a object");
    };
    return VehicleScenarioAddRequest;
});