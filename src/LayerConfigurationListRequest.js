define(["MessageType", "Failure", "LayerConfiguration"], function (MessageType, Failure, LayerConfiguration) {
    "use strict";
    /** */
    var LayerConfigurationListRequest = function () {
        this.type = MessageType.LAYER_CONFIGURATION_LIST_REQUEST;
    };
    return LayerConfigurationListRequest;
});