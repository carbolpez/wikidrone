'use strict';

var configVars = {
  CLOUD_URL: "http://localhost:3000",
  CONTEXT: "service",
  REGISTER_OPERATOR_URI: "registry/registerOperator",
  FIND_REGISTERS_URI: "registry/findRegisters",
  SEND_OPERATION_IMAGE_URI: "track/addTrackImage",
  SEND_OPERATION_IMAGES_URI: "track/addTrackImages",
  FETCH_IMAGELIST_URI: "track/getImageList",
  GET_IMAGE_URI: "track/getImage",
  CONTRACT_ADDRESS: "0xb933EFc9A575167789975a8Eed0CC3b51ac671E1",
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
