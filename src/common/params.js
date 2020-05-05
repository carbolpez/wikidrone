'use strict';

var configVars = {
  CLOUD_URL: "http://localhost:3000",
  CONTEXT: "service",
  REGISTER_OPERATOR_URI: "registry/registerOperator",
  FIND_REGISTERS_URI: "registry/findRegisters",
  CONTRACT_ADDRESS: "0x3B5Ed160A51068E84C1daB7A78Bc2386B18d271C",
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
