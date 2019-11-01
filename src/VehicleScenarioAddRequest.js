define(["MessageType", "Failure", "TypeCheck"], function (MessageType, Failure, TypeCheck) {
    "use strict";
    /**
     * Message for add a new vehicle to the scenario
     * @param {String} id - vehicle id, which shall be added to the scenario
     */
    var VehicleScenarioAddRequest = function (id) {
        this.type = MessageType.VEHICLE_SCENARIO_ADD_REQUEST;
        this.id = TypeCheck.isString(id) ? id : Failure.throwTypeError("id is not a string");
    };
    return VehicleScenarioAddRequest;
});