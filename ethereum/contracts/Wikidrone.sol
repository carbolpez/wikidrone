pragma solidity ^0.4.17;

contract Wikidrone {

    struct Track {
        //uint32 id;
        address operator;
        string start;
        string finish;
        //JSON with an array of all points
        string routePoints;
        uint startTime;
        uint endTime;
        int32 minAltitude;
        int32 maxAltitude;
        string description;
        //string metadata;
    }

    mapping(address => bool) operators;
    uint public operatorsCount;
    address public manager;
    //Track[] public tracks;
    mapping(string => Track) tracks;

    function Wikidrone(address creator) public {
        manager = creator;
    }

    modifier restricted() {
        require(operators[msg.sender]);
        _;
    }

    function registerOperator() public {
        operators[msg.sender] = true;
        operatorsCount++;
    }

    function createTrack(address operator,string start,string finish,string routePoints, uint startTime,uint endTime,int32 minAltitude,int32 maxAltitude,string description,string metadata) public restricted{
        Track memory newTrack = Track({
          operator:operator,
          start:start,
          finish:finish,
          routePoints:routePoints,
          startTime:startTime,
          endTime:endTime,
          minAltitude:minAltitude,
          maxAltitude:maxAltitude,
          description:description
          //Metadata is the key for the track
          //metadata:metadata
        });

        //tracks.push(newTrack);
        tracks[metadata] = newTrack;
    }

    function getTrack(string metadata) public view returns (Track){
        return tracks[metadata];
    }

}
