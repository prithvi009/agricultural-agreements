import express from 'express';
import dotenv from 'dotenv';
import { contractAbi, contractAddress, web3 } from '../utils/agri.contract.js';

dotenv.config();

const router = express.Router();


router.post('/create/:buyer', async(req, res) => {

    const { buyer } = req.params;
    const { farmer, farmerName, buyerName, cropType, quantity, pricePerUnit, paymentMethod, deliveryDate, contractPeriod, termsAndConditions  } = req.body;

    try{
        const contract = new web3.eth.Contract(contractAbi, contractAddress);
        const tx = await contract.methods.createAgreement(farmer, buyer, farmerName, buyerName, cropType, quantity, pricePerUnit, paymentMethod, deliveryDate, contractPeriod, termsAndConditions).send({ from: buyer, gas: 3000000, gasPrice: 20000000000 });
        res.status(200).json({ message: 'Agri Contract created successfully' });
    }
    catch(error){
        res.status(500).json({ error: error.message });
    }
}
);

router.get('/:walletAddress', async(req, res) => {
    const { walletAddress } = req.params;
    try{
        const contract = new web3.eth.Contract(contractAbi, contractAddress);
        const tx = await contract.methods.getAllAgreementsForAddress(walletAddress).call();
        res.status(200).json({ message: 'Agri Contract fetched successfully', data: tx });
    }
    catch(error){
        res.status(500).json({ error: error.message });
    }
}
);

router.get('/:agreementId', async(req, res) => {
    const { agreementId } = req.params;
    try{
        const contract = new web3.eth.Contract(contractAbi, contractAddress);
        const tx = await contract.methods.agreements(agreementId).call();
        console.log(tx)
        res.status(200).json({ message: 'Agri Contract fetched successfully', data: tx });
    }
    catch(error){
        res.status(500).json({ error: error.message });
    }
}
);

router.post('/:walletAddress/fulfill/:agreementId', async(req, res) => {
    const { agreementId, walletAddress } = req.params;
    try{
        const contract = new web3.eth.Contract(contractAbi, contractAddress);
        const tx = await contract.methods.fulfillAgreement(agreementId).send({ from: walletAddress, gas: 3000000, gasPrice: 20000000000 });
        res.status(200).json({ message: 'Agri Contract fulfilled successfully' });
    }
    catch(error){
        res.status(500).json({ error: error.message });
    }
}
);


    


export default router;