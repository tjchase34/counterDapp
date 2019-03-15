pragma solidity ^0.5.0; // imagine a big integer counter that the whole world could share
contract Counter {

    uint storedData;

    function initialize (uint x) public {
        storedData = x;
    }

    function get() view public returns (uint) {
        return storedData;
    }

    function increment () public {
        storedData = storedData + 1;
        return;
    }

    function decrement () public {
        storedData = storedData - 1;
        return;
    }

}
