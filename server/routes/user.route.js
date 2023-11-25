import express from 'express'
const router = express.Router();
import { provider } from '../utils/web3.js.js';
import {userAbi} from '../utils/userAbi.js.js';
import { ethers } from 'ethers';


// Create a new user
router.post('/create', async (req, res) => {
    try {
        const { walletAddress, name, email, userType } = req.body;
        const userContract = new ethers.Contract(
          "0x3a4D71b37972095d1FEd5AA45351412240BDa142",
            userAbi,
            provider.getSigner(0)
        );

        console.log('Available Contract Methods:', userContract.functions);
        const tx = await userContract.functions.addUser(walletAddress, name, email, userType);
        const receipt = await tx.wait();
        console.log('Transaction Hash:', tx.hash);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
);

export default router;