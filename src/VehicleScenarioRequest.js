define(["MessageType", "Failure", "TypeCheck"], function (MessageType, Failure, TypeCheck) {
    "use strict";
    /** */
    var VehicleScenarioRequest = function () {
        this.type = MessageType.VEHICLE_SCENARIO_REQUEST;
    };
    return VehicleScenarioRequest;
});