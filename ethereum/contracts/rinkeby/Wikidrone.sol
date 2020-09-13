pragma solidity ^0.5.16;

contract Wikidrone {

    struct Track {
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
        string metadata;
    }


    uint public operatorsCount;
    uint public tracksCount;
    address public manager;
    Track[] public tracks;
    mapping(address => bool) operators;

    constructor(address creator) public {
        manager = creator;
        operatorsCount=0;
        tracksCount=0;
    }

    modifier restricted() {
        require(operators[msg.sender]);
        _;
    }

    modifier protected() {
        require(manager == msg.sender);
        _;
    }

    function resetOperator(address opAddress) public protected{
        require(manager == msg.sender);
        delete operators[opAddress];
        if (operatorsCount>0)
          operatorsCount--;
    }

    function resetTracks() public protected{
        delete tracks;
        delete tracksCount;
    }

    function registerOperator() public {
        require(!operators[msg.sender]);
        operators[msg.sender] = true;
        operatorsCount++;
    }

    function createTrack(address operator,string memory start,string memory finish,string memory routePoints, uint startTime,uint endTime,
      int32 minAltitude,int32 maxAltitude,string memory description,string memory metadata) public restricted{
        Track memory newTrack = Track({
          operator:operator,
          start:start,
          finish:finish,
          routePoints:routePoints,
          startTime:startTime,
          endTime:endTime,
          minAltitude:minAltitude,
          maxAltitude:maxAltitude,
          description:description,
          //Metadata is the key for the track
          metadata:metadata
        });
        //Id of the track must be stored in metadata model out of blockchain
        tracks.push(newTrack);
        tracksCount++;
        //tracks[id] = newTrack;
    }

    function getTrack(uint i) public view returns (
        address operator,
        string memory start,
        string memory finish,
        string memory routePoints,
        uint startTime,
        uint endTime,
        int32 minAltitude,
        int32 maxAltitude,
        string memory description,
        string memory metadata) {

        operator = tracks[i].operator;
        start = tracks[i].start;
        finish = tracks[i].finish;
        routePoints = tracks[i].routePoints;
        startTime = tracks[i].startTime;
        endTime = tracks[i].endTime;
        minAltitude = tracks[i].minAltitude;
        maxAltitude = tracks[i].maxAltitude;
        description = tracks[i].description;
        metadata = tracks[i].metadata;
        return (
            operator,
            start,
            finish,
            routePoints,
            startTime,
            endTime,
            minAltitude,
            maxAltitude,
            description,
            metadata
        );

    }
}
