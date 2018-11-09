define(["MessageType", "TypeCheck", "Failure", "Incident"], function (MessageType, TypeCheck, Failure, Incident) {
    /** */
    var IncidentCreateRequest = function (incident) {
        this.type = MessageType.INCIDENT_CREATE_REQUEST;
        this.incident = TypeCheck.isInstanceOf(incident, Incident) ? incident : Failure.throwTypeError("incident is not an instance of Incident");
    };
    return IncidentCreateRequest;
});