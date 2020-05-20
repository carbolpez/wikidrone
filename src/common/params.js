'use strict';

var configVars = {
  CLOUD_URL: "http://192.168.0.159:3000",
  ETHEREUM_URL: "ws://192.168.0.159:7545",
  CONTEXT: "service",
  REGISTER_OPERATOR_URI: "registry/registerOperator",
  FIND_REGISTERS_URI: "registry/findRegisters",
  DELETE_REGISTERS_URI: "admin/deleteOperator",
  DELETE_IMAGES_URI: "admin/deleteImages",
  SEND_OPERATION_IMAGE_URI: "track/addTrackImage",
  SEND_OPERATION_IMAGES_URI: "track/addTrackImages",
  FETCH_IMAGELIST_URI: "track/getImageList",
  GET_IMAGE_URI: "track/getImage",
  CONTRACT_ADDRESS: "0x84212C147aC836661Ea351cb3B5fdb670d68c53C",
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
