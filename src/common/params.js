'use strict';

var configVars = {
  CLOUD_URL: "http://localhost:3000",
  CONTEXT: "service",
  REGISTER_OPERATOR_URI: "registry/registerOperator",
  FIND_REGISTERS_URI: "registry/findRegisters",
  CONTRACT_ADDRESS: "0x6a5D7d72D3031bAB003Bf5836746FC044e37f531",
  DEFAULT_CENTER_POINT: {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [125.6, 10.1]
    },
    "properties": {
      "name": "Madrid"
    }
  }
};
export default
{
  configVars
}
