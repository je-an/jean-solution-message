define(["MessageType", "Failure", "TypeCheck"], function (MessageType, Failure, TypeCheck) {
    "use strict";
    /** @param {Boolean} isDisplayed - True if buildings shall be displayed, false otherwise */
    var BuildingStateUpdateRequest = function (isDisplayed) {
        this.type = MessageType.BUILDING_STATE_UPDATE_REQUEST;
        this.isDisplayed = TypeCheck.isBoolean(isDisplayed) ? isDisplayed : Failure.throwTypeError("isDisplayed is not a boolean");
    };
    return BuildingStateUpdateRequest;
});