// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract AgriculturalAgreement {

    enum PaymentMethod { Ether, Stablecoin, Other }

    struct Agreement {
        address farmer;
        address buyer;
        string farmerName;
        string buyerName;
        string cropType;
        uint quantity;
        uint pricePerUnit;
        PaymentMethod paymentMethod;
        bool isAgreementFulfilled;
        uint deliveryDate;
        uint contractPeriod;
        string termsAndConditions;
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
        string memory _farmerName,
        string memory _buyerName,
        string memory _cropType,
        uint _quantity,
        uint _pricePerUnit,
        PaymentMethod _paymentMethod,
        uint _deliveryDate,
        uint _contractPeriod,
        string memory _termsAndConditions
    ) external {
        require(_farmer != address(0) && _buyer != address(0), "Invalid addresses");

        agreementCount++;

        Agreement storage newAgreement = agreements[agreementCount];
        newAgreement.farmer = _farmer;
        newAgreement.buyer = _buyer;
        newAgreement.farmerName = _farmerName;
        newAgreement.buyerName = _buyerName;
        newAgreement.cropType = _cropType;
        newAgreement.quantity = _quantity;
        newAgreement.pricePerUnit = _pricePerUnit;
        newAgreement.paymentMethod = _paymentMethod;
        newAgreement.isAgreementFulfilled = false;
        newAgreement.deliveryDate = _deliveryDate;
        newAgreement.contractPeriod = _contractPeriod;
        newAgreement.termsAndConditions = _termsAndConditions;
    }

    function fulfillAgreement(uint _agreementId) external payable onlyParties(_agreementId) onlyFarmer(_agreementId) agreementNotFulfilled(_agreementId) {
        Agreement storage agreement = agreements[_agreementId];

        agreement.isAgreementFulfilled = true;

        emit AgreementFulfilled(_agreementId);
    }
}
