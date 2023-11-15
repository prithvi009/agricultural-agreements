// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MultiPartyAgriculturalAgreement {

    struct Agreement {
        address farmer;
        address buyer;
        string cropType;
        uint quantity;
        uint pricePerUnit;
        bool isAgreementFulfilled;
    }

    mapping(uint => Agreement) public agreements;
    uint public agreementCount;

    event AgreementFulfilled(uint agreementId);

    modifier onlyParties(uint _agreementId) {
        Agreement storage agreement = agreements[_agreementId];
        require(msg.sender == agreement.farmer || msg.sender == agreement.buyer, "Unauthorized");
        _;
    }

    modifier onlyFarmer(uint _agreementId) {
        Agreement storage agreement = agreements[_agreementId];
        require(msg.sender == agreement.farmer, "Only the farmer can call this function");
        _;
    }

    modifier onlyBuyer(uint _agreementId) {
        Agreement storage agreement = agreements[_agreementId];
        require(msg.sender == agreement.buyer, "Only the buyer can call this function");
        _;
    }

    modifier agreementNotFulfilled(uint _agreementId) {
        Agreement storage agreement = agreements[_agreementId];
        require(!agreement.isAgreementFulfilled, "Agreement already fulfilled");
        _;
    }

    function createAgreement(
        address _farmer,
        address _buyer,
        string memory _cropType,
        uint _quantity,
        uint _pricePerUnit
    ) external {
        require(_farmer != address(0) && _buyer != address(0), "Invalid addresses");

        agreementCount++;

        Agreement storage newAgreement = agreements[agreementCount];
        newAgreement.farmer = _farmer;
        newAgreement.buyer = _buyer;
        newAgreement.cropType = _cropType;
        newAgreement.quantity = _quantity;
        newAgreement.pricePerUnit = _pricePerUnit;
        newAgreement.isAgreementFulfilled = false;
    }

    function fulfillAgreement(uint _agreementId) external onlyParties(_agreementId) onlyFarmer(_agreementId) agreementNotFulfilled(_agreementId) {
        Agreement storage agreement = agreements[_agreementId];

        agreement.isAgreementFulfilled = true;

        // Emit event
        emit AgreementFulfilled(_agreementId);
    }

}
