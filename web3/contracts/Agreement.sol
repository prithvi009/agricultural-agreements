// SPDX-License-Identifier: MIT
pragma solidity >=0.5.0 <0.9.0;

contract AgriculturalAgreement {

    enum PaymentMethod { Ether, Stablecoin, Other }
    enum AgreementStatus { Pending, Accepted, Rejected }

    struct Agreement {
        string farmer; 
        string buyer; 
        string farmerName;
        string buyerName;
        string cropType;
        uint quantity;
        uint pricePerUnit;
        PaymentMethod paymentMethod;
        uint deliveryDate;
        uint contractPeriod;
        string termsAndConditions;
    }

    mapping(uint => Agreement) public agreements;
    uint public agreementCount;

    event AgreementFulfilled(uint agreementId);

    modifier onlyParties(uint _agreementId) {
        Agreement storage agreement = agreements[_agreementId];
        require(keccak256(abi.encodePacked(msg.sender)) == keccak256(abi.encodePacked(agreement.farmer)) || keccak256(abi.encodePacked(msg.sender)) == keccak256(abi.encodePacked(agreement.buyer)), "Unauthorized");
        _;
    }

    modifier onlyFarmer(uint _agreementId) {
        Agreement storage agreement = agreements[_agreementId];
        require(keccak256(abi.encodePacked(msg.sender)) == keccak256(abi.encodePacked(agreement.farmer)), "Only the farmer can call this function");
        _;
    }

    modifier onlyBuyer(uint _agreementId) {
        Agreement storage agreement = agreements[_agreementId];
        require(keccak256(abi.encodePacked(msg.sender)) == keccak256(abi.encodePacked(agreement.buyer)), "Only the buyer can call this function");
        _;
    }



    function createAgreement(
        string memory _farmer,
        string memory _buyer,
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
        require(bytes(_farmer).length > 0 && bytes(_buyer).length > 0, "Invalid addresses");

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
        newAgreement.deliveryDate = _deliveryDate;
        newAgreement.contractPeriod = _contractPeriod;
        newAgreement.termsAndConditions = _termsAndConditions;
    }

    function fulfillAgreement(uint _agreementId) external payable onlyParties(_agreementId) onlyFarmer(_agreementId)  {
        Agreement storage agreement = agreements[_agreementId];

        emit AgreementFulfilled(_agreementId);
    }

    function getAllAgreementsForAddress(string memory _address) external view returns (Agreement[] memory) {
        uint count = 0;
        for (uint i = 1; i <= agreementCount; i++) {
            Agreement storage agreement = agreements[i];
            if (
                keccak256(abi.encodePacked(agreement.farmer)) == keccak256(abi.encodePacked(_address)) ||
                keccak256(abi.encodePacked(agreement.buyer)) == keccak256(abi.encodePacked(_address))
            ) {
                count++;
            }
        }

        
        Agreement[] memory result = new Agreement[](count);
        uint index = 0;

        for (uint i = 1; i <= agreementCount; i++) {
            Agreement storage agreement = agreements[i];
            if (
                keccak256(abi.encodePacked(agreement.farmer)) == keccak256(abi.encodePacked(_address)) ||
                keccak256(abi.encodePacked(agreement.buyer)) == keccak256(abi.encodePacked(_address))
            ) {
                result[index] = agreement;
                index++;
            }
        }

        return result;
    }


    
}
