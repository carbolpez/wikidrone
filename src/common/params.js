'use strict';

var configVars = {
  CLOUD_URL: "http://localhost:3000",
  CONTEXT: "service",
  REGISTER_OPERATOR_URI: "registry/registerOperator",
  FIND_REGISTERS_URI: "registry/findRegisters",
  CONTRACT_ADDRESS: "0xBD904C5D8671f9A45182048C0886E45c03e4d1f5",
  /*DEFAULT_CENTER_POINT: {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [125.6, 10.1]
    },
    "properties": {
      "name": "Madrid"
    }
  }*/
  DEFAULT_CENTER_POINT: {"lat":40.52667317315881,"lng":-3.6261182582661533}
};
export default
{
  configVars
}
