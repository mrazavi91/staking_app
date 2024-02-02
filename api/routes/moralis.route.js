import { Router } from "express";
import { getWalletBalance } from "../controllers/moralis.controller.js";


const moralisRouter = Router()


moralisRouter.get('/get-wallet-balance',getWalletBalance)


export default moralisRouter