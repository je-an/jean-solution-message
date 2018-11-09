define(["MessageType", "TypeCheck", "Failure", "Incident"], function (MessageType, TypeCheck, Failure, Incident) {
    /** */
    var IncidentStartRequest = function (incident) {
        this.type = MessageType.INCIDENT_START_REQUEST;
        this.incident = TypeCheck.isInstanceOf(incident, Incident) ? incident : Failure.throwTypeError("incident is not an instance of Incident");
    };
    return IncidentStartRequest;
});