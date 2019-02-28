pragma solidity ^0.5.2; // imagine a big integer counter that the whole world could share
contract Counter {

    uint storedData;

    function initialize (uint x) public {
        storedData = x;
    }

    function get() view public returns (uint) {
        return storedData;
    }

    function increment (uint n) public {
        storedData = storedData + n;
        return;
    }

    function decrement (uint n) public {
        storedData = storedData - n;
        return;
    }

}
