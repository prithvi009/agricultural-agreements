import express from 'express'
const router = express.Router();
import dotenv from 'dotenv';
dotenv.config();
import { contractAbi, contractAddress, web3 } from '../utils/user.contract.js';



router.post('/', async (req, res) => {
    try {
        const { walletAddress, password } = req.body;
        const contract = new web3.eth.Contract(contractAbi, contractAddress);
        console.log(contract)
        const tx = await contract.methods.loginUser(walletAddress, password).call();
        res.status(200).json(tx[1]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
);


// Create a new user
router.post('/create', async (req, res) => {
    try {
        const { walletAddress, name, email, userType, password } = req.body;
        const contract = new web3.eth.Contract(contractAbi, contractAddress);
        const tx = await contract.methods.addUser(walletAddress, name, email, userType, password).send({ from: '0x8A5245FA78174281327821904071Edf94c18414E', gas: 3000000, gasPrice: 20000000000 });
        console.log(tx)
        res.status(200).json({ message: 'User created successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
);

export default router;