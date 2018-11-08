define([
    "MessageType",
    "Failure",
    "LayerConfiguration",
    "LayerConfigurationUpdateType",
    "TypeCheck"
], function (
    MessageType,
    Failure,
    LayerConfiguration,
    LayerConfigurationUpdateType,
    TypeCheck
) {
        "use strict";
        /**
         * @param {LayerConfiguration} layerConfiguration - the configured layer 
         * @param {LayerConfigurationUpdateType} updateType - the update type
         * 
         */
        var LayerConfigurationUpdateRequest = function (layerConfiguration, updateType) {
            this.type = MessageType.LAYER_CONFIGURATION_UPDATE_REQUEST;
            this.layerConfiguration = TypeCheck.isInstanceOf(layerConfiguration, LayerConfiguration) ? layerConfiguration : Failure.throwTypeError("layerConfiguration is not an instance of LayerConfiguration");
            this.updateType = TypeCheck.isEnumValue(updateType, LayerConfigurationUpdateType) ? updateType : Failure.throwTypeError("updateType is not a value of LayerConfigurationUpdateType");
        };
        return LayerConfigurationUpdateRequest;
    });