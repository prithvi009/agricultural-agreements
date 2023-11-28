import Web3  from 'web3';
import dotenv from 'dotenv';
dotenv.config();

export const web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"));

export const contractAbi = [
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "agreementId",
        "type": "uint256"
      }
    ],
    "name": "AgreementFulfilled",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "agreementCount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "agreements",
    "outputs": [
      {
        "internalType": "string",
        "name": "farmer",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "buyer",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "farmerName",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "buyerName",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "cropType",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "quantity",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "pricePerUnit",
        "type": "uint256"
      },
      {
        "internalType": "enum AgriculturalAgreement.PaymentMethod",
        "name": "paymentMethod",
        "type": "uint8"
      },
      {
        "internalType": "uint256",
        "name": "deliveryDate",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "contractPeriod",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "termsAndConditions",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_farmer",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_buyer",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_farmerName",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_buyerName",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_cropType",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "_quantity",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_pricePerUnit",
        "type": "uint256"
      },
      {
        "internalType": "enum AgriculturalAgreement.PaymentMethod",
        "name": "_paymentMethod",
        "type": "uint8"
      },
      {
        "internalType": "uint256",
        "name": "_deliveryDate",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_contractPeriod",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "_termsAndConditions",
        "type": "string"
      }
    ],
    "name": "createAgreement",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_agreementId",
        "type": "uint256"
      }
    ],
    "name": "fulfillAgreement",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function",
    "payable": true
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_address",
        "type": "string"
      }
    ],
    "name": "getAllAgreementsForAddress",
    "outputs": [
      {
        "components": [
          {
            "internalType": "string",
            "name": "farmer",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "buyer",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "farmerName",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "buyerName",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "cropType",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "quantity",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "pricePerUnit",
            "type": "uint256"
          },
          {
            "internalType": "enum AgriculturalAgreement.PaymentMethod",
            "name": "paymentMethod",
            "type": "uint8"
          },
          {
            "internalType": "uint256",
            "name": "deliveryDate",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "contractPeriod",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "termsAndConditions",
            "type": "string"
          }
        ],
        "internalType": "struct AgriculturalAgreement.Agreement[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  }
]

export const contractAddress=process.env.AGRI_CONTRACT_ADDRESS