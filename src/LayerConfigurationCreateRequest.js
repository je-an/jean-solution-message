define([
    "MessageType",
    "Failure",
    "LayerConfiguration",
    "TypeCheck"
], function (
    MessageType,
    Failure,
    LayerConfiguration,
    TypeCheck
) {
        "use strict";
        /**@param {LayerConfiguration} layerConfiguration - the configured layer */
        var LayerConfigurationCreateRequest = function (layerConfiguration) {
            this.type = MessageType.LAYER_CONFIGURATION_CREATE_REQUEST;
            this.layerConfiguration = TypeCheck.isInstanceOf(layerConfiguration, LayerConfiguration) ? layerConfiguration : Failure.throwTypeError("layerConfiguration is not an instance of LayerConfiguration");
        };
        return LayerConfigurationCreateRequest;
    });