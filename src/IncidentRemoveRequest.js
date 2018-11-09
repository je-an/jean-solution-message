define(["MessageType", "TypeCheck", "Failure"], function (MessageType, TypeCheck, Failure) {
    /** */
    var IncidentRemoveRequest = function (incidentId) {
        this.type = MessageType.INCIDENT_REMOVE_REQUEST;
        this.incidentId = TypeCheck.isString(incidentId) ? incidentId : Failure.throwTypeError("incidentId is not a string");
    };
    return IncidentRemoveRequest;
});