define(["MessageType", "Failure", "TypeCheck"], function (MessageType, Failure, TypeCheck) {
    "use strict";
    /** @param {Boolean} isDisplayed - True if terrain shall be displayed, false otherwise */
    var TerrainStateUpdateRequest = function (isDisplayed) {
        this.type = MessageType.TERRAIN_STATE_UPDATE_REQUEST;
        this.isDisplayed = TypeCheck.isBoolean(isDisplayed) ? isDisplayed : Failure.throwTypeError("isDisplayed is not a boolean");
    };
    return TerrainStateUpdateRequest;
});