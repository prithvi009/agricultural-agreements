import express from 'express'
const router = express.Router();
import dotenv from 'dotenv';
dotenv.config();
import { contractAbi, contractAddress, web3 } from '../utils/user.contract.js';



router.get('/', async (req, res) => {
    try {
        const { walletAddress, password } = req.body;
        const contract = new web3.eth.Contract(contractAbi, contractAddress);
        console.log(contract)
        const tx = await contract.methods.loginUser(walletAddress, password).call();
        res.status(200).json({ message: 'User created successfully', data: tx });
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
        const tx = await contract.methods.addUser(walletAddress, name, email, userType, password).send({ from: '0x252127FCAD82b4d8c85A902535f08d7786694c54', gas: 3000000, gasPrice: 20000000000 });
        res.status(200).json({ message: 'User created successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
);

export default router;