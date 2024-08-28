// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

contract Chai {
    struct Memo {
        string name;
        string message;
        uint timestamp;
        address from;
    }

    event NewMemo (
        string name,
        string message,
        uint256 timestamp,
        address indexed from
    );

    event WithdrawnTips (
        string message
    );

    Memo[] memos;
    address payable owner;

    constructor() payable {
        owner = payable(msg.sender);
    }

    receive( ) external payable{}

    function buyChai(string memory _name, string memory _message) public payable {
        require(msg.value > 0, "Can't buy coffee with 0 ETH");
        memos.push(Memo(_name, _message, block.timestamp, msg.sender));
        emit NewMemo(_name, _message, block.timestamp, msg.sender);
    }

    function withdrawnTips() public {
        require(owner.send(address(this).balance));
        emit WithdrawnTips("Balance has been withdrawn to owner address.");
    }

    function getMemos() public view returns (Memo[] memory) {
        return memos;
    }

    function getContractBal() public view returns (uint) {
        return address(this).balance;
    }
}