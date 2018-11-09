define(["MessageType"], function (MessageType) {
    /** */
    var IncidentListRequest = function () {
        this.type = MessageType.INCIDENT_LIST_REQUEST;
    };
    return IncidentListRequest;
});