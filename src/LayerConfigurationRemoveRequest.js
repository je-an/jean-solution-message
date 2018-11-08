define([
    "MessageType",
    "Failure",
    "TypeCheck"
], function (
    MessageType,
    Failure,
    TypeCheck
) {
    "use strict";
    /**@param {String} layerConfigurationId - the configured layer */
    var LayerConfigurationRemoveRequest = function (layerConfigurationId) {
        this.type = MessageType.LAYER_CONFIGURATION_REMOVE_REQUEST;
        this.layerConfigurationId = TypeCheck.isString(layerConfigurationId) ? layerConfigurationId : Failure.throwTypeError("layerConfiguration is not a string");
    };
    return LayerConfigurationRemoveRequest;
});